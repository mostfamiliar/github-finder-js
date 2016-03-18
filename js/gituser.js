apiKey = require("./../.env").apiKey;
var moment = require("moment");

exports.getRepos = function(user, page){
  $.get('https://api.github.com/users/' + user + '/repos?page=' + page + '&per_page=20' + '&access_token=' + apiKey + ';rel=next').then(function(response){
    $("#gitRepos").empty();

    for(var i = 0; i < response.length; i++)
    {
      var name;
      var description;
      var createdAt = moment(response[i].created_at).format('MMMM Do YYYY, h:mm:ss a');
      name = response[i].name;
      if (response[i].description != "") {
      description = response[i].description
      } else {
      description = "No description provided";
      }

      $("#gitRepos").append("<ul><li class='name'><strong>" + name + '</strong></li><ul><li>' + description + '</li><li>Created: ' + createdAt + '</li></ul></ul>');
    }

  }).fail(function(error){
    $("#gitRepos").append(error.responseJSON.message)
  });
};
