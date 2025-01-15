$(document).ready(function () {
    $("#btn").click(function () {
        $(".box").toggle();
        //$(".box").fadeToggle();
        $(".box").css({ "background-color": "aqua" });
    });
    $('.box').mouseenter(function () {
        $(this).css({ "background-color": "red" });
    });
    $('.box').mouseleave(function () {
        $(this).css({ "background-color": "red" });
    });
    $('#name').blur(function () {
        var userInput = $(this).val();

        if (userInput.length < 3)
        {
            alert("please enter atleast 4 characters");
        }
    });


});