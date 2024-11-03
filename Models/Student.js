const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    ID: {
      type: Number,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Students",
    versionKey: false,
  } // To Fix "__v: 0"
);

module.exports = mongoose.model("Students", StudentSchema);