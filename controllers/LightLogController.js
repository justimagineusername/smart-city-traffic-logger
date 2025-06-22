const model = require('../models/LightLogModel');

exports.createLightLog = async (req, res, next) => {
  try {
    const { color } = req.body;
    const { id } = req.params;
    const log = await model.create(id, color);
    res.status(201).json(log);
  } catch (err) {
    next(err);
  }
};

exports.getAllLogs = async (req, res, next) => {
  try {
    const logs = await model.getAll(req.params.id);
    res.json(logs);
  } catch (err) {
    next(err);
  }
};

exports.getLogById = async (req, res, next) => {
  try {
    const log = await model.getById(req.params.id, req.params.logId);
    if (!log) return res.status(404).json({ message: 'Log not found' });
    res.json(log);
  } catch (err) {
    next(err);
  }
};

exports.updateLightLog = async (req, res, next) => {
  try {
    const { color } = req.body;
    const { id, logId } = req.params;
    const updated = await model.update(id, logId, color);
    if (!updated) return res.status(404).json({ message: 'Log not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteLightLog = async (req, res, next) => {
  try {
    const removed = await model.remove(req.params.id, req.params.logId);
    if (!removed) return res.status(404).json({ message: 'Log not found' });
    res.json(removed);
  } catch (err) {
    next(err);
  }
};

