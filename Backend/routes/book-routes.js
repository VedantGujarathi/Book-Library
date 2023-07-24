const express = require('express');
const router = express.Router();
const Book = require("../model/Book");
const bookcontroller = require("../controllers/book-controller"); 
router.get("/", bookcontroller.getAllBooks);//access all records
router.post("/",bookcontroller.addBook);//add
router.get("/:id",bookcontroller.getByid );//search
router.put("/:id",bookcontroller.updateBook);//update
router.delete("/:id",bookcontroller.deleteBook);//delete
module.exports = router;