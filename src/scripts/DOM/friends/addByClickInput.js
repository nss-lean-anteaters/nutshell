const $ = require("jquery")
//const APIManager = require("../api/apiManager")

// const userSection = $("user-section")
//console.log(APIManager.getAllObjects("friendship"))
// const userResponse = APIManager.getAllObjects("user")
// .then(response => userSection.append(response))
const friendsOutput = $("#addFriends-section")

const friendsInput = () => {
    const friendSearchInput = document.createElement("input")
    friendSearchInput.classList = "friend-field"
    friendSearchInput.setAttribute("id", "friendId")
    friendSearchInput.placeholder = "Search Users"
    friendsOutput.append(friendSearchInput)
    const friendSearchButton = document.createElement("button")
    friendSearchButton.classList = "friend-button"
    friendSearchButton.textContent = "Search"
    friendsOutput.append(friendSearchButton)
}

friendsInput()
// const friendList = function () {
//     // Get the animals
//     APIManager.getAllObjects("friendship")
//     .then(allFriends => {
//         allFriends.forEach(friends => {
//         // Iterate over animal list
//         // user.forEach(response => {
//             // Build HTML representation for each one
//             //  ensure purchase button is on representation
//             console.log(friends)
//             $("#friends-section").append(
//             `
//                 <div class="catalogItem" id="${friendship.id}">
//                     <section>
//                         ${user.user}
//                     </section>
//                 </div>
//                 `
//             )
//         })
//      })
// }

// userList()


module.exports = friendsInput