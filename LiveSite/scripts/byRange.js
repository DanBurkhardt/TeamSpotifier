function getSearchResults(minEnergy, maxEnergy, minDanceability, maxDanceability, minLiveness, maxLiveness, selectedDuration) {	
	minEnergy = 0.9
	maxEnergy = 1
	minDanceability = 0
	maxDanceability = 1
	minLiveness = 0
	maxLiveness = 1
	selectedDuration = 1000.0
	api_key = 'BM2P96SJVHMHJHKHP'
	var url_string = 'http://developer.echonest.com/api/v4/song/search?api_key=BM2P96SJVHMHJHKHP&min_energy='+minEnergy+'&max_energy='+maxEnergy+'&min_danceability='+minDanceability+'&max_danceability='+maxDanceability+'&min_liveness='+minLiveness+'&max_liveness='+maxLiveness+'&results=100&bucket=tracks&bucket=id:spotify&bucket=audio_summary'
	songList = []
	$.ajax({
      	url:url_string,    
      	success: function(json){
	        // console.log(json);
	        len=json.response.songs.length; 
	        d=0;
	        for(var i = 0; i<len; i++) {
	        	try{
	        		duration = json.response.songs[i].audio_summary.duration        		
					if(json.response.songs[i].tracks.length > 0 && d < duration){
						d += duration
						songList.push({
						artist: json.response.songs[i].artist_name,
						title: json.response.songs[i].title,					
						spotify: json.response.songs[i].tracks[0].foreign_id
						})
					}  		
	        	}
	        	catch(err){
	        		console.log("Error message = " + err.message)
	        	}
	        }
	        if(songList.length==0){
	        	results_header.innerHTML = results_header.innerHTML + "No results found"
	        }
	        $('#u166').html("<ul>");
			for (var i=0; i<songList.length; i++) {
				$('#u166').append("<li data-ref='" + songList[i]['spotify'] + "'>" + songList[i]['title'] + ", " + songList[i]['artist'] + "</li>")
			}
			$('#u166').append("</ul>");
	        // console.log(songList)        
     	}
    });     
}

// $(document).ready(function() {
// 	getSearchResults(0.9, 1, 0, 1, 0, 1, 1000)
// 	$('#u166').on("click", "li", function() {
// 		console.log($(this).data("ref"))
// 		$('#u185').html('<iframe src="https://embed.spotify.com/?uri=' + $(this).data("ref") + '" width="250" height="380" frameborder="0" allowtransparency="true"></iframe>')
// 	})
// })
