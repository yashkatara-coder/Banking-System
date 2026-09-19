const transactionModel = require("../models/transaction.model")
const ledgerModel = require("../models/ledger.model")
const emailService = require("../services/email.services")




async function createTransaction(req,res){
    const {fromAccount, toAccount,amount,idempotencyKey} = req.body
}

module.exports = {
    createTransaction
}

