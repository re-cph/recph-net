$(document).ready(function(){
// Add smooth scrolling to all links with class "scroll"
  $("a.scroll").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 83 //83px added to adjust for margins
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
        //This is not working - since the page jumps to the # after scrolling and thereby ignoring the 83px

      });
    } // End if
  });
});

//
//Removed ORIGINAL SCRIPT because it stopped working in latest version of Chrome
// 

