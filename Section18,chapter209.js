// # Version 2: Section 18, Chapter 209
// $("div").css("background", "purple")
// $(".highlight").width("200px")
// $("#third").css("border", "2px solid orange")
// $("div:first-child").css("color", "pink")

// # Version 3: Section 18, Chapter 210
console.log($("h1").text())
var a = $("ul").text()
console.log(a)

// To change all 3 li's at once without needing a loop
// $("ul").html("<li>Boom!!!</li>", "<li>Boom!!</li>", "<li>Boom!</li>")
$("li").html("<a href=https://google.com>Boom!!</a>")