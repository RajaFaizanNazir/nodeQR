const HttpError = require("../util/http-error");
const QRCode = require("qrcode");
/**************************************** */
const getQr = async (req, res, next) => {
  let qrStr;
  // Creating the data
  let data = {
    userId: "564",
    id: "muhhammad.ahsan@fenrispakistan.com",
  };

  // Converting the data into String format
  let stringdata = JSON.stringify(data);

  // Print the QR code to terminal
  QRCode.toString(stringdata, { type: "terminal" }, function (err, QRcode) {
    if (err) return console.log("error occurred");

    // Printing the generated code
    console.log(QRcode);
    // res.status(200).json({ QRcode });
  });

  // Converting the data into base64
  QRCode.toDataURL(stringdata, function (err, code) {
    if (err) return console.log("error occurred");

    // Printing the code
    // console.log(code);
    res.status(200).json({ code });
  });
};

/**************************************** */
module.exports = {
  getQr,
};
/**************************************** */
