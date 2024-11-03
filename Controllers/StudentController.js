const Students = require("../Models/Student");

// GET ALL
const GetAllStudent = async (req, res) => {
  try {
    const Student = await Students.find();
    res.status(200).json(Student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ONE
const GetOneStudent = async (req, res) => {
  try {
    const Student = await Students.findById(req.params.id);
    res.status(200).json(Student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
const CreateStudent = async (req, res) => {
  const Student = new Students({
    Student: req.body.Student,
    ID: req.body.ID,
    Name: req.body.Name,
  });
  try {
    const newStudent = await Student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
const UpdateStudent = async (req, res) => {
  try {
    const Student = await Students.findById(req.params.id);
    await Student.updateOne({ $set: req.body });
    res.status(200).send("Student Updated");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
const DeleteStudent = async (req, res) => {
  try {
    const Student = await Students.findById(req.params.id);
    await Student.remove();
    res.status(200).send("Student Deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  GetAllStudent,
  GetOneStudent,
  CreateStudent,
  UpdateStudent,
  DeleteStudent,
};