import Animal from "./animals.model.js";

export const getAnimalList = async (req, res) => {
  try {
    const animals = await Animal.find({ deleted: null }); // get all animals that are not deleted

    res.status(200).json({ status: "success", data: animals });
  } catch (err) {
    res.status(500).json({ status: "failed", msg: err.message });
  }
};

export const addAnimal = async (req, res, next) => {
  try {
    const animal = await Animal.create({
      name: req.body.name,
      desc: req.body.desc,
    });
    res.status(201).json({ status: "success", data: animal });
  } catch (err) {
    next(err);
  }
};

export const updateAnimal = async (req, res, next) => {
  try {
    console.log(req.body);
    const animal = await Animal.findByIdAndUpdate(req.params.aid, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "success", data: animal });
  } catch (err) {
    next(err);
  }
};

export const reserveAnimal = async (req, res, next) => {
  try {
    const { aid } = req.params;
    const animal = await Animal.findByIdAndUpdate(
      aid,
      { reserved: true },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({ status: "success", data: animal });
  } catch (err) {
    next(err);
  }
};

export const likeAnimal = async (req, res, next) => {
  try {
    const { aid } = req.params;
    const animal = await Animal.findByIdAndUpdate(
      aid,
      { $inc: { hearts: 1 } },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({ status: "success", data: animal });
  } catch (err) {
    next(err);
  }
};

export const deleteAnimal = async (req, res, next) => {
  try {
    const { aid } = req.params;
    const result = await Animal.findByIdAndDelete(
      aid,

      { deleted: Date.now() },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({ status: "success", result });
  } catch (err) {
    next(err);
  }
};
