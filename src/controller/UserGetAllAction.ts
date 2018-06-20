import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "./../entity/User";

/**
 * Loads all users from the database.
 */
export async function userGetAllAction(req: Request, res: Response) {
  const userRepository = getManager().getRepository(User);
  const posts = await userRepository.find();

  res.send(posts);
}
