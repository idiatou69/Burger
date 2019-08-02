// $(".create-form").normalize("submit", function (event) {
//         event.preventDefault();
//         var newBurger = {
//             burger_name: $("#bu").val().trim(),
//             devoured: $("[name=devoured]: checked").val().trim()
//         };
//         //send the post request.
//         $.ajax("/api/burgers", {
//             type: "post",
//             data: newBurger
//         }).then(
//             function () {
//                 console.log("created new burger");
//                 //reload the page to get  the updated list
//                 location.reload();
//             }
//         );
//     });

    
$(document).on("click", ".change-burger", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newburger");
console.log("click")
    var newBurger = {
        devoured: newBurger
    };
    // send the put request.
    $.ajax("api/burgers/" + id , {
        type: "PUT",
        data: newBurger
    }).then(
        function () {
            console.log("changed burger to ", newBurger);
            //reload the page toupdate list
            location.reload();
        }
    );
});


$(document).on("click", ".delete-burger", function (event) {
    var id = $(this).data("id");

    // send the delete request.
    $.ajax("api/burgers/" + id, {
        type: "DELETE",
    }).then(
        function () {
            console.log("delete burger ", id);
            //reload the page toupdate list
            location.reload();
        }
    );
});

    
$(document).on("click", "add burger", function (event) {
    event.preventDefault()
// get the info from the input 
    // send the delete request.
    $.ajax("api/burgers/:data", {
        type: "post",
    }).then(
        function () {
            console.log("add burger ", id);
            //reload the page toupdate list
            location.reload();
        }
    );
});