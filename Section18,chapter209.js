// =============================================================================
// # Version 2: Section 18, Chapter 209, Selector Exercise
// $("div").css("background", "purple")
// $(".highlight").width("200px")
// $("#third").css("border", "2px solid orange")
// $("div:first-child").css("color", "pink")

// =============================================================================
// # Version 3: Section 18, Chapter 210, text() and html()
console.log($("h1").text())
var a = $("ul").text()
console.log(a)

// To change all 3 li's at once without needing a loop
// $("ul").html("<li>Boom!!!</li>", "<li>Boom!!</li>", "<li>Boom!</li>")
$("li").html("<a href=https://google.com>Boom!!</a>")

// =============================================================================
// Version 4, Section 18, Chapter 211, attr() and val()
// Working with attr() and img's
$("img").css("width", "200px")
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg")

// To select the last img
$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg")

// Get the input, change the type of the input from text to number, change the
// placeholder to blank
// $("input").attr({
//    type: "number",
//    placeholder: ""
// })

// Set the value of the text input
$("input").val("Mike")

// Get the value from the text input
console.log($("input").val())

// Added a dropdown box, set the initial value to ""
$("input").val("")