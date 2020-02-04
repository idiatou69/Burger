var express = require("express");
var router = express.Router();
// import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");
// create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    console.log('root found');

    burger.all(function (resultsOrm) {
        var hbsObject = {
            burgers: resultsOrm
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// (".create-form").normalize("submit", function (event) {
//     event.preventDefault();
//     var newBurger = {
//         name: $("#bu").val().trim(),
//         devoured: $("[name=devoured]: checked").val().trim()
//     };
//     //send the post request.
//     $.ajax("/api/burgers", {
//         type: "post",
//         data: newBurger
//     }).then(
//         function () {
//             console.log("created new burger");
//             //reload the page to get  the updated list
//             location.reload();
//         }
//     );
// });


router.post("/api/burgers", function (req, res) {
    console.log(req.body)

    var devoured = 0;
    if (req.body.devoured === "false")
        devoured = 1;
    else
        devoured = 1;


    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name,  devoured
        ], function (result) {
            //send back the ID of the the new quote
            res.json({ id: result.insertId });
        });

});

// $(".change-burger").on("click", function (event) {
//     var id = $(this).data("id");
//     var newBurger = $(this).data("newBurger");

//     var newBurger = {
//         burger: newBurger
//     };
//     // send the put request.
//     $.ajax("api/burgers/" + id , {
//         type: "PUT",
//         data: newBurgerState
//     }).then(
//         function () {
//             console.log("changed burger to ", newBurger);
//             //reload the page toupdate list
//             location.reload();
//         }
//     );
// });


router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    console.log(req.body)

    var devoured = 0;
    if (req.body.devoured === "true")
        devoured = 0;
    else
        devoured = 1;

    burger.update({
        devoured: devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // if no rows were changed, then the id must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



// $(".delete-burger").on("click", function (event) {
//     var id = $(this).data("id");

//     // send the delete request.
//     $.ajax("api/burgers/" + id, {
//         type: "DELETE",
//     }).then(
//         function () {
//             console.log("delete burger ", id);
//             //reload the page toupdate list
//             location.reload();
//         }
//     );
// });



router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function (resultsOrm) {
        if (resultsOrm.affectedRows == 0) {
            // if no rows were changed, then the ID must not so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

// export the router at the end of your file. 
module.exports = router;