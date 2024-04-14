// Forward button
var buttonF = $("#forward_button");
buttonF.click(function() {
    console.log(button.text());
    if (buttonF.text() === "LED On") {
        $.ajax({
            url: "/forward_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonF.text("LED Off");
            }
        });
    } else {
        $.ajax({
            url: "/forward_off",
            type: "post",
            success: function() {
                button.text("LED On");
            }
        })
    }
});

// Reverse button
var buttonR = $("#reverse_button");
buttonR.click(function() {
    console.log(button.text());
    if (buttonR.text() === "LED On") {
        $.ajax({
            url: "/reverse_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonR.text("LED Off");
            }
        });
    } else {
        $.ajax({
            url: "/reverse_off",
            type: "post",
            success: function() {
                buttonR.text("LED On");
            }
        })
    }
});

// Left button
var buttonL = $("#left_button");
buttonL.click(function() {
    console.log(button.text());
    if (buttonL.text() === "LED On") {
        $.ajax({
            url: "/left_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonL.text("LED Off");
            }
        });
    } else {
        $.ajax({
            url: "/left_off",
            type: "post",
            success: function() {
                buttonL.text("LED On");
            }
        })
    }
});

// right button
var buttonRI = $("#right_button");
buttonRI.click(function() {
    console.log(buttonRI.text());
    if (buttonRI.text() === "LED On") {
        $.ajax({
            url: "/right_on",
            type: "post",
            success: function(response) {
                console.log(response);
                buttonRI.text("LED Off");
            }
        });
    } else {
        $.ajax({
            url: "/right_off",
            type: "post",
            success: function() {
                buttonRI.text("LED On");
            }
        })
    }
});