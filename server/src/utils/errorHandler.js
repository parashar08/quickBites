const errorHandler = (req, res, next, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error!';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

export { errorHandler };
