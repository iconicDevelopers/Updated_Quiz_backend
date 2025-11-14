const errorHandler = (err, req, res, next) => {
  console.log("Error:", err.message);

  const statuscode = err.statuscode || 500;

  res.status(statuscode).json({
    success: false,
    message: err.message || "server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorHandler;
