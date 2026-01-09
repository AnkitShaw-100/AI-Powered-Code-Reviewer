// Middleware to verify Clerk session tokens using @clerk/clerk-sdk-node
// Requirements:
// - Install @clerk/clerk-sdk-node (already added to this repo)
// - Set the Clerk secret key in the environment as CLERK_API_KEY or CLERK_SECRET_KEY
// Behavior:
// - If a valid Clerk session/token is provided in `Authorization: Bearer <token>`,
//   it attaches `req.clerkSession` and `req.clerkUserId` and calls `next()`.
// - If verification fails, it returns 401.

import { Clerk } from '@clerk/clerk-sdk-node'

const CLERK_KEY = process.env.CLERK_API_KEY || process.env.CLERK_SECRET_KEY
let clerk = null
if (CLERK_KEY) {
  clerk = new Clerk({ apiKey: CLERK_KEY })
}

export default async function requireAuth(req, res, next) {
  const auth = req.headers.authorization || ''
  const token = auth.replace(/^Bearer\s+/i, '').trim()

  if (!token) {
    return res.status(401).json({ success: false, message: 'Missing Authorization header (Bearer token)' })
  }

  if (!clerk) {
    // Clerk key not configured. For development only: attach token and continue.
    req.sessionToken = token
    return next()
  }

  try {
    // Try verifying the token using Clerk SDK. Different Clerk setups may send
    // a session ID or a session JWT — attempt both common verification methods.

    // 1) If the token is a session ID, try to fetch the session.
    let session = null
    try {
      if (clerk.sessions && typeof clerk.sessions.getSession === 'function') {
        session = await clerk.sessions.getSession(token)
      }
    } catch (e) {
      // ignore and try alternative verification
      session = null
    }

    // 2) If we didn't get a session, attempt verification as a JWT (if SDK exposes verify methods).
    if (!session) {
      if (clerk.sessions && typeof clerk.sessions.verifySession === 'function') {
        // verifySession may accept the token or headers depending on SDK version
        session = await clerk.sessions.verifySession(token)
      }
    }

    if (!session) {
      // Last resort: try clerk.verifyToken if available (some SDK versions)
      if (typeof clerk.verifyToken === 'function') {
        session = await clerk.verifyToken(token)
      }
    }

    if (!session) {
      return res.status(401).json({ success: false, message: 'Invalid or expired Clerk session token' })
    }

    // Attach useful session/user info to request for downstream handlers
    req.clerkSession = session
    // Session shape varies across SDK versions; attempt to extract user id
    req.clerkUserId = session?.user_id || session?.userId || session?.user?.id || null

    return next()
  } catch (error) {
    console.error('Clerk verification error:', error)
    return res.status(401).json({ success: false, message: 'Failed to verify Clerk token', error: String(error) })
  }
}
