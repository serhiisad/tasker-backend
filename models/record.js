const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recordSchema = new Schema(
  {
    content: { type: String, required: true }
  },
  {
    timestamps: true // when it is created
  }
);

const Record = mongoose.model("records", recordSchema);

module.exports = Record;
