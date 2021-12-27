const contactController = require("../controllers/contactControllers");
const router = require("express").Router();
const joiValidator = require("../validators/index");
const {
  ContactRegistrationSchema,
  UniqueContactSchema,
} = require("../validators/ContactSchema");

module.exports = function () {
  const contactCtrl = new contactController();

  router.post(
    "/contact",
    joiValidator(ContactRegistrationSchema),
    contactCtrl.createContact
  );

  router.get("/contact", contactCtrl.getContacts);

  router.get(
    "/contact/:phoneNumber",
    joiValidator(UniqueContactSchema, "params"),
    contactCtrl.getOneContact
  );

  return router;
};
