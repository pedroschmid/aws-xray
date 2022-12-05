import { Request, Response } from "express";
import { Post } from "@prisma/client";

import PostDto from "./post.dto";
import PostService from "./post.service";

async function findMany(req: Request, res: Response) {
  const data: Post[] = await PostService.findMany();

  return res.status(200).json({
    status: 200,
    message: "Posts fetched successfully",
    data,
  });
}

async function findOne(req: Request, res: Response) {
  const id: string = req.params.id;

  const data: Post | null = await PostService.findOne(id);

  if (!data) {
    return res.status(404).json({
      status: 404,
      message: "Post not found",
      data,
    });
  }

  return res.status(201).json({
    status: 201,
    message: "Post found successfully",
    data,
  });
}

async function create(req: Request, res: Response) {
  const body: PostDto = req.body;

  const data: Post = await PostService.create(body);

  return res.status(201).json({
    status: 201,
    message: "Post created successfully",
    data,
  });
}

async function update(req: Request, res: Response) {
  const id: string = req.params.id;
  const body: PostDto = req.body;

  const data: Post = await PostService.update(id, body);

  return res.status(200).json({
    status: 200,
    message: "Post updated successfully",
    data,
  });
}

async function destroy(req: Request, res: Response) {
  const id: string = req.params.id;
  const data: Post = await PostService.destroy(id);

  return res.status(200).json({
    status: 200,
    message: "Post excluded successfully",
    data,
  });
}

export default {
    findMany,
    findOne,
    create,
    update,
    destroy
  }