$(document).ready(function(){

  var onOff = 0;

  $("#navMenu").hover(function(){
    $(".hamburgerBar").css("background-color", "#c51f30");
    }, function(){
    $(".hamburgerBar").css("background-color", "#654636");
  });

  $("#navMenu").click(function(){
    console.log(onOff);
    if (onOff==1) {
      $("#menuOverlay").hide();
      console.log("workoff");
      onOff=0;
    } else {
      $("#menuOverlay").show();
      console.log("turnOn");
      onOff=1;
    };
  });

  $(".menuItem").click(function(){
    $("#menuOverlay").hide();
    console.log("work")
    onOff=0;
  });

});
