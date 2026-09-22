const {Router} = require("express")
const transactionController = require("../controllers/transaction.controller")
const authMiddleware = require('../middleware/auth.middleware');



const transactionRoutes = Router();

//CREate new transaction

transactionRoutes.post("/",authMiddleware.authMiddleware, transactionController.createTransaction)

/**
 * - POST /api/transactions/system/initial-funds
 * - Create initial funds transaction from system user
 */
transactionRoutes.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)



module.exports = transactionRoutes;