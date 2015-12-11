// JS FILE FOR JQUERY UI OBJECTS
// Dan Burkhardt
// Team Spotifier

/*
/       JQUERY Slider Actions 
*/
function durationSlider1Changed(event, ui){
    
    //alert("Value changed to:"+ui.value);
    
    // Add fuction for refreshing the table with results that match the duration
    
    // Replace the button text with the updated duration
    $('#u215-4').replaceWith('<div class=\"clearfix grpelem\" id=\"u215-4\"><!-- content --><p>add '+ui.value+' mins of songs to playlist</p></div>');
    
};

