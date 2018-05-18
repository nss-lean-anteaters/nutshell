// event listener for the "submit" button on registration form
// check inputs against the existing user data
// if user exists , login
// if user does not exist, add the user to the database and then login
// redirect to landing page
const $ = require("jquery")
const APIManager = require("../../api/apiManager")
const login = require("./login")
const register = require("./register")
const adduser = require ("./adduser")

const verifyUser = (username, email) => {
    const users = APIManager.getAllObjects("user")
    .then((allUsers) => {
        allUsers.foreach((user)=>{
            if (user.userName === username){
                verified = true
                loggedIn(username)
            }
        })
    })
    console.log(users)
    console.log(APIManager.getAllObjects("user"))
    let verified = false
    if (verified === false ){
        alert("Username not found, please register on Nutshell.")
        register()
    }
}
module.exports = verifyUser