//dependencies//
var orm = require("../config/orm.js");
//creating a variable called hamburger//
var hamburger = {
    getAll: function (callBack) {
        orm.all("bugers", function (res) {
            callBack(res)
        })
    },
    // the variable name are arrays
    create: function (name, callBack) {
        orm.create("burgers", ["burger_name", "devoured"], [name, false], callBack)
    },
    update: function (id, callBack) {
        orm.update("burgers", { devoured: true, }, "id=" + id, callBack)
    },

    delete: function(condition, callBack){
        orm.delete("burgers", condition, function(res){
            callBack(res);
        })
    }

}
//module exports
module.exports = hamburger;

