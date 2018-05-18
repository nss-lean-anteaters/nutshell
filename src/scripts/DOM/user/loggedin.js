const $ = require("jquery")
const APIManager = require("../../api/apiManager")
const tagbuild = require("../Utility/tagBuilder")


const loggedIn = (userName) => {
    $("#holder").show()
    $("#user-section").hide()
    tagbuild("p", "nsHeader", "Welcome " + username.value, "", "welcome")
}
module.exports = loggedIn