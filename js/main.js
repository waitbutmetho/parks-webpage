$(function(){
  var height = parseInt(prompt("How tall are you in inches?"));
  if(height > 60){
    $("#terror").addClass("ridegreen")
  };
  if(height >= 60){
    $("#superman").addClass("ridegreen")
  };
  if(height < 60){
    $("#floaty").addClass("ridegreen")
  };

});
