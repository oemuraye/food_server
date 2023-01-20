import express from "express";
import { signin, signup } from "../controllers/user";

const router = express.Router();

router.get("/signin", signin);
router.post("/signup", signup);

export default router;