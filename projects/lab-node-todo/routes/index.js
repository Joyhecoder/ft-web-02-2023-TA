const express = require("express");
const { one } = require("../models/database");
const router = express.Router();
const db = require('../models/database');

//body parser 
router.use(express.urlencoded({extended: false})); 
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    let records = await db.query('SELECT * FROM todos')
    res.render("index", {
      todos: records
    });
  } catch (error) {
    console.log(error)
    res.render('index', {
      todos: []
    })
  }
 
});


//! test endpoints using thunder client before messing with frontend
// GET /todos, displays all of the todos
router.get('/todos', async (req, res) => {
  console.log("test")
  try {
    let records = await db.query('SELECT * FROM todos')
    console.log("20", records)

    res.render('index', {
      todos: records
    })
  
  } catch (error) {
    console.log(error)
    res.render('index', {
      todos: JSON.stringify([])
    })
  }
})
// GET /todos/:id , displays todos by id
router.get('/todos/:id', async (req, res) => {
  try {
    let {id} = req.params
    console.log("get id:", id)
    let oneRecord = await db.query('SELECT * FROM todos WHERE id=($1)', [id])
    console.log('one record', oneRecord)
    res.render('index', {
      oneTodo: oneRecord
    })
  } catch (error) {
    
  }
  
})
// POST /todos, creates a new todo
router.post('/todos', async (req, res) => {
  try {
    let {description} = req.body

    let result = await db.result(`INSERT INTO todos (description) VALUES ($1)`, [description])
    let records = await db.query("SELECT * FROM todos")
    // console.log("56", records)
    // res.render('index', {
    //   todos: records
    // })
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

// PUT /todos/:id, update a todo item
router.put('/todos/:id', async (req, res) => {
  try {
    let {id} = req.params
    let {description} = req.body
    console.log("put route id:", id)
    console.log(description)
    let newTodo = await db.result(`UPDATE todos SET description = '${description}' WHERE id = ${id}`)
    // let newTodo = await db.todos.update({description: description}, {where:{id: id}});
    console.log("update")
    // console.log(newTodo)
    let records = await db.query('SELECT * FROM todos')
    
    res.json(records)
  } catch (error) {
    
  }
})

// DELETE /todos/:id, delete a todo
router.delete('/todos/:id', async(req, res) => {
  try {
    let { id } = req.params
    // console.log(id)
    // let deletedItem = await db.none(`DELETE FROM todos WHERE id = ${id}`)
    // console.log("item deleted:", deletedItem)
   
    // let results = await db.query('SELECT * FROM todos')
    // res.json(results)

    let deleteItem = await db.query('DELETE FROM todos WHERE id = $1', [id]) 
    console.log(deleteItem)
    res.json(deleteItem)
  } catch (error) {
    console.log(error)
  }
  
})
module.exports = router;
