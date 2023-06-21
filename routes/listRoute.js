const express = require("express");
const router = express.Router();
const {
  getLists,
  createListItem,
  getItemById,
  updateItemById,
  deleteItemById,
} = require("../controllers/listControllers");

router.route("/").get(getLists);

router.route("/").post(createListItem);

router.route("/:id").get(getItemById);

router.route("/:id").put(updateItemById);

router.route("/:id").delete(deleteItemById);

module.exports = router;
