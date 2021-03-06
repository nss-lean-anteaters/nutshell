const $ = require("jquery")

const APIManager = Object.create(null, {
    getAllObjects: {
        value: function (obj) {
            return $.ajax(`http://localhost:8088/${obj}`)
        }
    },
    getSingleObj: {
        value: function (obj, id) {
            return $.ajax(`http://localhost:8088/${obj}/${id}`)
        }
    },
    createObject: {
        value: function (obj,endpoint) {
            return $.ajax({
                url: `http://localhost:8088/${endpoint}`,
                method: "POST",
                data: obj
            })
        }
    },
    searchUsers: {
        value: function (searchValue) {
            return $.ajax({
                url: `http://localhost:8088/user?q=${searchValue}`,
                method: "GET"
            })
        }
    },
    deleteObject: {
        value: function (obj, id) {
            return $.ajax({
                url: `http://localhost:8088/${obj}/${id}`,
                method: "DELETE"
            })
        }
    },
    updateObject: {
        value: function (obj) {
            return $.ajax({
                url: `http://localhost:8088/${obj}/${obj.id}`,
                method: "PUT",
                data: `${obj}`
            })
        }
    }
})

module.exports = APIManager

