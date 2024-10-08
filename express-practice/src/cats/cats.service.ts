import { Request, Response } from "express";
import { Cat } from "./cats.model";

export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;

    res.status(200).send({
      success: true,
      data: {
        cats
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    });
  }
};

export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    });
  }
};

export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: { data }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    });
  }
};

export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    });
  }
};

export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    });
  }
};

export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: newCat
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    });
  }
};
