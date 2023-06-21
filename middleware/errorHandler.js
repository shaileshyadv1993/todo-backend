const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
      });
      break;

    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
      });
      break;

    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
      });
      break;

    case constants.UNAUTHROIZED:
      res.json({
        title: "Unauthroized",
        message: err.message,
      });
      break;

    default:
      console.log("No Error");
      break;
  }
};

module.exports = errorHandler;
