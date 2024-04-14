// Forward button
var buttonF = $("#up_button");
buttonF.click(function() {
    console.log(button.text());
    if (buttonF.text() === "Forward") {
        $.ajax({
            url: "/forward_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonF.text("Stop");
            }
        });
    } else {
        $.ajax({
            url: "/forward_off",
            type: "post",
            success: function() {
                button.text("Forward");
            }
        })
    }
});

// Reverse button
var buttonR = $("#down_button");
buttonR.click(function() {
    console.log(button.text());
    if (buttonR.text() === "Reverse") {
        $.ajax({
            url: "/reverse_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonR.text("Stop");
            }
        });
    } else {
        $.ajax({
            url: "/reverse_off",
            type: "post",
            success: function() {
                buttonR.text("Reverse");
            }
        })
    }
});

// Left button
var buttonL = $("#left_button");
buttonL.click(function() {
    console.log(button.text());
    if (buttonL.text() === "Left") {
        $.ajax({
            url: "/left_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonL.text("Stop");
            }
        });
    } else {
        $.ajax({
            url: "/left_off",
            type: "post",
            success: function() {
                buttonL.text("Left");
            }
        })
    }
});

// right button
var buttonRI = $("#right_button");
buttonRI.click(function() {
    console.log(buttonRI.text());
    if (buttonRI.text() === "Right") {
        $.ajax({
            url: "/right_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonRI.text("Stop");
            }
        });
    } else {
        $.ajax({
            url: "/right_off",
            type: "post",
            success: function() {
                buttonRI.text("Right");
            }
        })
    }
});