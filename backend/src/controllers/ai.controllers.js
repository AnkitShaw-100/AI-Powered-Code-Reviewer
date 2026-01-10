import aiService from "../services/ai.service.js";

export default async function aiController(req, res) {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Code is required",
      });
    }

    const prompt = `
Quick code review.

Constraints:
- Max 200 words
- Plain text only
- Write in proper bullet format
- Skip obvious points
- If no issues, say "No issues found"

Code:
${code}
`;

    const response = await aiService(prompt);

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    // console.error("AI Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "AI service failed",
      error: error.message,
    });
  }
}
