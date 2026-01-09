// Auth routes removed — profile endpoint deprecated.
// File retained as a placeholder to avoid accidental imports causing build errors.
import express from 'express'
const Router = express.Router()
Router.get('/', (req, res) => res.status(404).json({ success: false, message: 'auth endpoints removed' }))
export default Router
