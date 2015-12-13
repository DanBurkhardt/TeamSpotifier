// JS FILE FOR JQUERY UI OBJECTS
// Dan Burkhardt
// Team Spotifier


// current duration for scenario 1
var currentDuration1 = "15";

// current duration for scenario 2
var currentDuration2 = "15";

// globalPL
var globalPL = {'empty': []}

/*
/       JQUERY Scenario 1
*/
function durationSlider1Changed(event, ui){
    
    //alert("Value changed to:"+ui.value);
    
    // Add fuction for refreshing the table with results that match the duration
    
    // Replace the button text with the updated duration
    $('#u215-4').replaceWith('<div class=\"clearfix grpelem\" id=\"u215-4\"><!-- content --><p>add '+ui.value+' mins of songs to existing playlist</p></div>');
    
    $('#u324-4').replaceWith('<div class=\"clearfix colelem\" id=\"u324-4\"><!-- content --><p>You selected '+ui.value+' mins of songs.</p></div>'); 
    
    // Assign new slider duration to global variable
    currentDuration1 = ui.value;
};



/*
/       JQUERY Scenario 2
*/
function durationSlider2Changed(event, ui){
    
    alert("S2 value changed to:"+ui.value);
    
    // Add fuction for refreshing the table with results that match the duration
    
    // Replace the button text with the updated duration
    //$('#u215-4').replaceWith('<div class=\"clearfix grpelem\" id=\"u215-4\"><!-- content --><p>add '+ui.value+' mins of songs to existing playlist</p></div>');
    
    //$('#u324-4').replaceWith('<div class=\"clearfix colelem\" id=\"u324-4\"><!-- content --><p>You selected '+ui.value+' mins of songs.</p></div>'); 
    
    
    // Assign the new duration to the global variable
    currentDuration2 = ui.value;
    
};



/*
/       Setup up event listeners for 
/       the buttons of each scenario
*/
$(document).ready(function(){
    // Activate listners for scenario 1
    scenario1Listeners();
    // Activate listeners for scenario 2
    scenario2Listeners();
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
        alert( "search button clicked" );
        
            // TODO: Code here for triggering the save action to the playlist
    });

    
};// END SCENARIO 2 LISTENERS

