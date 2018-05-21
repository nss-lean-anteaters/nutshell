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
const loggedIn = require ("./loggedin")

const verifyUser = (userName) => {
    const users = APIManager.getAllObjects("user")
    // .then(users => console.log(users))
    .then((allUsers) => {
        console.log(allUsers)
        allUsers.forEach((user)=>{
            let verified = false
            if (user.userName === userName){
                verified = true
                loggedIn(userName)
            }
            if (verified === false ){
                alert("Username not found, please register on Nutshell.")
                register()
            }
        })
    })
}
module.exports = verifyUser