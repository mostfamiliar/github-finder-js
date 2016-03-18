var getRepos = require("./../js/gituser.js").getRepos;


$(document).ready(function(){
  var userName;
  var pageNum;
  $(".back").addClass("disabled");
  $(".forward").addClass("disabled");
  $("#formButton").click(function(event) {
    userName = $("input#userName").val();
    pageNum = 1;
    getRepos(userName, 1);
    $(".forward").removeClass("disabled");
    $("h2").html("Git repos!");
   event.preventDefault();
  });

  $(".forward").click(function(event) {
    pageNum = pageNum + 1;
    getRepos(userName, pageNum);
    $(".back").removeClass("disabled");
  });

  $(".back").click(function(event) {
    if (pageNum > 1) {
    pageNum = pageNum - 1;
    getRepos(userName, pageNum);
    } else {
      $(".back").addClass("disabled");
    }

  });

});
