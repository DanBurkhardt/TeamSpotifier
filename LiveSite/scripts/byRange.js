function getSearchResults(minEnergy, maxEnergy, minDanceability, maxDanceability, minLiveness, maxLiveness, selectedDuration) {	
	selectedDuration = selectedDuration * 60
	api_key = 'BM2P96SJVHMHJHKHP'
	var url_string = 'http://developer.echonest.com/api/v4/song/search?api_key=BM2P96SJVHMHJHKHP&min_energy='+minEnergy+'&max_energy='+maxEnergy+'&min_danceability='+minDanceability+'&max_danceability='+maxDanceability+'&min_liveness='+minLiveness+'&max_liveness='+maxLiveness+'&results=100&bucket=tracks&bucket=id:spotify&bucket=audio_summary'
	playlist = []
	$.ajax({
      	url:url_string,    
      	success: function(json){
	        len=json.response.songs.length; 
	        d=0;
	        for(var i = 0; i<len; i++) {
	        	try{
	        		duration = json.response.songs[i].audio_summary.duration       	        		
					if(json.response.songs[i].tracks.length > 0 && d < selectedDuration){						
						d += duration
						playlist.push({
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
	        if(playlist.length==0){
	        	console.log("No results found")
	        }	        
	        $('#useCaseThreeDiv').html("");
			$('#useCaseThreeDiv').append("<ul>");
			for (var i=0; i<playlist.length; i++) {
				$('#useCaseThreeDiv').append("<div class='myresult'><li data-idx=" + i + " data-ref='" + playlist[i]['spotify'] + "'>" + playlist[i]['title'] + ", " + playlist[i]['artist'] + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li></div>")
			}
			$('#useCaseThreeDiv').append("</ul>");
     	}
    });     
}