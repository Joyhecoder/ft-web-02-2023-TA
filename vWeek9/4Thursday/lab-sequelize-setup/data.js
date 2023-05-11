const db = require('./models/index')

//*create data into db
const createRecords = async () => {
    await db.user.create({name: 'Michael', email: 'm@me.com', bio: 'I am a singer'})
    await db.user.create({name: 'Beyonce', email: 'b@me.com', bio: 'I am a singer'})
    await db.user.create({name: 'Ed Sheeran', email: 'es@me.com', bio: 'I am coming to Houston'})
    await db.user.create({name: 'Yo', email: 'yo@me.com', bio: 'I am doing my code'})
}
// createRecords()

//*find all the data
const findData = async () => {
    let records = await db.user.findAll()
    records.forEach(record => {
        console.log(`${record.name} ${record.email} ${record.bio}`)
    });
}
// findData()

//*find by primary key
const findByKey = async (id) => {
    let record = await db.user.findByPk(id)
    console.log(`${record.name} ${record.email} ${record.bio}`)
}
// findByKey(2)

//* where
const findWhere = async (val) => {
    let records = await db.user.findAll({where: {name: val}}) //[{}, {}]
    for(let record of records){
        console.log(`${record.name} ${record.email} ${record.bio}`)
    }
}
// findWhere('Joy')

//*delete record
const deleteRecord = async (id) => {
    await db.user.destroy({where: {id:id}})
}
// deleteRecord(2)

//*update record
const updateRecords = async () => {
    await db.user.update({email: 'update@me.com'}, {where: {name: "Yo"}})
}
// updateRecords()


//*create data for a db table with a foreign key
const createBlogs = async () => {
    await db.blogs.create({title: 'JS', body: 'jsjsjs', userID:1})
    await db.blogs.create({title: 'Node JS', body: 'sdsfds', userID:3})
    await db.blogs.create({title: 'Express', body: 'ddeedd', userID:4})
    await db.blogs.create({title: 'JS 101', body: 'jsjsjs', userID:5})
}

// createBlogs()

//*find a blog
const findBlogs = async () => {
    //blogs belongs to one user, so result will be an object associated with a blog
    let blogs = await db.blogs.findAll({
        include: [{
            model: db.user,
            required: true
        }]
    })

    //[{}]
    blogs.forEach(blog => {
        console.log(`${blog.title} belongs to ${blog.user.name}`)
    })
}
findBlogs()


//*find user's blog
const findUsersBlogs = async () => {  //[{}, {}]
    //user has many blogs, so result will be an array of blogs associated with a user
    let users = await db.user.findAll({
        include: [{
            model: db.blogs,
            required: true //inner join
        }]
    })

    users.forEach(user => {
        console.log(`${user.name}`)
        user.blogs.forEach(blog => {
            console.log(`>>> ${blog.title}`)
        })
    })

}
// findUsersBlogs()