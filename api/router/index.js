import { Router } from 'express';
import { commentRouter } from './comments.js';
import { courseRouter } from './courses.js';
import { topicRouter } from './topics.js';
import { userRouter } from './users.js';
import { watchesRouter } from './watches.js';

const router = Router();

router.use(courseRouter);
router.use(topicRouter);
router.use(userRouter);
router.use(commentRouter);
router.use(watchesRouter);

export { router };
