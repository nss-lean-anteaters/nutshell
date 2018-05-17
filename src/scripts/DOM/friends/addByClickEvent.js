const $ = require("jquery")
const APIManager = require("../../api/apiManager")
const friendsInput = require("./addByClickInput")


const friendsOutput = $("#friends-section")

const friendBtnClick = () => {
    $(".friend-button").click(function() {
        const friendInputVal = $("#friendId").val()
        APIManager.searchUsers(friendInputVal)
        .then(allUsers => {
            console.log(allUsers)
            allUsers.forEach(element => {
                const addFriendCard = document.createElement("section")
                addFriendCard.classList = "friend-card"
                const addFriendText = document.createElement("p")
                addFriendText.textContent = element.user
                addFriendCard.append(addFriendText)
                const addFriendBtn = document.createElement("button")
                addFriendBtn.classList = "addFriend-button"
                addFriendBtn.setAttribute("id", element.id)
                addFriendBtn.textContent = "Add Friend"
                addFriendCard.append(addFriendBtn)
                friendsOutput.append(addFriendCard)


                addFriendBtn.addEventListener("click", function() {
                    console.log(event.currentTarget.id)
                    APIManager.createObject("user", "friendship")
                })
                    //     console.log(event.currentTarget.id)
                    // })
            })
    })
})
}

friendBtnClick()

module.exports = friendBtnClick