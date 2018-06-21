import { Request, Response } from "express";
import { userGetAllAction } from "./../action/UserGetAllAction";
import { userGetByIdAction } from "./../action/UserGetByIdAction";

export default {
  async getAll(req: Request, res: Response) {
    return userGetAllAction(req, res);
  },
  async getById(req: Request, res: Response) {
    return userGetByIdAction(req, res);
  }
};
