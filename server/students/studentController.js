/* eslint-disable no-unused-vars, no-console */
const Student = require('./studentModel');
const formatResponse = require('../utils/formatResponse');

exports.admit = async (req, res) => {
  try {
    const std = new Student(req.body);
    await std.save();
    res.status(200).json(formatResponse(200, 'Registration successful', true, { id: std.id }));
  } catch (err) {
    console.log('Admission failed because:: %s', err);
    res.status(400).json(formatResponse(400, 'Registration failed', false, null));
  }
};
