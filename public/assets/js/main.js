// here we can grab all the data from our form
$(function() {
    $("#portfolio-btn").on("click", function(e) {
        // as of now, this is not rendering the stuff. but if you 
        // go to thee /portfolio route it works, so we can link this later teehee
        $.get("/portfolio").then(function(data) {
            console.log(data);
        });
    });

});