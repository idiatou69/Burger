//dependencies//
var orm = require("../config/orm.js");
//creating a variable called hamburger//
var burger = {
    all: function (callBackController) {
        orm.all("burgers", function (resultsOrm) {
            callBackController(resultsOrm);
        });
    },

    create: function (cols, vals, callBackController) {
        orm.create("burgers", cols, vals, function (resultsOrm) {
            callBackController(resultsOrm);
        });
    },

    update: function (cols, vals, callBackController) {
        orm.update("burgers", cols, vals, function (resultsOrm) {
            callBackController(resultsOrm);
        });
    },

    
delete: function (condition, callBackController) {
    orm.delete("burgers", condition, function (res) {
        callBack(res);
    })
}

}


//module exports
module.exports = burger;

