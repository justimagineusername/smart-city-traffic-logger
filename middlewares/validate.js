module.exports.color = (req, res, next) => {
  const { color } = req.body;
  const validColors = ['red', 'yellow', 'green'];

  if (!color || !validColors.includes(color)) {
    return res.status(400).json({ message: 'Color must be red, yellow, or green' });
  }

  next();
};

module.exports.name = (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== 'string' || name.length > 100) {
    return res.status(400).json({ message: 'Name must be a string with max 100 characters' });
  }

  next();
};