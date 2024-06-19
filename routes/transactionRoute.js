const express=require("express");
const {addTransactions,getAllTransactions,editTransactions,deleteTransactions}=require("../controllers/transactionCtrl");
const router=express.Router();

router.post("/add-transaction",addTransactions);
router.post("/edit-transaction",editTransactions);
router.post("/delete-transaction",deleteTransactions);
router.post("/get-transactions",getAllTransactions);

module.exports=router;