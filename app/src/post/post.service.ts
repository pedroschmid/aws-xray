import { Post } from "@prisma/client";

import PostRepository from "./post.repository";
import PostDto from "./post.dto";

async function findMany(): Promise<Post[]> {
  return await PostRepository.findMany();
}

async function findOne(id: string): Promise<Post | null> {
  return await PostRepository.findOne(id);
}

async function create(postDto: PostDto): Promise<Post> {
  return await PostRepository.create(postDto);
}

async function update(id: string, postDto: PostDto): Promise<Post> {
  return await PostRepository.update(id, postDto);
}

async function destroy(id: string): Promise<Post> {
  return await PostRepository.destroy(id);
}

export default {
  findMany,
  findOne,
  create,
  update,
  destroy
}
