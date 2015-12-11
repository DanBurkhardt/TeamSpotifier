var api_key = 'WFHOQX2BKPZPVWRWC'


function createPlaylist(songName, artistName, duration) {
	playlist = []
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
				min_acousticness: audio_summary['acousticness']*0.9,
				max_acousticness: audio_summary['acousticness']*1.1,
				min_danceability: audio_summary['danceability']*0.9,
				max_danceability: audio_summary['danceability']*1.1,
				min_energy: audio_summary['energy']*0.9,
				max_energy: audio_summary['energy']*1.1,
				min_speechiness: audio_summary['speechiness']*0.9,
				max_speechiness: audio_summary['speechiness']*1.1
			}
			$.ajaxSettings.traditional = true
			$.ajax({
				type: "GET",
				dataType: "json",
				url: "http://developer.echonest.com/api/v4/song/search?" + $.param(req2),
				success: function(data) {
					console.log(data)
					var i = 0;
					var d = 0;
					while (i < data['response']['songs'].length && d < duration*60) {
						if (data['response']['songs'][i]['tracks'].length > 0) {
							d += data['response']['songs'][i]['audio_summary']['duration']
							playlist.push({
								artist: data['response']['songs'][i]['artist_name'],
								title: data['response']['songs'][i]['title'],
								spotify: data['response']['songs'][i]['tracks'][0]['foreign_id']
							})
						}
						i++
					}
					$('#u166').html("<ul>");
					for (var i=0; i<playlist.length; i++) {
						$('#u166').append("<li data-ref='" + playlist[i]['spotify'] + "'>" + playlist[i]['title'] + ", " + playlist[i]['artist'] + "</li>")
					}
					$('#u166').append("</ul>");
				}
			})
		}
	})
}

$(document).ready(function() {
	createPlaylist("karma police", "Radiohead", 60)
	$('#u166').on("click", "li", function() {
		console.log($(this).data("ref"))
		$('#u185').html('<iframe src="https://embed.spotify.com/?uri=' + $(this).data("ref") + '" width="250" height="380" frameborder="0" allowtransparency="true"></iframe>')
	})
})