const apiManager = require("../../api/apiManager")
const $ = require("jquery")
const tagbuild = require("../Utility/tagBuilder")
const addUser = require("./../user/adduser")
const loggedin = require("./../user/loggedin")

// Wrap entire registration form in a function
const addNews = function () {

            // Create add news form
            tagbuild("div", "news-section", "", "", "newsForm")
            tagbuild("h4", "newsForm", "News", "", "newsHeader")
            tagbuild("input", "newsForm", "", "title", "newsTitle")
            tagbuild("input", "newsForm", "", "synopsis", "newsSynopsis")
            tagbuild("input", "newsForm", "", "URL for article", "articleUrl")
            tagbuild("button", "newsForm", "Add News Item", "", "addNewsButton")

            let title = $("#newTitle").val()
            let synopsis = $("#newsSynopsis").val()
            let url = $("#articleurl").val()

            $("#addNewsButton").on("click", function (event) {

                const addnewsToDb = (title, synopsis, url) => {
                    const newsInfo = {
                        "title": title,
                        "synopsis": synopsis,
                        "url": url
                    }
                    APIManager.createObject(newsInfo, "articles")
                    .then((result) => {
                        console.log("reponse for add user", result)
                    })
                    addnewsToDb()
                }
            }) // Closes register button event listener
} // Closes addNews function

addNews()

module.exports = addNews