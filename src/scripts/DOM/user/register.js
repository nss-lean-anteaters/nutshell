const nukeElement = require("./../Utility/nukedom")
const apiManager = require("../../api/apiManager")
const $ = require("jquery")
const tagbuild = require("./../Utility/tagBuilder")


// Button click opens the register form
$(document).ready(function() {
    $("#registerID").on("click", function (event) {
        console.log(event.currentTarget.id)
        // Display order form for this animal
        $("#user-section").empty()


        // Create login/register form
        tagbuild("div","user-section", "","", "form")
        tagbuild("input", "form", "", "Please input your name", "username")
        tagbuild("input", "form", "","Please input your email", "email")
        tagbuild("button", "form", "Complete Registration", "", "registerButton")

        $("#registerButton").on("click", function (event) {
            const adduser = require("./adduser")
            let username = $("#username").val()
            let email = $("#email").val()

            console.log(username, email)
            if (username === "" || email === "") {
            alert("Please fill all fields...!!!!!!")
            }else {
                adduser(username, email)
            }

        })
    })
})