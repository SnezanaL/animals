import express from "express";
import {
  addAnimal,
  deleteAnimal,
  getAnimalList,
  likeAnimal,
  reserveAnimal,
  updateAnimal,
} from "./animals.controller.js";
const animalsRouter = express.Router();

animalsRouter.route("/").get(getAnimalList).post(addAnimal);

animalsRouter
  .route("/:aid")
  .put(updateAnimal)
  .patch(reserveAnimal)
  .delete(deleteAnimal);

animalsRouter.route("/like/:aid").patch(likeAnimal);

export default animalsRouter;
