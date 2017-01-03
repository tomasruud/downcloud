var token = null;

var config = {
  redirect:  'http://downloader.soundcloud.ruud.ninja/callback.html',
  client_id: 'c205c3e2eedb509dff1c1147765b055d',
  limit:     50
};

$('#authorize').on('click', function() {
  SC.initialize({
    client_id:    config.client_id,
    redirect_uri: config.redirect
  });

  SC.connect()
      .then(function(session) {
        token = session.oauth_token;

        animate('after-auth');

        return SC.get('/me/tracks', {limit: config.limit, linked_partitioning: 1})
      })
      .then(function(tracks) {
        animate('after-fetch');
           
        append(tracks.collection);

        while(tracks.hasOwnProperty('next_href')) {
          $.get(tracks.next_href, function(new_tracks) {
            tracks = new_tracks;
            append(tracks.collection);
          });
        }
      });
});

function append(tracks) {
  var track_list = $('#tracks');

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

function animate(step) {
  $('[data-hide="' + step + '"]').hide();
  $('[data-show="' + step + '"]').show();
}
