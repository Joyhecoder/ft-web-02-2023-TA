const express = require("express");
const router = express.Router();

router.get("/contact", (req, res) => {
  res.render('contact')
});

router.post('/contact', (req, res) => { 
  let {name, email, number, website, message} = req.body

  res.send(`
    ${name}
    ${email}
    ${number}
    ${website}
    ${message}
  `)
 })


module.exports = router;