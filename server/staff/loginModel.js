const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  user:      { type: Schema.Types.ObjectId, ref: 'SchoolStaff' },
  device:    { type: String, trim: true },
  ipAddress: { type: String, trim: true },
  timestamp: { type: String, default: Date.now, trim: true }
}, { timestamps: true });

const LoginEvent = mongoose.model('LoginEvent', loginSchema);

module.exports = LoginEvent;
