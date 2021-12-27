const Joi = require("joi");

const ContactRegistrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().min(11).required(),
});

const UniqueContactSchema = Joi.object({
  phoneNumber: Joi.string().required(),
})

module.exports = {
  ContactRegistrationSchema,
  UniqueContactSchema
};
