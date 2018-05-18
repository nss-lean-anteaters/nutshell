//accept input of username and email address, push to database with a unique id

const $ = require("jquery")
const APIManager = require("../../api/apiManager")

const addUserToDb = (userName, email) => {
    const userInfo = {
        "userName": userName,
        "email": email
    }
    APIManager.createObject(userInfo, "user")
}

module.exports = addUserToDb