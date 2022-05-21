const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');


module.exports = {
createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
}