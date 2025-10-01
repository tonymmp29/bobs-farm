const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    error: true,
    message: 'Resource not found'
  });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: 'Internal server error'
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};