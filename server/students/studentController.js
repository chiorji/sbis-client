const Student = require('./studentModel');

exports.admit = async (req, res) => {
  const students = await Student.find({}).exec();
  return res.json({ students });
};
