const $ = require("jquery")
const APIManager = require("../../api/apiManager")
const tagbuild = require("../Utility/tagBuilder")


const loggedIn = (userName) => {
    $("#holder").show()
    $("#user-section").hide()
    tagbuild("p", "nsHeader", "Welcome " + username.value, "", "welcome")
    // call all functions to build opening page here with the input userName


    // yay!
}
module.exports = loggedIn