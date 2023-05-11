const db = require('./models/database');

const categories = async () => {
    try {
        let results = await db.query('SELECT * FROM categories')
    
        // console.log(results)
        results.forEach(record => {
            console.log(record.name)
        });
    } catch (error) {
        console.log(error)
    }
   
}
// categories()

const insertCategory = async (categoryName) => {
    // let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, '${categoryName}')`)
    //more secure way to run: 
    let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, [categoryName])
    console.log(results)
}
// insertCategory('Japanese')
