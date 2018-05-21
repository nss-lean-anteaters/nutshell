const $ = require("jquery")
const APIManager = require("../api/apiManager")
const registerForm = require("./../DOM/user/register")
const loginForm = require("./../DOM/user/login")

// // const userSection = $("user-section")
// console.log(APIManager.getAllObjects("user"))
// // const userResponse = APIManager.getAllObjects("user")
// // .then(response => userSection.append(response))

registerForm()
loginForm()
$("#holder").hide()
