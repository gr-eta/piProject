var button1 = $("#up_button");
var button2 = $("#down_button");
var button3 = $("#left_button");
var button4 = $("#right_button");

button1.click(function() {
    $.ajax({
        url: "/forward",
        type: "post",
        success: function(response) {
            console.log(response);
        }
    });
});

button2.click(function() {
    $.ajax({
        url: "/reverse",
        type: "post",
        success: function(response) {
            console.log(response);
        }
    });
});

button3.click(function() {
    $.ajax({
        url: "/left",
        type: "post",
        success: function(response) {
            console.log(response);
        }
    });
});

button4.click(function() {
    $.ajax({
        url: "/right",
        type: "post",
        success: function(response) {
            console.log(response);
        }
    });
});
