const db = require('../config/db');
const UserSchema = new db.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);

module.exports = db.model('Users', UserSchema);