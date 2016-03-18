var getRepos = require("./../js/gituser.js").getRepos;


$(document).ready(function(){
  var userName;

  $("#formButton").click(function(event) {
    userName = $("input#userName").val();
    getRepos(userName);

   event.preventDefault();
  });

});
