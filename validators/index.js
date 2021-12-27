const Joi = require("joi");
const { appResponse } = require("../lib/appResponse");

module.exports =
  (schema, source = "body") =>
  (req, res, next) => {
    const errors = validate(req[source] || {}, schema);

    if (errors && errors.length > 0) {
      return appResponse(res, 400, errors[0]);
    }

    next();
  };

function validate(data, schema) {
  const { error } = schema.validate(data);

  if (!error) return;
  return error.details.map((error) => error.message);
}
