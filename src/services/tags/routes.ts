import { Request, Response } from "express";
import { get, add } from "./controller";
import config from "config";

const basePath = config.get("BASE_PATH");
const currentPath = "tags";
const currentPathURL = basePath + currentPath; 

export default [
  {
    path: currentPathURL,
    method: "get",
    handler: [
     // middleware1 ,  //we can add number of middlewares here
     // middleware2
      async (req: Request, res: Response) => {
        const result = await get();
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL,
    method: "post",
    handler: [
     // middleware1 ,  //we can add number of middlewares here
     // middleware2
      async (req: Request, res: Response) => {
        const result = await add(req.body);
        res.status(200).send(result);
      }
    ]
  }
];
