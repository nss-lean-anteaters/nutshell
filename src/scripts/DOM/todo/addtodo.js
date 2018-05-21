const $ = require("jquery")
const tagbuild = require("./../Utility/tagBuilder")


const addtodo = (userName) => {
    const todoinput = document.getElementById("to-do-section")
    const todoContainer = document.createElement("div")
    todoContainer.id = "todo-input"
    todoContainer.textContent = "here's where the todo stuff is going"
    todoinput.appendChild(todoContainer)
    tagbuild("input", "todo-input", "", "Add todo item here", "todoform")
    tagbuild("input", "todo-input", "", "Add due date here", "tododateform")
    tagbuild("button", "todo-input", "add", "", "todobutton")
    $("#todobutton").on(click,() =>{
        const APIManager = require("../../api/apiManager")
        let todoItem = {
            "userid": userName,
            "taskname":$("#todoform").val(),
            "timestamp": Date.now,
            "duedate": $("#tododateform").val() }
        APIManager.createObject(todoItem, "tasks")

    })
}

module.exports = addtodo