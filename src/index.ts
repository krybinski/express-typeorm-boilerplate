import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import { AppRoutes } from "./routes";

createConnection()
  .then(async connection => {
    const app = express();

    app.use(bodyParser.json());
    app.use(logger("dev"));

    // Register application routes
    AppRoutes.forEach(route => {
      app[route.method](
        route.path,
        (req: Request, res: Response, next: Function) => {
          route
            .action(req, res)
            .then(() => next)
            .catch(err => next(err));
        }
      );
    });

    // Run app
    app.listen(3000, () => {
      console.log("Express application is up ansd running on port 3000");
    });
  })
  .catch(err => console.log(`TypeORM connection error: ${err}`));
