const nukeElement = require("./../Utility/nukedom")
const apiManager = require("../../api/apiManager")
const $ = require("jquery")
const tagbuild = require("./../Utility/tagBuilder")

const messageOutput = $("#chat-section")

const messageCard = document.createElement("section")
messageCard.classList = "message-card"

const messageBase =
document.createElement("section")
messageBase.classList = "message-base"

const sendBtn = document.createElement("button")
sendBtn.classList = "sendBtn"
sendBtn.textContent = "Send"

messageOutput.append(messageCard)
messageCard.append(messageBase)
messageBase.append(sendBtn)

