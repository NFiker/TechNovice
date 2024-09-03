import { Router } from "express";
import { courseRouter } from "./catalogue.js";

const router = Router();

router.use(courseRouter);

export { router };
