var getRepos = require("./../js/gituser.js").getRepos;


$(document).ready(function(){
  var userName;
  var pageNum;
  $("#formButton").click(function(event) {
    userName = $("input#userName").val();
    pageNum = 0;
    getRepos(userName, 0);

   event.preventDefault();
  });

  $(".next").click(function(event) {
    pageNum = pageNum + 1;
    getRepos(userName, pageNum);
  });

  $(".previous").click(function(event) {
    pageNum = pageNum - 1;
    getRepos(userName, pageNum);
  });

});
