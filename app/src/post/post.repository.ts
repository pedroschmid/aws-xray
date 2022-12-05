import { Post } from "@prisma/client";

import prismaClient from "../database";
import PostDto from "./post.dto";

async function findMany(params?: object): Promise<Post[]> {
  return await prismaClient.post.findMany({ where: params });
}

async function findOne(id: string): Promise<Post | null> {
  return await prismaClient.post.findFirst({ where: { id } });
}

async function create(postDto: PostDto): Promise<Post> {
  return await prismaClient.post.create({ data: postDto });
}

async function update(id: string, postDto: PostDto): Promise<Post> {
  return await prismaClient.post.update({
    where: { id },
    data: postDto,
  });
}

async function destroy(id: string): Promise<Post> {
  return await prismaClient.post.delete({ where: { id } });
}

export default {
  findMany,
  findOne,
  create,
  update,
  destroy,
};
