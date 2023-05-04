
const express = require('express');
const app = express();

const port = 3000;
app.use(express.static('public'));

app.set('view engine', 'ejs');

//!converts header payload string to js object
app.use(express.json())
//!places the payload data on req.body.firstName
app.use(express.urlencoded({extended: true}))

//routes
app.use(require('./routes/index'));
app.use(require('./routes/form'));
app.use(require('./routes/contact'));
app.use(require('./routes/counter'));
app.use(require('./routes/bank'));
app.use(require('./routes/basicForm'));
app.use(require('./routes/todo'));



app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})