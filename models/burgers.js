//dependencies//
var orm = require("../config/orm");
//creating a variable called hamburger//
var hamburger={
    getAll:function(callBack){
        orm.all("bugers", function(res){
            callBack(res)
        })
    },
create:function(name, callBack){
orm.create("burgers",["burger_name", "devoured"], [name, false], callBack)
},
update: function(id, callBack){
orm.update("burgers",{devoured:true,},"id="+id, callBack)
},
}
//module exports
module.exports=hamburger;
