var video = document.getElementById('video');
video.volume=0;
var intervalRewind;
var intervalSet=false;
var isPlaying=false;
var gMouseXPos=0;
var gMouseYPos=0;
var normalPlayOnNoMovement=null;
var normalPlay=function(){
    video.playbackRate = 1.0;
    clearInterval(intervalRewind);
	intervalSet=false;
};
$(video).on('play',normalPlay);

var normalPause=function(){
    video.playbackRate = 1.0;
    clearInterval(intervalRewind);
	intervalSet=false;
};
$(video).on('pause',normalPause);

var fastForward=function() { // button function for 4x fast speed forward
    video.playbackRate = 4.0;
};
//$("#speed").click(fastForward);

var reverseHelperFunc=function(){
       video.playbackRate = 1.0;
       if(video.currentTime == 0){
           clearInterval(intervalRewind);
		   intervalSet=false;
           video.pause();
       }
       else{
           video.currentTime += -.2;
       }
 };
var reverseMainfunction=function() { // button function for rewind
   intervalRewind = setInterval(reverseHelperFunc,60);
   intervalSet=true;
};



//$("#negative").click(reverseMainfunction);

$( "video" ).mousemove(function( event ) {
	clearTimeout(normalPlayOnNoMovement);


  var videoWidth=$( "video").width();
  var videoHeight=$( "video").height();
  var videoPosition=$( "video").offset();
  var videoPositionLeft=videoPosition.left;
  var videoPositionTop=videoPosition.top;
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  


  var  mouseXPos=event.pageX-videoPositionLeft;
  var mouseYPos=event.pageY-videoPositionTop;
  //var mouseLocWidthRatio=mouseXPos/videoWidth;
 // var mouseLocHeightRatio=mouseYPos/videoHeight;
    $( "span:first" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
  $( "span:last" ).text( "( event.clientX, event.clientY ) : " + video.paused );
  $("p:first").html("width :"+videoWidth+" Height :+"+videoHeight+" Left: "+videoPosition.left);
  if(mouseXPos-gMouseXPos>0/*&&mouseLocHeightRatio<.9*/)
  {	  if(video.currentTime==0)
	  {
		video.play();
		}
		normalPlay();
	  fastForward();
  }
  else if(mouseXPos-gMouseXPos<0/*&&mouseLocHeightRatio<.9*/)
	{
		
		//if(!video.currentTime==0)
		if(!intervalSet&&!video.currentTime==0)	
		{
			reverseMainfunction();
			//normalPlay();
		
		}
		//else
		//{clearInterval(intervalRewind);
		//	video.play();
		//}
			
	}
	else
	normalPlay();
  
    normalPlayOnNoMovement = setTimeout(function() {
		if(intervalSet||video.playbackRate!=1)
			normalPlay();
		
    }, 500);

  gMouseXPos=mouseXPos;
  gMouseYPos=mouseYPos;
  
});

var hooked = $( "video" ).hover( hoverVideo, hideVideo );

function hoverVideo(e) 
{ 
	video.play();
	normalPlay(); 
}
function hideVideo(e) 
{ video.pause(); 
}