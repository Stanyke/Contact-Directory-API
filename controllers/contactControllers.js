const contactService = require("../services/contactServices");
const { appResponse } = require("../lib/appResponse");
const { MSG_TYPES } = require("../constants/types");

module.exports = function contactController() {
  const contactServiceInstance = new contactService();

  //Make a contact
  this.createContact = async (req, res) => {
    const data = await contactServiceInstance.createContact(req.body);
    if (!data) {
      return appResponse(res, 404, MSG_TYPES.DUPLICATE);
    }
    return appResponse(res, 201, MSG_TYPES.CREATED, data);
  };

  //Get all available contacts
  this.getContacts = async (req, res) => {
    const data = await contactServiceInstance.getcontacts();
    return appResponse(res, 200, MSG_TYPES.FETCHED, data);
  };

  //Get one contact
  this.getOneContact = async (req, res) => {
    const { phoneNumber } = req.params;
    const data = await contactServiceInstance.getContactByPhoneNumber(
      phoneNumber
    );

    if (!data) {
      return appResponse(res, 404, MSG_TYPES.NOT_FOUND);
    }

    return appResponse(res, 200, MSG_TYPES.FETCHED, data);
  };
};
