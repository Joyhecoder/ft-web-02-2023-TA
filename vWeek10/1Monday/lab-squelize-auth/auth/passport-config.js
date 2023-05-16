//passport passport-local

const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

const db = require('../models')

//req - res - next
//req => passport => check session => response
//next = done
const init = (passport) => {
    passport.use(new LocalStrategy( {usernameField: 'email'},async (email, password, done) => {
        //scrape info from header

        //check if user is in db

        //grab current encrypt. password

        //create a new encrypt based what just used to login 

        //make comparison between the two

        try {
            console.log("checkpoint 1")
            let records = await db.users.findAll({where: {email}})  //[{}] or []
            if(records){
                console.log("checkpoint 2")
                //if a record was found
                let record = records[0]

                //get the db password and compare it to the password that was entered in the form
                bcrypt.compare(password, record.password, (err, match)=> {
                    if(match){
                        //password matched
                        console.log("password matched!")
                        return done(null, record)
                    }else{
                        //no match in passwords
                        console.log("passwords did not match")
                        return done(null, false)
                    }
                })
            }else{
                //no record was found from db query
                return done(null, false)
            }
        } catch (error) {
            console.log(error)
            return done(error)
        }
    })) //end of passport local

    //add the user info to the session
    //user is going to come from the record passed from the done above
    //what are we puttin on the session?
    passport.serializeUser((user, done)=>{
        console.log("inside serialize user")
        done(null, user.id) //second argument is what does on the session.id
    })

    passport.deserializeUser(async (id, done)=>{
        try {
            let foundUserInDBFromSessionID = await db.users.findByPk(id)
            if(foundUserInDBFromSessionID){
                //found userID in db

                done(null, foundUserInDBFromSessionID)
            }else{
                //id was not found in db
                done(null, false)
            }
        } catch (error) {
            done(error, false)
        }

    })
}

module.exports = init 