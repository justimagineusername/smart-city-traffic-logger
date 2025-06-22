module.exports = (err, req, res, next) => {
  console.error('Error:', err);
  if (res.headersSent) return next(err);

  if (err.code === '22P02') {
    return res.status(400).json({ message: 'Invalid input syntax' });
  }

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
};
