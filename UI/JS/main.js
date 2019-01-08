$(document).ready(function(){

    $(".meetup_question").hide();
    $(".login").css("background", "none");
  
  $(".login").click(function(){
  $(".meetup_title").hide();
  $(".meetup_question").show();
  $(".signup").css("background", "none");
  $(".login").css("background", "#fff");
  });
  
  $(".signup").click(function(){
  $(".meetup_question").hide();
  $(".meetup_title").show();
  $(".login").css("background", "none");
  $(".signup").css("background", "#fff");
  });
  
  $(".btn").click(function(){
  $(".input").val("");
  });
  
  });
  