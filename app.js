var token = null;

var config = {
  redirect:  'http://downloader.soundcloud.ruud.ninja/callback.html',
  client_id: 'c205c3e2eedb509dff1c1147765b055d',
  limit:     10
};

$('#authorize').on('click', function() {
  SC.initialize({
    client_id:    config.client_id,
    redirect_uri: config.redirect
  });

  SC.connect()
      .then(function(session) {
        token = session.oauth_token;

        $('[data-hide="after-auth"]').hide();
        $('[data-show="after-auth"]').show();

        return SC.get('/me/tracks', {limit: config.limit, linked_partitioning: 1})
      })
      .then(function(tracks) {
        var next_page = tracks['next_href'];
        append(tracks.collection);

        while(next_page) {
          $.get(next_page, function(tracks) {
            next_page = tracks['next_href'];
            append(tracks.collection);
          });
        }
      });
});

function append(tracks) {
  var track_list = $('#tracks');

  $('[data-hide="after-fetch"]').hide();
  $('[data-show="after-fetch"]').show();

  for(var index in tracks) {
    var track = tracks[index];

    var download_url = track.download_url;
    var title        = track.title;

    var append = '<li>';
    append += '<a href="' + download_url + '?oauth_token=' + token + '">' + title + '</a>';
    append += '</li>';

    track_list.append(append);
  }
}