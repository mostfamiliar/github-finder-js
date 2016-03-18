apiKey = require("./../.env").apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos' + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++)
    {
      console.log(response[i].full_name);
      var name = response[i].full_name
      var description = response[i].description
    }
    $("#gitRepos").append("<ul><li>" + name + '<li>' + '<li>' + description + '<li>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
