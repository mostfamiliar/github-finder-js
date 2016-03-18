var getRepos = require("./../js/gituser.js").getRepos;


$(document).ready(function(){
  var userName;
  var pageNum;
  $(".previous").addClass("disabled");
  $(".next").addClass("disabled");
  $("#formButton").click(function(event) {
    userName = $("input#userName").val();
    pageNum = 1;
    getRepos(userName, 1);
    $(".next").removeClass("disabled");
   event.preventDefault();
  });

  $(".next").click(function(event) {
    pageNum = pageNum + 1;
    getRepos(userName, pageNum);
    $(".previous").removeClass("disabled");
  });

  $(".previous").click(function(event) {
    if (pageNum > 1) {
    pageNum = pageNum - 1;
    getRepos(userName, pageNum);
    } else {
      $(".previous").addClass("disabled");
    }

  });

});
