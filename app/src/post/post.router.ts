import { Router } from "express";

import PostController from "./post.controller";

const router = Router();

router.get("/posts", PostController.findMany);
router.get("/posts/:id", PostController.findOne);
router.post("/posts", PostController.create);
router.put("/posts/:id", PostController.update);
router.delete("/posts/:id", PostController.destroy);

export default router;