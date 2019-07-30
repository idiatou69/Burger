var express = require("express");
var router = express.Router();
// import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");
// create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all("/", function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            //send back the ID of the the new quote
            res.json({ id: result.insertId });
        });

});
router.put("/api/cats/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // if no rows were changed, then the id must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // if no rows were changed, then the ID must not so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

// export the router at the end of your file. 
module.exports = router;