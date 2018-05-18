const $ = require("jquery")
const APIManager = require("../../api/apiManager")
const friendsInput = require("./addByClickInput")

const friendBtnClick = () => {
    $(".friend-button").click(function () {
        const friendInputVal = $("#friendId").val()
        APIManager.searchUsers(friendInputVal)
            .then(allUsers => {
                console.log(allUsers)
                allUsers.forEach(element => {
                    const friendsOutput = $("#addFriends-section")
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
                    addFriendBtn.addEventListener("click", function () {
                        console.log(event.currentTarget.id)
                        $("#friend-section").empty()
                        const frienduser = {
                            "friendId": event.currentTarget.id,
                            "friend": element.user,
                            "usernameId": 1
                        }
                        APIManager.createObject(frienduser, "friendship")
                            .then(function () {
                                return APIManager.getAllObjects("friendship")
                            }).then(function (allfriendships) {
                                allfriendships.forEach(element => {
                                    const friendSection = $("#friend-section")
                                    let friendCard = document.createElement("section")
                                    let friendName = document.createElement("p")
                                    friendName.textContent = element.friend
                                    friendCard.append(friendName)
                                    friendSection.append(friendCard)
                                })
                            })
                    })
                    //     console.log(event.currentTarget.id)
                    // })
                })
            })
    })
}


friendBtnClick()

module.exports = friendBtnClick