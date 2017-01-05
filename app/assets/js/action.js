
// $("#colorChoice").change(function(){
//   $(".custom").css('background', $(this).val());
// });

$( ".target" ).click(function() {
  alert( "click me" );
  console.log("s");
});

$('.color-button').each( function( i, elem ) {
  var hueb = new Huebee( elem, {
    // options
    setBGColor: '.set-bg-elem'
  });
});





$( document ).ready( function() {
    var $body = $('.responsive-text'); //Cache this for performance

    var setBodyScale = function() {
        var scaleSource = $body.width(),
            scaleFactor = 0.35,                     
            maxScale = 600,
            minScale = 30; //Tweak these values to taste

        var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

        if (fontSize > maxScale) fontSize = maxScale;
        if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

        $('.responsive-text').css('font-size', fontSize + '%');
    }

    $(window).resize(function(){
        setBodyScale();
    });

    //Fire it when the page first loads:
    setBodyScale();
});