apiKey = require("./../.env").apiKey;

exports.getRepos = function(user, page){
  $.get('https://api.github.com/users/' + user + '/repos?page=' + page + '&per_page=20' + '&access_token=' + apiKey + ';rel=next').then(function(response){
    $("#gitRepos").empty();
    for(var i = 0; i < response.length; i++)
    {
      var name;
      var description;
      name = response[i].name;
      if (response[i].description != "") {
      description = response[i].description
      } else {
      description = "No description provided";
      }

      $("#gitRepos").append("<ul><li class='name'><strong>" + name + '</strong></li><ul><li>' + description + '</li></ul></ul>');
    }

  }).fail(function(error){
    $("#gitRepos").append('Api error: ' + error.responseJSON.message)
  });
};
