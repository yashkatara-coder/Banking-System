const {Router} = require("express")
const transactionController = require("../controllers/transaction.controller")


const transactionRoutes = Router();

//CREate new transaction

transactionRoutes.post("/", transactionController.createTransaction)


module.exports = transactionRoutes;