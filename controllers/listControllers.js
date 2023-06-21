const asynchandler = require("express-async-handler");
const Item = require("../models/itemModel");
// @desc Get all lists
// @route GET /api/list
// @access public
const getLists = asynchandler(async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
});

// @desc Create new item of list
// @route POST /api/list
// @access public
const createListItem = asynchandler(async (req, res) => {
  const { item } = req.body;
  if (!item) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const newItem = await Item.create({ item });
  res.status(201).json({ message: "New TODO item created" });
});

// @desc get item by id
// @route GET /api/list/:id
// @access public
const getItemById = asynchandler(async (req, res) => {
  const id = req.params.id;
  const existItem = await Item.findById(id);
  if (!existItem) {
    res.status(404);
    throw new Error("Item does not exist");
  }
  res.status(200).json(existItem);
});

// @desc Create new item of list
// @route PUT /api/list/:id
// @access public
const updateItemById = asynchandler(async (req, res) => {
  const id = req.params.id;
  const { item } = req.body;
  const existItem = await Item.findById(id);
  if (!existItem) {
    res.status(404);
    throw new Error("Item does not exist");
  }
  const updatedItem = await Item.findByIdAndUpdate(id, { item }, { new: true });
  res.status(200).json(updatedItem);
});

// @desc Delete item by id
// @Route DELETE api/list
// @access public
const deleteItemById = asynchandler(async (req, res) => {
  const id = req.params.id;
  const itemExist = await Item.findById(id);
  if (!itemExist) {
    res.status(404);
    throw new Error("Item does not exist");
  }
  const deletedItem = await Item.findByIdAndDelete(id);
  res.status(200).json(deletedItem);
});

module.exports = {
  getLists,
  createListItem,
  getItemById,
  updateItemById,
  deleteItemById,
};
