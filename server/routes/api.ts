import {Response, Request} from "express";

/* GET api listing. */
export let getApi = (req: Request, res: Response) => {
  res.send('api works');
};
