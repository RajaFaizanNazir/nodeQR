const HttpError = require("../util/http-error");
/**************************************** */
const getQr = async (req, res, next) => {
  // return next(new HttpError("error",400));
  res.status(200).json({ users: "hello" });
};

/**************************************** */
module.exports = {
  getQr
};
/**************************************** */
