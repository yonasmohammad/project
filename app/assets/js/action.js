$('#picker').on('change', function(){
    $('.edit-me').css('background', $(this).val());
})




$( "button" ).on('click',function() {
    $("button").removeClass('edit-me');
    $(this).addClass('edit-me')
});


$( "button" ).on('click',function(){  
    var size = 16;  
    $(".controls .up").click(function(){  
        size++;  
        $("button").animate({fontSize: size});  
    });  
    $(".controls .down").click(function(){  
        size--;  
        $("button").animate({fontSize: size});  
    });  
});  



$( ".table" ).on('click',function() {
    $(".table").removeClass('me-table');
    $(this).addClass('me-table')
});


$('#pickertext').on('change', function(){
    $('.edit-me').css('color', $(this).val());
})


$('#pickerBorder').on('change', function(){
    $('.me-table').css('background', $(this).val());
    
})


$('#pickerBordertext').on('change', function(){
    $('.me-table').css('color', $(this).val());
    
})


$( "button" ).click(function() {
  var html = [ "this are  the following styles:" ];
 
  var styleProps = $( this ).css([
    "width", "height", "color", "background-color",  "border-radius", "opacity", "border" ,"transition", "margin-right",  "border-right", "transform","box-shadow"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value + ";");
  });
 
  $( "#result" ).html( html.join( "<br>" ) );
});


$( "table" ).click(function() {
  var html = [ "this are  the following styles:" ];
 
  var styleProps = $( this ).css([
    "width", "height", "color", "background-color",  "border-radius", "opacity", "border",  "border-right", "focus","hover", "outline" ,"box-shadow"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value + ";");
  });
 
  $( "#result" ).html( html.join( "<br>" ) );
});



$(document).ready(function(){
  $('button').on('click',function(){
    $('button').removeClass("s");
    $(this).addClass("s");
});
});




$(document).ready(function(){
  $('#pickerShadow').on('change',function(){
    $('.s').css({ 
                 '-webkit-box-shadow' :
                'inset 0 200px 400px -200px ' + $(this).val(),
                '-moz-box-shadow': 'inset 0 200px 400px -200px '+ $(this).val(),
                'box-shadow': '-1px 8px 15px 0px  '+ $(this).val() });
});
});

