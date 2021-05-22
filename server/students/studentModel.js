const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { makeId } = require('../utils/makeId');
const genderList = ['male', 'female', 'rather not say'];

const StudentSchema = new Schema({
  first_name: {
    type:      String,
    required:  true,
    lowercase: true,
    trim:      true
  },
  middle_name: { type: String, lowercase: true, trim: true },
  last_name:   {
    type:      String,
    required:  true,
    lowercase: true,
    trim:      true
  },
  id:                   { type: String, trim: true },
  bio:                  { type: String, lowercase: true.valueOf, trim: true },
  blood_group:          { type: String, lowercase: true },
  dob:                  { type: Date, required: true },
  gender:               { type: String, enum: genderList, lowercase: true },
  nationality:          { type: String, required: true, lowercase: true },
  state_of_origin:      { type: String, required: true, lowercase: true },
  local_govt_of_origin: { type: String, required: true, lowercase: true },
  registered_class:     {
    type:      String,
    required:  true,
    lowercase: true,
    validate:  function (v) {
      return /JS[123]|SS[123]/i.test(v);
    }
  },
  religious_belief:      { type: String, lowercase: true },
  guardian_name:         { type: String, required: true, lowercase: true },
  guardian_home_address: { type: String, required: true },
  guardian_phone_number: { type: Number, required: true },
  guardian_email:        { type: String, lowercase: true },
  guardian_gender:       { type: String, enum: genderList, required: true },
  guardian_nationality:  { type: String, required: true, lowercase: true }
}, { timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' } });

StudentSchema.pre('save', function (next) {
  const student = this;
  if (!student.id) {
    const id = makeId();
    student.id = `SBIS/${new Date().getFullYear()}/${id}`;
    return next();
  }
  next();
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
