//This is our javascript file. It is executing when the HTML page finishes loading.
//(document).ready() is a function that ensures the javascript executes after the HTML loads
$( document ).ready(function() {
    //console.log is a function that prints text to the console; it is the printf() of javascript
    console.log( "ready!" );
    //alert is a function that displays text in a pop-up box on the page
    alert("you are not prepared");

    //this line of code injects (or adds) the text in the .append() method (or function) to the HTML file
    $("#ChangeMe").append("Sup bruh");

    //this line of code changes the the look of our HTML body, specifically to change the background color
    //hex color "123"
    $('body').css('background-color', 'red');

    //this function is executed when our button is clicked.
    $("button").click(function() {
        alert("Background color = " + $("body").css("background-color"));
    });
});
