

$( ".table" ).on('click',function() {
    $(".table").removeClass('me-table');
    $(this).addClass('me-table')
});




$( "button" ).on('click',function() {
    $("button").removeClass('edit-me');
    $(this).addClass('edit-me')
    
    var html = [ "this are  the following styles:" ];
    var styleProps = $( '.edit-me' ).css(["font-family","font-weight","font-size", "width", "height", "color","margin", "border",  "border-radius",
                                   "background-color", "opacity","transition","transform","box-shadow","-webkit-box-shadow","-moz-box-shadow"
                                    ]);
    $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value + ";");
  });
 
  $( "#result" ).html( html.join( "<br>" ) );
  

});


$('#picker').on('change', function(){
    $('.edit-me').css('background', $(this).val());
})



$('#pickertext').on('change', function(){
    $('.edit-me').css('color', $(this).val());
})


$('#pickerBorder').on('change', function(){
    $('.me-table').css('background', $(this).val());
    
})


$('#pickerBordertext').on('change', function(){
    $('.me-table').css('color', $(this).val());
    
})





// update result when move yeah

$( ".slideq" ).mousemove(  function() {
 var html = [ "this are  the following styles:" ];
 var styleProps = $( '.edit-me' ).css([ "font-family","font-weight","font-size", "width", "height", "color","margin", "border",  "border-radius",
                                   "background-color", "opacity","transition","transform","box-shadow","-webkit-box-shadow","-moz-box-shadow"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value + ";");
  });
 
  $( "#result" ).html( html.join( "<br>" ) );
  
});

//end update


$( ".tablechange" ).on('change',function() {
  var html = [ "this are  the following styles:" ];
 
  var styleProps = $( ".me-table" ).css([
            "text-align","width", "height", "color", "background-color",  "border-radius", "opacity", "border",  "border-right", "outline" ,"box-shadow"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value + ";");
  });
 
  $( "#result" ).html( html.join( "<br>" ) );
});



$( ".tableMove" ).mousemove(function() {
  var html = [ "this are  the following styles:" ];
 
  var styleProps = $( ".me-table" ).css([
            "text-align","width", "height", "color", "background-color",  "border-radius", "opacity", "border",  "border-right", "outline" ,"box-shadow"
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


$(function() {
  

//end border

$('#slider').slider({
value:12,
min: 10,
max: 50,
step: 1,
slide: function( event, ui ) {
$('.edit-me').css('font-size', ui.value);

  
  
}
});
//for table

  var  tblecolor= new Array('', '0 0 1em rgba(60,166,157,1)','0 0 1em rgba(32,133,39,1)','0 0 1em rgba(0,255,255,1)', '0 0 1em rgba(0,255,102,1)',
                                '0 0 1em rgba(200,212,36,1)', '0 0 1em rgba(48,36,214,1)','0 0 1em rgba(5,0,69,1)', '0 0 1em rgba(0,69,28,1)',
                                '0 0 1em rgba(212,133,36,1)', '0 0 1em rgba(255,255,255,1)','0 0 1em rgba(0,255,255,1)', '0 0 1em rgba(255,0,0,1)',
                                '0 0 1em rgba(212,36,36,1)', '0 0 1em rgba(23,133,153,1)','0 0 1em rgba(76,153,25,1)', '0 0 1em rgba(255,0,153,1)');
$('#slider10').slider({
value:1,
min: 1,
max: 16,
step: 1,
slide: function(event, ui) {
var b = tblecolor[ui.value]
$('.me-table').css('box-shadow', b);
}
});

  
  
var x = new Array('', 'dotted', 'dashed', 'solid', 'double', 'groove');
$('#slider5').slider({
value:1,
min: 1,
max: 5,
step: 1,
slide: function(event, ui) {
var z = x[ui.value];
$('.edit-me').css('border-style', z);
}
});


  //border only

$('#slider6').slider({
value:12,
min: 10,
max: 50,
step: 1,
slide: function( event, ui ) {
$('.edit-me').css('border-top-left-radius', ui.value);
}
});
$('#slider7').slider({
value:12,
min: 10,
max: 50,
step: 1,
slide: function( event, ui ) {
$('.edit-me').css('border-top-right-radius', ui.value);
}
});
$('#slider8').slider({
value:12,
min: 10,
max: 50,
step: 1,
slide: function( event, ui ) {
$('.edit-me').css('border-bottom-left-radius', ui.value);
}
});
$('#slider9').slider({
value:12,
min: 10,
max: 50,
step: 1,
slide: function( event, ui ) {
$('.edit-me').css('border-bottom-right-radius', ui.value);
}
});


var aWeights = new Array('', 'normal', 'bold', 'bolder', 'lighter', 'inherit');
$('#slider3').slider({
value:1,
min: 1,
max: 5,
step: 1,
slide: function(event, ui) {
var sFontWeight = aWeights[ui.value];
$('.edit-me').css('font-weight', sFontWeight);
}
});

var aAligns = new Array('', 'left', 'right', 'center', 'justify');
$('#slider4').slider({
value:1,
min: 1,
max: 4,
step: 1,
slide: function(event, ui) {
var sTextAlign = aAligns[ui.value];
$('.me-table').css('text-align', sTextAlign);
}
});
});


//for font font-family
$("#fs").change(function() {
    //alert($(this).val());
    $('.edit-me').css("font-family", $(this).val());

});






















