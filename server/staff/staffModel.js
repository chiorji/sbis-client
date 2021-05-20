const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;
const Schema = mongoose.Schema;

/* eslint-disable max-len */
const staffSchema = new Schema({
  __id:        Schema.Types.ObjectId,
  email:       { type: String, lowercase: true, trim: true, required: true, unique: true },
  firstName:   { type: String, trim: true },
  lastName:    { type: String, trim: true },
  password:    { type: String, trim: true, required: true },
  ipAddress:   { type: String, trim: true },
  isActive:    { type: Boolean, trim: true },
  joinedOn:    { type: Date, default: Date.now, trim: true },
  updatedOn:   { type: Date, trim: true },
  lastLogin:   { type: Date, trim: true },
  loginEvents: [{ type: Schema.Types.ObjectId, ref: 'LoginEvent' }]
}, { timestamps: true });

staffSchema.pre('save', function (done) {
  const user = this;
  user.updatedOn = Date.now();

  if (!user.isModified('password')) {
    return done();
  }

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return done(err);
    bcrypt.hash(user.password, salt, (err, hashedPassword) => {
      if (err) return done(err);
      user.password = hashedPassword;
      done();
    });
  });
});

const SchoolStaff = mongoose.model('Staff', staffSchema);

module.exports = SchoolStaff;
