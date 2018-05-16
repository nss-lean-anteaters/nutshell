// event listener for the "submit" button on registration form
// check inputs against the existing user data
// if user exists , login
// if user does not exist, add the user to the database and then login
// redirect to landing page
const $ = require("jquery")
const APIManager = require("../../api/apiManager")
const login = require("./login")
const adduser = require ("./adduser")

const verifyUser = (username, email) => {
    const users = APIManager.getAllObjects("user")
    let verified = false
    users.forech((user)=>{
        if (user.userName === input){
            verified = true
            login(username)
        }
    })
    if (verified === false ){
        registerUser( username, email)
        login(username)
    }
}
module.exports = verifyUser