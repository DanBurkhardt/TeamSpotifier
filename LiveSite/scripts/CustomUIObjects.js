// JS FILE FOR JQUERY UI OBJECTS
// Dan Burkhardt
// Team Spotifier


// current duration for scenario 1
var currentDuration1 = "15";

// current duration for scenario 2
var currentDuration2 = "15";

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

function durationRangeSliderChanged(event,ui){

    alert("Duration value changed, low value: "+ui.values[0] +" high value: " +ui.values[1]);
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
});



/*
/       Scenario 1 Event Listeners
*/
function scenario1Listeners(){
    
     // Firing off a search from input
    $( "#buttonu199" ).click(function() {
        alert( "search button clicked" );
        
            // TODO: Code here for triggering the save action to the playlist
    });
    
    
    // For saving song selection to an existing playlist
    $( "#s1ExistingSaveButton" ).click(function() {
        alert( "Save button clicked" );
        
            // TODO: Code here for triggering the save action to the playlist
    });
    
    // For saving a new playlist to the local storage location of playlists
    $( "#s1NewPlaylistButton" ).click(function() {
        alert( "New playlist save button clicked" );
        
            // TODO: Code here for triggering the save action to the playlist
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

