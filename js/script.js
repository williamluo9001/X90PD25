$(document).ready(function () {
    $(".pulse").click(function(){
    	$(".pic").fadeToggle(4000);
        $("#intro").fadeToggle(1000);
     	$(".nav").fadeToggle("fast");
     	$("#wrap").fadeToggle("fast");
     	$(".index").fadeToggle("fast");
     	
    });
});

$(document).ready(function(){$("body").hide().fadeIn(2000);});

  $(function () { 

    $("#aboutIcon").click(function () {
      $(".aboutMe").fadeIn(2000);
    });

  });

  $(function () { 

    $("#projectIcon").click(function () {
      $(".projects").fadeIn(2000);
    });

  });

$(function () { 

    $("#contactIcon").click(function () {
      $(".contact").fadeIn(2000);
    });

  });