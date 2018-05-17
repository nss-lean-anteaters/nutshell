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


const userList = function () {
    // Get the animals
    APIManager.getAllObjects("user")
    .then(allUsers => {
        allUsers.forEach(user => {
        // Iterate over animal list
        // user.forEach(response => {
            // Build HTML representation for each one
            //  ensure purchase button is on representation
            console.log(user)
            $("#user-section").append(
            `
                <div class="username" id="${user.id}">
                    <section>
                        ${user.user}
                    </section>
                </div>
                `
            )
        })
     })
}


// userList()
