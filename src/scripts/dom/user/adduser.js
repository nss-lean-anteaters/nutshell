//accept input of username and email address, push to database with a unique id

const $ = require("jquery")
const APIManager = require("../../api/apiManager")

const addUserToDb = (userName, email) => {
    userInfo = {
        "id": "1",
        "userName": "david",
        "email": "dfp33"
    }
    APIManager.createObject(userInfo, "user")
    console.log(APIManager.getAllObjects)

}

module.exports = addUserToDb