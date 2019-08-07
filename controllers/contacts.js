let contacts = require("../contacts");

exports.list = (req,res) => {
    return res.json(contacts);
}

exports.show = (req,res) => {
    let id = contacts.filter(i => i._id == req.params.contactsId);
res.json(id);
}

exports.create = (req,res) => {
    let newContact = req.body;
    contacts.push(newContact);
    res.json(newContact);
}

exports.update = (req,res) => {
    let id = contacts.filter(i => i._id == req.params.contactsId);
        contact.make = body.make;
        response.json(contact);

}

exports.remove = (req,res) => {
    let contact = contacts.find(i => i._id == req.params.contactsId);
    contact.isActive = false;
    response.send("Deleted")
}