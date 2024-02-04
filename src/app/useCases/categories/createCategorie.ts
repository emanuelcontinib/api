import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function createCategorie(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!name) {
      return res.sendStatus(400).json({
        error: "Name is required",
      });
    }
    const categorie = await Category.create({ icon, name });

    res.status(201).json(categorie);
  } catch (error) {
    console.error();
    error;

    res.sendStatus(500);
  }
}
