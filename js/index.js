


var mouseMovement;
var videoObj=function(videoElem)
{
	
	
	this.videoElem=videoElem;
	this.volume=0;
	this.intervalRewind;
	this.intervalSet=false;
	this.isPlaying=false;
	this.gMouseXPos=0;
	this.gMouseYPos=0;
	this.normalPlayOnNoMovement=null;
	$(this.videoElem).on('play',normalPlay);
	$(this.videoElem).on('pause',normalPause);
	
	this.hoverVideo=function () 
	{ 
	this.videoElem.play();
	normalPlay(this); 
	};
	
	this.hideVideo=function() 
	{ this.videoElem.pause(); 
	};
	
	this.hooked = $(this.videoElem).hover( this.hoverVideo, this.hideVideo );
	//$( this.videoElem ).mousemove(mouseMovement(event,this));
	alert(this.hooked);


	
};


hidVid=


mouseMovement=function( event,videoObject ) {
	clearTimeout(videoObject.normalPlayOnNoMovement);


  var videoWidth=$(videoObject.videoElem).width();
  var videoHeight=$(videoObject.videoElem).height();
  var videoPosition=$(videoObject.videoElem).offset();
  var videoPositionLeft=videoPosition.left;
  var videoPositionTop=videoPosition.top;
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  


  var  mouseXPos=event.pageX-videoPositionLeft;
  var mouseYPos=event.pageY-videoPositionTop;
 
    $( "span:first" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
  $( "span:last" ).text( "( event.clientX, event.clientY ) : " + video.paused );
  $("p:first").html("width :"+videoWidth+" Height :+"+videoHeight+" Left: "+videoPosition.left);
  if(mouseXPos-videoObject.gMouseXPos>0)
  {	  if(videoObject.videoElem.currentTime==0)
	  {
		videoObject.videoElem.play();
		}
		normalPlay(videoObject);
	  fastForward(videoObject);
  }
  else if(mouseXPos-videoObject.gMouseXPos<0)
	{
		
	
		if(!videoObject.intervalSet&&!videoObject.videoElem.currentTime==0)	
		{
			reverseMainfunction(videoObject);
			
		
		}
		
			
	}
	else
	normalPlay(videoObject);
  
    videoObject.normalPlayOnNoMovement = setTimeout(function() {
		if(intervalSet||video.playbackRate!=1)
			normalPlay(videoObject);
		
    }, 500);

  videoObject.gMouseXPos=mouseXPos;
  videoObject.gMouseYPos=mouseYPos;
  
};

function normalPlay(videoObject){
    videoObject.videoElem.playbackRate = 1.0;
    clearInterval(videoObject.intervalRewind);
	videoObject.intervalSet=false;
};


function normalPause(videoObject){
    videoObject.videoElem.playbackRate = 1.0;
    clearInterval(videoObject.intervalRewind);
	videoObject.intervalSet=false;
};


var fastForward=function(videoObject) { // button function for 4x fast speed forward
    videoObject.videoElem.playbackRate = 4.0;
};


var reverseHelperFunc=function(videoObject){
       videoObject.videoElem.playbackRate = 1.0;
       if(videoObject.videoElem.currentTime == 0){
           clearInterval(videoObject.intervalRewind);
		   videoObject.intervalSet=false;
           videoObject.videoElem.pause();
       }
       else{
           videoObject.videoElement.currentTime += -.2;
       }
};


var reverseMainfunction=function(videoObject) { // button function for rewind
   videoObject.intervalRewind = setInterval(reverseHelperFunc(videoObject),60);
   videoObject.intervalSet=true;
};



var videoObject=videoObj(document.getElementById('video'));
var  videoObject1=videoObj(document.getElementById('video1'));





