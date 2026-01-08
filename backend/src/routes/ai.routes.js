import express from "express";
import aiController from "../controllers/ai.controllers.js";
const Router = express.Router();

Router.post('/review-code', aiController);

export default Router;
