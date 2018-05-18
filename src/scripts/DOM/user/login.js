const apiManager = require("../../api/apiManager")
const $ = require("jquery")
const tagbuild = require("./../Utility/tagBuilder")
const verify = require("./verify")

// Start function for the login form to export
const loginForm = function () {

    // Button click opens the register form
    $(document).ready(function () {
        $("#loginID").on("click", function (event) {
            console.log(event.currentTarget.id)
            // Display order form for this animal
            $("#holder").empty()
            $("#headerID").empty()



            // Create login/register form
            const userSection = document.getElementById("user-section")
            console.log(userSection)

                tagbuild("div", "user-section", "", "", "form")
                tagbuild("input", "form", "", "Please input your name", "username")
                tagbuild("input", "form", "", "Please input your email", "email")
                tagbuild("button", "form", "Complete Login", "", "loginButton")
            $("#loginButton").on("click", function (event) {
                console.log(event.currentTarget.id)
                let username = $("#username").val()
                let email = $("#email").val()

                console.log(username, email)
                if (username === "" || email === "") {
                    alert("Please fill all fields...!!!!!!")
                } else {
                    // Call validation function here
                    verify(username, email)
                }

            })
        })
    })
}


// Export the login form function
module.exports = loginForm