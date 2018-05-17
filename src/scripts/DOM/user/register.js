const apiManager = require("../../api/apiManager")
const $ = require("jquery")
const tagbuild = require("./../Utility/tagBuilder")

// Wrap entire registration form in a function
const registerForm = function () {
    // Document Ready - Ensure DOM is fully loaded
    $(document).ready(function () {
        // Button click opens the register form
        $("#registerID").on("click", function (event) {
            console.log(event.currentTarget.id)
            // Ensure the page is cleared
            $("#holder").empty()
            $("#headerID").empty()



            // Create login/register form
            tagbuild("div", "user-section", "", "", "form")
            tagbuild("input", "form", "", "Please input your name", "username")
            tagbuild("input", "form", "", "Please input your email", "email")
            tagbuild("button", "form", "Complete Registration", "", "registerButton")

            $("#registerButton").on("click", function (event) {
                console.log(event.currentTarget.id)
                let username = $("#username").val()
                let email = $("#email").val()

                console.log(username, email)
                if (username === "" || email === "") {
                    alert("Please fill all fields...!!!!!!");
                    // else
                } // Closes if statement
                    // {

                    //         // Call validation function here
                    // }

            }) // Closes register button event listener


        }) // Closes button on click event listener
    }) //Closes document ready
} // Closes registerForm function

module.exports = registerForm