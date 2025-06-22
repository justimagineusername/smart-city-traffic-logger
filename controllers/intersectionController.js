const model = require('../models/intersectionModel');

exports.createIntersection = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await model.create(name);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getAllIntersections = async (req, res, next) => {
  try {
    const data = await model.getAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getIntersectionById = async (req, res, next) => {
  try {
    const data = await model.getById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Intersection not found' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateIntersection = async (req, res, next) => {
  try {
    const data = await model.updateName(req.params.id, req.body.name);
    if (!data) return res.status(404).json({ message: 'Intersection not found' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.deleteIntersection = async (req, res, next) => {
  try {
    const data = await model.delById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Intersection not found' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

