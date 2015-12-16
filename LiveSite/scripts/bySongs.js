var api_key = 'WFHOQX2BKPZPVWRWC'


function createPlaylistSongs(songName, artistName, duration) {
	playlist2 = {}
	req1 = {
		api_key: api_key,
		format: 'json',
		results: 1,
		artist: artistName,
		title: songName,
		bucket: ['audio_summary', 'song_type']
	}
	$.ajaxSettings.traditional = true
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://developer.echonest.com/api/v4/song/search?" + $.param(req1),
		success: function(data) {
			console.log(data)
			audio_summary = data['response']['songs'][0]['audio_summary']
			song_type = data['response']['songs'][0]['song_type']
			req2 = {
				api_key: api_key,
				format: 'json',
				results: 100,
				song_type: song_type,
				bucket: ['id:spotify', 'tracks', 'audio_summary'],
				key: audio_summary['key'],
				mode: audio_summary['mode'],
				//min_acousticness: audio_summary['acousticness']*0.9,
				//max_acousticness: audio_summary['acousticness']*1.1,
				min_danceability: audio_summary['danceability']*0.9,
				max_danceability: audio_summary['danceability']*1.1,
				min_energy: audio_summary['energy']*0.9,
				max_energy: audio_summary['energy']*1.1,
				//min_speechiness: audio_summary['speechiness']*0.9,
				//max_speechiness: audio_summary['speechiness']*1.1
			}
			$.ajaxSettings.traditional = true
			$.ajax({
				type: "GET",
				dataType: "json",
				url: "http://developer.echonest.com/api/v4/song/search?" + $.param(req2),
				success: function(data) {
                    // Hide loading indicator
                    hideLoadingIndicator();
					console.log(data)
					var i = 0;
					var d = 0;
					while (i < data['response']['songs'].length && d < duration*60) {
						if (data['response']['songs'][i]['tracks'].length > 0) {
							d += data['response']['songs'][i]['audio_summary']['duration']
							playlist2[data['response']['songs'][i]['tracks'][0]['foreign_id']] = {
								artist: data['response']['songs'][i]['artist_name'],
								title: data['response']['songs'][i]['title']
							}
						}
						i++
					}
					if (Object.keys(playlist2).length == 0) {
						$('#u250').html("Sorry, there is no result for this search.");
						$('#u250').trigger( "isempty" );
					} else {
						widget2 = false
						$('#u250').html("<ul>");
						for (spot in playlist2) {
							if (!widget2) {
								$('#u256').html('<iframe src="https://embed.spotify.com/?uri=' + spot + '" width="250" height="380" frameborder="0" allowtransparency="true"></iframe>')
								widget2 = true
							}
							$('#u250').append("<div class='myresult'><li data-ref=" + spot + ">" + playlist2[spot]['title'] + ", " + playlist2[spot]['artist'] + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li></div>")
						}
						$('#u250').append("</ul>");
						$('#u250').trigger( "isnotempty" );
					}
				}
			})
		}
	})
}

