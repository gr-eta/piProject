var button1 = $("#up_button");
var button2 = $("#down_button");
var button3 = $("#left_button");
var button4 = $("#right_button");

button1.click(function() {
    console.log(button1.text());
    if (button1.text() === "Forward"){
        $.ajax({
            url: "/forward",
            type: "post",
            success: function(response) {
                console.log(response);
                button1.text("Forward Off");
            }
        });
    } else{
        $.ajax({
            url: "/forward_off",
            type: "post",
            success: function(response) {
                button1.text("Forward");
            }
        });
    }
});

button2.click(function() {
    console.log(button2.text());
    if (button2.text() === "Reverse"){
        $.ajax({
            url: "/reverse",
            type: "post",
            success: function(response) {
                console.log(response);
                button2.text("Reverse Off");
            }
        });
    } else{
        $.ajax({
            url: "/reverse_off",
            type: "post",
            success: function(response) {
                button2.text("Reverse");
            }
        });
    }
});

button3.click(function() {
    console.log(button3.text());
    if(button3.text() === "Left"){
        $.ajax({
            url: "/left",
            type: "post",
            success: function(response) {
                console.log(response);
                button3.text("Left Off");
            }
        });
    } else {
        $.ajax({
            url: "/left_off",
            type: "post",
            success: function(response) {
                button3.text("Left");
            }
        });
    }
});

button4.click(function() {
    console.log(button4.text());
    if(button4.text() === "Right"){
        $.ajax({
            url: "/right",
            type: "post",
            success: function(response) {
                console.log(response);
                button4.text("Right Off");
            }
        });
    } else {
        $.ajax({
            url: "/right_off",
            type: "post",
            success: function(response) {
                button3.text("Right");
            }
        });
    }
});
