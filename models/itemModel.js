const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    item: {
      type: String,
      required: [true, "Please add the item"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("item", itemSchema);
