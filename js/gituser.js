apiKey = require("./../.env").apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos' + '?access_token=' + apiKey).then(function(response){
    var name;
    var description;
    for(var i = 0; i < response.length; i++)
    {
      name = response[i].name;
      if (response[i].description != "") {
      description = response[i].description
      } else {
      description = "No description provided";
      }

      $("#gitRepos").append("<ul><li><strong>" + name + '</strong></li><ul><li>' + description + '</li></ul></ul>');
    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
