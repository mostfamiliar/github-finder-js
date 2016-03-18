var gitUser = require("./../js/gituser.js").gitUser;


$(document).ready(function(){
  $("#userForm").click(function() {
    gitUser();
  });
  event.preventDefault();
});
