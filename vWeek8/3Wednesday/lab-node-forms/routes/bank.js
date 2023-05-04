const express = require("express");
const router = express.Router();



let db = {
    checking: 200,
    savings: 1500,
    transactions: [{
        type: 'savings/deposit', 
        amount:245, 
        date: (new Date()).toLocaleString()
    },
    {
        type: 'checking/deposit', 
        amount: 123, 
        date: (new Date()).toLocaleString()
    }
]
}

router.get("/banking", (req, res) => {
    res.render("bank");
  });
  
router.get('/checkingbalance', (req, res) => {
      //gets the checking balance for our account
      res.json({checkingBalance: db.checking})
      
});
  
router.get('/savingsbalance', (req, res) => {
      //gets the saving balabce for account
      res.json({savingBalance: db.savings})
      
});
  
router.post('/depositchecking', (req, res) => {
      //get information off the header
      let {amount, transType} = req.body

      amount = parseFloat(amount) //cast amount to a float instead of a string
      if(transType == 'checking/deposit'){
        db.checking += amount
      }else if (transType === 'savings/deposit'){
        db.savings += amount
      }
      
      //add the transaction record to the beginning of the transactions 
      let transactionRecord = {
        type: transType,
        amount: amount,
        date: (new Date()).toLocaleString()
      }
      db.transactions.unshift(transactionRecord)

      //send data back
      res.json({checking: db.checking, savings: db.savings, transactions: db.transactions})
  
})
  
  
  module.exports = router;