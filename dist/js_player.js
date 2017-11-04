document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

function startplayer() 
{
 player = document.getElementById('video_player');
 player.controls = false;
}
function play_vid()
{
 player.play();
}
function pause_vid()
{
 player.pause();
}
function stop_vid() 
{
 player.pause();
 player.currentTime = 0;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}





// Get the <video> element with id="myVideo"
var vid = document.getElementById("myVideo");

// Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {myFunction()};

function myFunction() {
// Display the current position of the video in a <p> element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;
}





// AUDIO PLAYER


// Set max value when you know the duration
$audio.onloadedmetadata = () => $seekbar.max = $audio.duration
// update audio position
$seekbar.onchange = () => $audio.currentTime = $seekbar.value
// update range input when currentTime updates

<input type="range" step="any" id="$seekbar" value="0">
<audio controls id="$audio"
  src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"/>




  {/* I see , you are not able to get continuous values when you seek the range.
  To get values instantly in a seeking operation you would need to listen on input event , 
  this event fires everytime you move the range head.
  Perhaps you can use the same code you used for change just add it in on list */}

  $({range-selector}).on("change input", function () {
    var vid =   $({video-selector})[0]; // get your video
    vid.volume = $(this).val(); //update its volume
});