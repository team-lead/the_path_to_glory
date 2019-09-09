const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const UserSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32
  },
  secondname: {
    type: String,
    trim: true,
    maxlength: 32
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    maxlength: 32
  },
  phone: {
    type: Number,
    default: 0
  },
  gender: {
    type: String,
    trim: true,
    maxlength: 32,
  },
  birthday: {
    type: Date,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
},
{
  timestamps: true,
});

// virtual field
UserSchema.virtual("password")
    .set(function(password) {
      this._password = password;
      this.salt = uuidv1();
      this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
      return this._password;
    });

UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function(password) {
    if (!password) return "";
    try {
      return crypto.createHmac("sha1", this.salt)
          .update(password)
          .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", UserSchema);