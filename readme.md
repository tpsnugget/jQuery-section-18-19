# Version 1: Initial commit
   You can use regular .css selectors inside the $(), and this is actually faster
   than using a jQuery selector since it is built-in .css
   $("li:first-of-type")   - built-in .css
   $("li:first")           - jQuery

# Version 2: Section 18, Chapter 208
   $() selects whatever is in the () and returns them in an array, even if the 
      array only has one item
      
   $().css( property, value )

   $("h1").css( "color", "yellow" ) will change the h1 to yellow

   Can also define multiple items in an object and pass the object to jQuery, note
      that jQuery wants commas between items and not semi-colons the way you would
      do it in a .css file. They also use camel case instead of standard .css, 
      e.g., font-size is fontSize.
      var style = {
         color: "pink",
         border: "2px solid red",
         background: "yellow"
      }

   This can be done on multiple items with a single line. For example. in the
      Choose the Color Game there are 6 squares of class="square" with colors in them. 
      If I choose them in css or jQueary I get an array of 6 items. Normally I would
      need to loop through all 6 to change them. In jQuery I could do:
      $(".square).css("background","white") and it does that for me.

# Version 3: Section 18, Chapter 210, Common Methods in jQuery
   Selector exercise

# Version 3: Section 18, Chapter 210, Common Methods in jQuery
   val()
   text()         - similar to .css textContent, text is not treated like html
   attr()
   html()         - the text is actually treated like html
   addClass()
   removeClass()
   toggleClass()

# Version 4: Section 18, Chapter 211, Common Methods in jQuery
   val()          - similar to .css value
   text()         - similar to .css textContent, text is not treated like html
   attr()         - 
   html()         - similar to .css innerHTML, the text is actually treated like html
   addClass()     -
   removeClass()  -
   toggleClass()  -

