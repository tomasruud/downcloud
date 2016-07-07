var redirect = window.location.href + 'callback.html';
var token = null;

SC.initialize({
  client_id: 'c205c3e2eedb509dff1c1147765b055d',
  redirect_uri: redirect
});

SC.connect()
    .then(function(session) {
      token = session.oauth_token;

      $('[data-hide="after-auth"]').slideUp(500, function() {
        $('[data-show="after-auth"]').slideDown(500);
      });

      return SC.get('/me')
    })
    .then(function(data) {
      var id = data.id;
      return SC.get('/users/' + id + '/tracks')
    })
    .then(function(data) {
      var track_list = $('#tracks');

      $('[data-hide="after-fetch"]').slideUp(500);
      $('[data-show="after-fetch"]').slideDown(500);

      for(var index in data) {
        var track = data[index];

        var download_url = track.download_url;
        var title = track.title;

        var append = '<li>';
        append += '<a href="' + download_url + '?oauth_token=' + token + '">' + title + '</a>'
        append += '</li>';

        track_list.append(append);
      }
    });