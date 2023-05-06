import { NextFunction, Request, Response } from "express";
import { query, validationResult } from "express-validator";

export function guard() {
  return [query("fen").isString(), query("elo").isNumeric()];
}

export function isValid(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
