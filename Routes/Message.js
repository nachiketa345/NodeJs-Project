const express = require("express");
const {
  GetAllStudent,
  GetOneStudent,
  CreateStudent,
  UpdateStudent,
  DeleteStudent,
} = require("../Controllers/StudentController");
const router = express.Router();
const Students = require("../Models/Student");

// GET ALL
router.get("/", GetAllStudent);

// GET ONE
router.get("/:id", GetOneStudent);

//CREATE
router.post("/", CreateStudent);

//UPDATE
router.put("/:id", UpdateStudent);

//DELETE
router.delete("/:id", DeleteStudent);

module.exports = router;
