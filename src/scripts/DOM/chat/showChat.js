const nukeElement = require("./../Utility/nukedom")
const apiManager = require("../../api/apiManager")
const $ = require("jquery")
const tagbuild = require("./../Utility/tagBuilder")

const chatFun = (userName) => {

const messageOutput = $("#chat-section")

//this is the outer frame of the chat window
const messageCard = $("<section class='message-card' id='sentChat'>").appendTo(messageOutput)

//displays the messages
const messageList = $("<section style='scroll' class='sent'>").appendTo(messageCard)

//where the send button is
const messageBase = $("<section class='message-base'>").appendTo(messageCard)

//writing the messages to the dom. used a fun so I could call later in code
const messageDom = (userId, messageText) => {
    const sentMessage = document.createElement("div")
    let sentUser = document.createElement("p")
    let messageContent = document.createElement("p")
    sentUser.textContent = userId
    messageContent = messageText
    // sentMessage.append(sentUser)
    sentMessage.append(messageContent)
    messageList.append(sentMessage)
}

//creates the user input field && listens for the 'enter' key to be press if the enter key is press the sendMessage fun runs
const messageInput = $("<input type='text' placeholder='nMessage' class='messageInput' id='chatInput'>")
messageInput.on("keypress", function(event){
    if(event.charCode === 13){
        sendMessage()
    }
})

let messageDB
const loadMessages = () =>{
    //pulls data out of local storage
    const rawMessageDB = localStorage.getItem("messageDB")
    //clears the message list
    messageList.empty()
    //this if statement checks to see if the DB exists. If so it loads the data if not it create new DB
    if (rawMessageDB){
        messageDB = JSON.parse(rawMessageDB)
        messageDB.sentMessages.forEach(message => {
            messageDom(userName, message.text)
        });
    } else {
        messageDB = {
            sentMessages: []
        }
    }
}
loadMessages()

const sendMessage = (userName) => {
    //sets messageText as messageInput which is the user input
    const messageText = messageInput.val()
    // const sender = sentMessages.userId
    //if statement checks for user input and then pushes it to the messageDB
    if (messageText) {
        messageDB.sentMessages.push({
            userId: userName,
            text: messageText
        })
        localStorage.setItem(
            "messageDB",
            JSON.stringify(messageDB)
        )
    }
        loadMessages()
    //this clears the messageInput field so you don't have to delete the text you just typed and sent
    messageInput.val("")
}
const sendBtn = document.createElement("button")
sendBtn.classList = "sendBtn"
sendBtn.addEventListener("click", function(){
    sendMessage(userName)
}
)

window.addEventListener("storage", function(){
    loadMessages()
})

sendBtn.textContent = "Send"


// messageOutput.append(messageCard)
// messageCard.append(messageBase)
messageBase.append(messageInput)
messageBase.append(sendBtn)

}

module.exports = chatFun