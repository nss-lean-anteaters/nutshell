//accept input of username and email address, push to database with a unique id

const $ = require("jquery")
const APIManager = require("../../api/apiManager")

const registerUser = (userName, email) => {
    const users = APIManager.getAllObjects("user")
    const userID = users.length + 1
    users.push({
        userID,
        userName,
        email,
    })
}

module.exports = registerUser