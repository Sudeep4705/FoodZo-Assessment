import { Request, Response, NextFunction } from "express";

const WrapAsync = function (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch((err: any) => next(err));
  };
};

export default WrapAsync;
