import { NextFunction, Request, Response } from "express";

const macadrresValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.macaddress)
    return res.status(400).json({ error: "macaddress é obrigatorio" });

  next();
};

export default macadrresValidation;
