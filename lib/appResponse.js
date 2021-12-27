exports.appResponse = (res, statusCode, message, data) => {
  const status = statusCode.toString();
  const statusCodeFirstChar = status[0];
  const success =
    statusCodeFirstChar === "4" || statusCodeFirstChar === "5" ? false : true;

  if (data) {
    res.status(statusCode).send({
      success,
      message,
      data,
    });
    return;
  }

  res.status(statusCode).send({
    success,
    message,
  });
  return;
};
