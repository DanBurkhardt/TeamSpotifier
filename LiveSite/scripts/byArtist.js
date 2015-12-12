var api_key = 'WFHOQX2BKPZPVWRWC'


function createPlaylistArtist(artistName, duration) {
	playlist = []
	d = 0
	reached = false
	req1 = {
		api_key: api_key,
		format: 'json',
		results: 50,
		name: artistName,
		bucket: 'id:spotify'
	}
	$.ajaxSettings.traditional = true
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://developer.echonest.com/api/v4/artist/similar?" + $.param(req1),
		success: function(data) {
			console.log(data)
			for (var i=0; i<50; i++) {
				try {
					artist = data['response']['artists'][i]['foreign_ids'][0]['foreign_id'].split(':')[2]
					$.ajaxSettings.traditional = true
					$.ajax({
						type: "GET",
						dataType: "json",
						url: "https://api.spotify.com/v1/artists/" + artist + "/top-tracks?country=US",
						dataValue: data['response']['artists'][i],
						success: function(data) {
							console.log(data)
							if (d<duration*60) {
								d += data['tracks'][0]['duration_ms'] / 1000
								playlist.push({
									artist: this.dataValue.name,
									title: data['tracks'][0]['name'],
									spotify: data['tracks'][0]['uri']
								})
							}
							if (d>duration*60 && !reached) {
								reached = true
								console.log(playlist)
								$('#u166').html("<ul>");
								for (var i=0; i<playlist.length; i++) {
									$('#u166').append("<li data-ref='" + playlist[i]['spotify'] + "'>" + playlist[i]['title'] + ", " + playlist[i]['artist'] + "</li>")
								}
								$('#u166').append("</ul>");
							}
						}
					})
				}
				catch(err) {
					console.log(err)
				}
			}
		}
	})
}

$(document).ready(function() {
	$('#buttonu199').on("click", function() {
		artist = $('#bobInput').val()
		duration = currentDuration1
		createPlaylistArtist(artist, duration)
	})
	
	$('#u166').on("click", "li", function() {
		console.log($(this).data("ref"))
		$('#u185').html('<iframe src="https://embed.spotify.com/?uri=' + $(this).data("ref") + '" width="250" height="380" frameborder="0" allowtransparency="true"></iframe>')
	})
})

