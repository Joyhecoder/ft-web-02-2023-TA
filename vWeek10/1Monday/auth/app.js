const pbkdf2 = require('pbkdf2');//allows us to have a string
const crypto = require('crypto'); //use to create a salt

//take our password and hash it
let password = "some user password"

//hash(password) + random word + mix

// hashing produces the same output for a given input 

let salt = crypto.randomBytes(20).toString('hex') //20 is the number of characters and this creates a randomized string of 20 char in length in a buffer format. toString('hex') converts a buffer to a string
// console.log(salt)

// let key = pbkdf2.pbkdf2Sync(password, salt, #of times, algo, 'name')
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')


let hash = key.toString('hex')

let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}` //this is what is stored in db
console.log(stored_pass)

//! ----------------------------------------------------------

//figure out if password is correct
let newPassword = "some user password"

let pass_parts = stored_pass.split('*') //["pbkdf2_sha256", "3600", "salt", "hash"]
let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
)

let hashNewLogin = keyNewLogin.toString('hex')
// console.log(hashNewLogin)

if(hashNewLogin === pass_parts[3]){
    console.log("password matched")
}else{
    console.log("what trying to do?")
}