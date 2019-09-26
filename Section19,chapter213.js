$("h1").click(myConsoleLog)

function myConsoleLog() {
   console.log("You clicked the h1")
}

// Now add a click listener to all buttons
$("button").click(function() {
   console.log("You clicked a button")
})

// All buttons have the same click listener, now id the button that was clicked
// Can't use this since .click() is jQuery, we have to use the jQuery version
// of this which is $(this)
$("button").click(function() {
   console.log("You clicked the button " + $(this).text())
})

// Chapter 214, .keypress()
// e contains all the information about the jQuery .keypress() event
$("input").keypress(function(e) {
   // console.log("You pressed the " + $(this).val() + " char")
   // console.log("You pressed the " + e.which + " char")

   // If the user hits the enter key
   if (e.which === 13) {
      console.log("You hit the enter key after typing " + $(this).val())
   }
})