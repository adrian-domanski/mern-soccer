import { Request, Response } from 'express';
import Game from '../models/Game';

export const getAllGames = async (req: Request, res: Response) => {
  const games = await Game.find();
  try {
    res.status(200).json(games);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const getGameById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const singleGame = await Game.findById({ _id: id });
    res.status(200).json(singleGame);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const createGame = async (req: Request, res: Response) => {
  const gameToCreate = await Game.create(req.body);
  try {
    return res.status(201).json(gameToCreate);
  } catch (error) {
    return res.status(500).json({ msg: "Couldn't create the game" });
  }
};

export const updateGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const gameToUpdate = await Game.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  try {
    return res.status(200).json(gameToUpdate);
  } catch (error) {
    return res.status(500).json({ msg: "Couldn't update the game" });
  }
};

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Game.findByIdAndDelete({ _id: id });
  try {
    return res.status(200).json({ msg: 'Game deleted' });
  } catch (error) {
    return res.status(500).json({ msg: "Couldn't delete the game" });
  }
};
