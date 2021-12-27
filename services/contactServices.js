const fs = require("fs");
const store = "./bin/store.json";
let rawContacts = fs.readFileSync(store);
let Contact = JSON.parse(rawContacts);

class contactService {
  getContactByPhoneNumber = async (phoneNumber) => {
    return await Contact.find((contact) => contact.phoneNumber === phoneNumber);
  };

  createContact = async (options) => {
    const contactExist = await this.getContactByPhoneNumber(
      options.phoneNumber
    );
    if (contactExist) {
      return null;
    }
    await Contact.push({ ...options, createdAt: new Date() });
    await fs.writeFileSync(store, JSON.stringify(Contact));
    return await this.getContactByPhoneNumber(options.phoneNumber);
  };

  getcontacts = async () => {
    return Contact;
  };
}

module.exports = contactService;
