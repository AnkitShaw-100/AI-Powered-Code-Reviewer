import express from "express";
import aiController from "../controllers/ai.controllers.js";
import requireAuth from "../middleware/requireAuth.js";

const Router = express.Router();

// Protect code-review endpoint; expects `Authorization: Bearer <token>` header
Router.post('/review-code', requireAuth, aiController);

export default Router;
