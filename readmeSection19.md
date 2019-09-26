# Section 19, Chapter 213, jQuery Click Events
   click()        - covered this in Chapter 213
   keypress()     - covered this in Chapter 215
   on()           - covered this in Chapter 216, can use .on() 99% of the time
                     very similar to addEventListener in JS

# Section 19, Chapter 217, jQuery effects
fadeOut()

if you want something to happen after the fadeout, add a callback function. It
won't run until the fadeout is complete. The number is in milliseconds.
fadeout(1000, function() {
   $(this).remove()
})

fadeIn()
fadeToggle()

slideDown()
slideToggle()
slideUp()