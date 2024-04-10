var fbutton = $("#forward_button");
fbutton.click(function() {
    console.log(fbutton.text());
    if (fbutton.text() === "On") {
        $.ajax({
            url: "/forward_on",
            type: "post",
            success: function(response) {
                console.log(response);
                fbutton.text("Off");
            }
        });
    } else {
        $.ajax({
            url: "/forward_off",
            type: "post",
            success: function() {
                fbutton.text("On");
            }
        })
    }
});

var bbutton = $("#back_button");
bbutton.click(function() {
    console.log(bbutton.text());
    if (bbutton.text() === "On") {
        $.ajax({
            url: "/back_on",
            type: "post",
            success: function(response) {
                console.log(response);
                bbutton.text("Off");
            }
        });
    } else {
        $.ajax({
            url: "/back_off",
            type: "post",
            success: function() {
                bbutton.text("On");
            }
        })
    }
});

var rbutton = $("#right_button");
rbutton.click(function() {
    console.log(rbutton.text());
    if (rbutton.text() === "On") {
        $.ajax({
            url: "/right_on",
            type: "post",
            success: function(response) {
                console.log(response);
                rbutton.text("Off");
            }
        });
    } else {
        $.ajax({
            url: "/right_off",
            type: "post",
            success: function() {
                rbutton.text("On");
            }
        })
    }
});

var lbutton = $("#left_button");
lbutton.click(function() {
    console.log(lbutton.text());
    if (lbutton.text() === "On") {
        $.ajax({
            url: "/left_on",
            type: "post",
            success: function(response) {
                console.log(response);
                lbutton.text("Off");
            }
        });
    } else {
        $.ajax({
            url: "/left_off",
            type: "post",
            success: function() {
                lbutton.text("On");
            }
        })
    }
});