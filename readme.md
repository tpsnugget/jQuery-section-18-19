# Version 1: Initial commit

# Version 2: Section 18, chapter 208
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