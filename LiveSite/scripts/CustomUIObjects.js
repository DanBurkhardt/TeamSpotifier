// JS FILE FOR JQUERY UI OBJECTS
// Dan Burkhardt
// Team Spotifier


// current duration for scenario 1
var currentDuration1 = "15";

// current duration for scenario 2
var currentDuration2 = "15";

// globalPL
var globalPL = {}

/*
/       JQUERY Scenario 1
*/
function durationSlider1Changed(event, ui){
    
    //alert("Value changed to:"+ui.value);
    
    // Add fuction for refreshing the table with results that match the duration
    
    // Replace the button text with the updated duration
    $('#u215-4').replaceWith('<div class=\"clearfix grpelem\" id=\"u215-4\"><!-- content --><p>add '+ui.value+' mins of songs to existing playlist</p></div>');
    // Replace new playlist header
    $('#u324-4').replaceWith('<div class=\"clearfix colelem\" id=\"u324-4\"><!-- content --><p>you selected '+ui.value+' mins of songs.</p></div>'); 
    // Replace add to existing header
    $('#u342-4').replaceWith('<div class=\"clearfix colelem\" id=\"u342-4\"><!-- content --><p>you selected '+ui.value+' mins of songs.</p></div>'); 
    
    // Assign new slider duration to global variable
    currentDuration1 = ui.value;
};



/*
/       JQUERY Scenario 2
*/
function durationSlider2Changed(event,ui){
    
    //alert("S2 value changed to:"+ui.value);
    
    // Add fuction for refreshing the table with results that match the duration
    
    // Replace the button text with the updated duration
    $('#u501-4').replaceWith('<div class=\"clearfix grpelem\" id=\"u501-4\"><!-- content --><p>add '+ui.value+' mins of songs to existing playlist</p></div>');
    // Replace new playlist header
    $('#u533-4').replaceWith('<div class=\"clearfix colelem\" id=\"u533-4\"><!-- content --><p>you selected '+ui.value+' mins of songs.</p></div>');
    // Replace add to existing header
    $('#u513-4').replaceWith('<div class=\"clearfix colelem\" id=\"u513-4\"><!-- content --><p>you selected '+ui.value+' mins of songs.</p></div>');
    
    
    // Assign the new duration to the global variable
    currentDuration2 = ui.value;
    
};

/*
/       JQUERY Scenario 3
*/
// Sliders for different user provided params
function energySliderChanged(event,ui){
   
    alert("Energy value changed, low value: "+ui.values[0] +" high value: " +ui.values[1]);   
};


function loudnessSliderChanged(event,ui){
   
    alert("Loudness value changed, low value: "+ui.values[0] +" high value: " +ui.values[1]);   
};


function tempoSliderChanged(event,ui){
   
    alert("Tempo value changed, low value: "+ui.values[0] +" high value: " +ui.values[1]);   
};

// Duration slider without range
function durationSlider3Changed(event,ui){

    alert("Duration value changed: "+ui.value);
}


/*
/       Setup up event listeners for 
/       the buttons of each scenario
*/
$(document).ready(function(){
    // Activate listners for scenario 1
    scenario1Listeners();
    // Activate listeners for scenario 2
    scenario2Listeners();
    // Activate listeners for scenario 3
    scenario3Listeners();
    // Activate listeners for "Manage Playlists"
    manageListeners();
});



/*
/       Scenario 1 Event Listeners
*/
function scenario1Listeners(){

    // If div is empty, hide: Play widget, Add button, Create button
    // TODO
    
     // Firing off a search from input
    $( "#buttonu199" ).click(function() {
        artist = $('#bobInput').val()
        duration = currentDuration1
        createPlaylistArtist(artist, duration)
    });
    
    // Changing the Play widget when clicking on song
    $('#u166').on("click", "li", function() {
        console.log($(this).data("ref"))
        $('#u185').html('<iframe src="https://embed.spotify.com/?uri=' + $(this).data("ref") + '" width="250" height="380" frameborder="0" allowtransparency="true"></iframe>')
    });

    // Removing song from playlist when clicking on remove
    $('#u166').on("click", "span", function() {
        idx = $(this).parent().data("idx")
        playlist.splice(idx, 1)
        $(this).parent().parent().hide()
    });

    // Filling in first dropdown based on globalPL
    $('#buttonu212').on("click", function() {
        $('#u322').find("#scenario1PlaylistSelector").html("")
        for (pl in globalPL) {
            $('#u322').find("#scenario1PlaylistSelector").append("<option value=" + pl + ">" + pl + "</option>")
        }
    });

    // NOT WORKING DON'T KNOW WHY
    $('#buttonu228').on("click", function() {
        alert('ok')
        $('#newPlayListInput1').val('');
    });
    
    // For saving song selection to an existing playlist
    $( "#s1ExistingSaveButton" ).click(function() {
        name = $('#u322').find("#scenario1PlaylistSelector").val()
        globalPL[name].push.apply(globalPL[name], playlist)
        alert( "Playlist added successfully!" );
    });
    
    // For saving a new playlist to the local storage location of playlists
    $( "#s1NewPlaylistButton" ).click(function() {
        name = $('#newPlayListInput1').val()
        if (name in globalPL || name == '') {
            alert('You must enter a (non-existing) name for your playlist')
        } else {
            globalPL[name] = playlist
            alert('Playlist added successfully!')
        }
    });
    
};// END SCENARIO 1 LISTENERS



/*
/       Scenario 2 Event Listeners
*/
function scenario2Listeners(){
    
     // Firing off a search from input
    $( "#buttonu359" ).click(function() {
        artist = $('#artistInput').val()
        song = $('#songInput').val()
        duration = currentDuration2
        createPlaylistSongs(song, artist, duration)
    });

    // Changing the Play widget when clicking on song
    $('#u250').on("click", "li", function() {
        console.log($(this).data("ref"))
        $('#u256').html('<iframe src="https://embed.spotify.com/?uri=' + $(this).data("ref") + '" width="250" height="380" frameborder="0" allowtransparency="true"></iframe>')
    });

    // Removing song from playlist when clicking on remove
    $('#u250').on("click", "span", function() {
        idx = $(this).parent().data("idx")
        playlist.splice(idx, 1)
        $(this).parent().parent().hide()
    });

    // Filling in first dropdown based on globalPL
    $('#buttonu497').on("click", function() {
        $('#u514').find("#scenario2PlaylistSelector").html("")
        for (pl in globalPL) {
            $('#u514').find("#scenario2PlaylistSelector").append("<option value=" + pl + ">" + pl + "</option>")
        }
    });
   
    // For saving song selection to an existing playlist
    $( "#s2ExistingSaveButton" ).click(function() {
        name = $('#u514').find("#scenario2PlaylistSelector").val()
        globalPL[name].push.apply(globalPL[name], playlist)
        alert( "Playlist added successfully!" );
    });
    
    // For saving a new playlist to the local storage location of playlists
    $( "#s2NewPlaylistButton" ).click(function() {
        name = $('#newPlayListInput1').val()
        if (name in globalPL || name == '') {
            alert('You must enter a (non-existing) name for your playlist')
        } else {
            globalPL[name] = playlist
            alert('Playlist added successfully!')
        }        
    });
    
};// END SCENARIO 2 LISTENERS



/*
/       Scenario 3 Event Listeners
*/
function scenario3Listeners(){

};// END SCENARIO 3 LISTENERS



/*
/       "Manage Playlists" Event Listeners
*/
function manageListeners(){

    // Filling in second dropdown based on globalPL
    $('#u393').on("click", function() {
        $('#u408').find('#scenario1PlaylistSelector').html("")
        for (pl in globalPL) {
            $('#u408').find("#scenario1PlaylistSelector").append("<option value=" + pl + ">" + pl + "</option>")
        }
        // Display playlist songs on the right
        playlist = globalPL[$('#u408').find("#scenario1PlaylistSelector").val()]
        $('#managePlaylistDiv').html("")
        $('#managePlaylistDiv').append("<ul>");
        for (i=0; i<playlist.length; i++) {
            $('#managePlaylistDiv').append("<div class='myresult'><li data-idx=" + i + " data-ref='" + playlist[i]['spotify'] + "'>" + playlist[i]['title'] + ", " + playlist[i]['artist'] + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li></div>")
        }
        $('#managePlaylistDiv').append("</ul>");
    })

    // Display playlist songs on change
    $('#u408').on("change", "#scenario1PlaylistSelector", function() {
        playlist = globalPL[$('#u408').find("#scenario1PlaylistSelector").val()]
        $('#managePlaylistDiv').html("")
        $('#managePlaylistDiv').append("<ul>");
        for (i=0; i<playlist.length; i++) {
            $('#managePlaylistDiv').append("<div class='myresult'><li data-idx=" + i + " data-ref='" + playlist[i]['spotify'] + "'>" + playlist[i]['title'] + ", " + playlist[i]['artist'] + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li></div>")
        }
        $('#managePlaylistDiv').append("</ul>");
    })

    // Removing song from playlist when clicking on remove
    $('#managePlaylistDiv').on("click", "span", function() {
        idx = $(this).parent().data("idx")
        playlist.splice(idx, 1)
        $(this).parent().parent().hide()
    });

};// END MANAGE PLAYLIST LISTENERS
