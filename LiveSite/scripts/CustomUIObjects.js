// JS FILE FOR JQUERY UI OBJECTS
// Dan Burkhardt
// Team Spotifier

var currentDuration1 = "15";

/*
/       JQUERY Slider Actions 
*/
function durationSlider1Changed(event, ui){
    
    //alert("Value changed to:"+ui.value);
    
    // Add fuction for refreshing the table with results that match the duration
    
    // Replace the button text with the updated duration
    $('#u215-4').replaceWith('<div class=\"clearfix grpelem\" id=\"u215-4\"><!-- content --><p>add '+ui.value+' mins of songs to existing playlist</p></div>'); 
    
    currentDuration1 = ui.value;
    
    
    
};


/*
/       JQUERY Dialog Configuration
*/
$(document).ready(function(){
   

});



/*
/       Scenario 1 - Button Actions
*/
function scenario1Listeners(){
    
    $( "#buttonu212" ).click(function() {
        alert( "Handler for button called." );
        
            // TODO: Code here for dialogue boxes confirming which list to add to
    });
    
    
    
};


function addToExisting1(){
    
    
    
}
