import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "./../entity/User";

/**
 * Loads user by a given id.
 */
export async function userGetByIdAction(req: Request, res: Response) {
  const userRepository = getManager().getRepository(User);
  const user = await userRepository.findOne(req.params.id);

  if (!user) {
    res.status(404);
    res.end();
    return;
  }

  res.send(user);
}
