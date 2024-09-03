import { Router } from "express";
import { courseRouter } from "./courses.js";
import { topicRouter } from "./topics.js";
import { userRouter } from "./users.js";

const router = Router();

router.use(courseRouter);
router.use(topicRouter);
router.use(userRouter);

export { router };
