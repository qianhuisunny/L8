// JavaScript Document
//Storyline Code//
var player = window.parent.GetPlayer();	
var revisit = false;
revisit = player.GetVar("attempt73");
/////////////////

var bucketC1=0;
var countB1=0;
var dropArrayX1= new Array();
var dropArrayY1= new Array();
var dropObject1= new Array();
var bucketC2=0;
var countB2=0;
var dropArrayX2= new Array();
var dropArrayY2= new Array();
var dropObject2= new Array();
var bucketC3=0;
var countB3=0;
var dropArrayX3= new Array();
var dropArrayY3= new Array();
var dropObject3= new Array();
var bucketC4=0;
var countB4=0;
var dropArrayX4= new Array();
var dropArrayY4= new Array();
var dropObject4= new Array();
var bucketC5=0;
var countB5=0;
var dropArrayX5= new Array();
var dropArrayY5= new Array();
var dropObject5= new Array();
var xT;
var yT;
var percentageA=0;
var percentageB=0;
var percentageC=0;
var percentageD=0;
var percentageE=0;
var objectT;
var elementT;
var positionT;
var jqueryFunctionA;
var jqueryFunctionB;
var jqueryFunctionC;
var jqueryFunctionD;
var jqueryFunctionE;
var droppedIn=false;
var elem_id;
var bucketDropCount1=0;
var bucketDropCount2=0;
var bucketDropCount3=0;
var bucketDropCount4=0;
var bucketDropCount5=0;
var x1,x2,x3,x4,x5,x6,x7,x8;
var y1,y2,y3,y4,y5,y6,y7,y8;
var element1,element2,element3,element4,element5,element6,element7,element8;
var position1,position2,position3,position4,position5,position6,position7,position8;
var resetInitial;

var answerArray1 = new Array("6","7","8","12","13");
var answerArray2 = new Array("6","7","8");
var answerArray3 = new Array("1","2","5","9","10","11");
var answerArray4 = new Array("6","7","8","12","13");
var answerArray5 = new Array("1","2","3","4","9","10");
var attempt=0;

var reachedClickLevel=false;
var dropClicked1=false;
var dropClicked2=false;
var dropClicked3=false;
var dropClicked4=false;
var dropClicked5=false;

var notCompletedTask=false;
var completedSlide=false;
var interactiveCompleted=false;
//var player=GetPlayer();
//var usrScorePoints=player.GetVar("myName"); 

////////////////////////////////////SCORM STORYLINE UPLOAD///////////////////////
//var player = window.parent.GetPlayer();	
/////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {	
$("#submitB").css("background-color", "#C7C7C7"); 
$("#resetB").css("background-color", "#C7C7C7"); 
$("#submitB").attr('disabled','disabled');
$("#submitB").css( 'cursor', 'default' );
$("#resetB").attr('disabled','disabled');
$("#resetB").css( 'cursor', 'default' );
$("#tryAgainID").css( 'visibility','hidden');
$("#CorrectID").css( 'visibility','hidden');
$("#inCorrectID").css("visibility", "hidden");
$("#timeUpID").css("visibility", "hidden");
$("#completedID").css("visibility", "hidden");
$("#LogoRotator").css("visibility","hidden");
$("#dummyLoader").css("visibility","visible");
$("#ExitFile").css("visibility", "hidden");
$("#closeBtn").css( 'cursor', 'pointer' );
$("#instructionFirst").css("visibility", "hidden");
$("#instructionLast").css("visibility", "hidden");
$('#resetB').css('pointer-events','none');
$('#submitB').css('pointer-events','none');


for(var i=1;i<=13;++i)
{
  $("#object"+i).css( 'cursor', 'pointer' );
}

for(var i=1;i<=5;++i)
{
	for(var j=0;j<=9;++j)
    {
	  $("#sT"+i+j).css("visibility", "hidden");
	  $("#HsT"+i+j).css("visibility", "hidden");
	  $("#cwA"+j).css("visibility", "hidden");
	  $("#cwB"+j).css("visibility", "hidden");
	  $("#cwC"+j).css("visibility", "hidden");
	  $("#cwD"+j).css("visibility", "hidden");
	  $("#cwE"+j).css("visibility", "hidden");
	  
	}
	
	$("#showAns"+i).css("visibility", "hidden");
	$("#drop_zone"+i).css("cursor","default");
}

//$("#inits").css("background-color","#999");

$("#letsGo").hover(function() {
   $(this).css("background-color","#000"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");

})

$("#letsGo").mouseout(function() {
  $(this).css("background-color", "#FFF");
  $(this).css("color","#000");
   
})

$("#letsGo").click(function(){
	$("#introPop").css("visibility","hidden");
	//$("#inits").css("background-color","#FFF");
	$("#LogoRotator").css("visibility","visible");
    $("#dummyLoader").css("visibility","hidden");
	$("#instructionFirst").css("visibility", "visible");

	timerStart();
})


$("#continueID").hover(function() {
   $(this).css("background-color","#000"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");
})

$("#continueID").mouseout(function() {
  $(this).css("background-color", "#FFF");
  $(this).css("color","#000"); 
})

$("#continueID").click(function(){
	$("#tryAgainID").css("visibility","hidden");
	if(attempt==1)
	{
		resetInitial();
	}
	
})

$("#continueCID").hover(function() {
   $(this).css("background-color","#000"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");
})

$("#continueCID").mouseout(function() {
  $(this).css("background-color", "#FFF");
  $(this).css("color","#000"); 
})

$("#continueCID").click(function(){
	$("#CorrectID").css("visibility","hidden");
	$("#completedID").css("visibility", "visible");
	end();
})


$("#continueICID").hover(function() {
   $(this).css("background-color","#000"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");
})

$("#continueICID").mouseout(function() {
  $(this).css("background-color", "#FFF");
  $(this).css("color","#000"); 
})

$("#continueICID").click(function(){
	$("#inCorrectID").css("visibility","hidden");
	
})





/*

$("#submitB").hover(function() {
   $(this).css("background-color", "#FFE600"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#000");
})
$("#submitB").mouseout(function() {
  $(this).css("background-color", "#424242");
  $(this).css("color","#FFF");
})*/
$("#submitB").click(function(){
	$(this).css("color","#FFF");
	calculate();
	
})

/*
$("#resetB").hover(function() {
   $(this).css("background-color", "#FFE600"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#000");
})
$("#resetB").mouseout(function() {
  $(this).css("background-color", "#424242");
  $(this).css("color","#FFF");
})*/
$("#resetB").click(function(){
	$(this).css("color","#FFF");
	resetInitial();
})


$("#closeBtn").click(function() {
  
   if(notCompletedTask==false)
   {
	   notCompletedTask=true;
	   $("#LogoRotator").css("visibility","hidden");
	   $("#dummyLoader").css("visibility","visible");
   }
   
    revisit = player.GetVar("attempt73");
	if(revisit)
	{
		player.SetVar("exit73","true");
	}
	else
	{
		$("#ExitFile").css("visibility", "visible");
		notCompletedTask=true;
		$("#LogoRotator").css("visibility","hidden");
		$("#dummyLoader").css("visibility","visible");
	}
})

$("#YesExit").click(function(){

	player.SetVar("Task73","true");
	player.SetVar("exit73","true");
	
})

$("#YesExit").hover(function() {
   $(this).css("background-color","#000"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");

})

$("#YesExit").mouseout(function() {
  $(this).css("background-color", "#FFF");
  $(this).css("color","#000");
   
})




$("#NoExit").hover(function() {
	
   $(this).css("background-color","#000"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");

})

$("#NoExit").mouseout(function() {
  $(this).css("background-color", "#FFF");
  $(this).css("color","#000");
   
})


$("#NoExit").click(function(){
	
	$("#ExitFile").css("visibility", "hidden");
	if(interactiveCompleted==false)
	{
		notCompletedTask=false;
		$("#LogoRotator").css("visibility","visible");
		$("#dummyLoader").css("visibility","hidden");
	}
})


$("#drop_zone1").click(function(){
	if(reachedClickLevel==true)
	{
		 $("#showAns1").css("visibility", "visible");
		 dropClicked1=true;
		 finalResult();
	}
})
$("#drop_zone2").click(function(){
	if(reachedClickLevel==true)
	{
		 $("#showAns2").css("visibility", "visible");
		 dropClicked2=true;
		 finalResult();
	}
})
$("#drop_zone3").click(function(){
	if(reachedClickLevel==true)
	{
		 $("#showAns3").css("visibility", "visible");
		 dropClicked3=true;
		 finalResult();
	}
})
$("#drop_zone4").click(function(){
	if(reachedClickLevel==true)
	{
		 $("#showAns4").css("visibility", "visible");
		 dropClicked4=true;
		 finalResult();
	}
})
$("#drop_zone5").click(function(){
	if(reachedClickLevel==true)
	{
		 $("#showAns5").css("visibility", "visible");
		 dropClicked5=true;
		 finalResult();
	}
})



resetInitial = function()
{
	bucketDropCount1=0;
	bucketDropCount2=0;
	bucketDropCount3=0;
	bucketDropCount4=0;
	bucketDropCount5=0;

	  for(var i=1;i<=5;++i)
	   {
		for(var j=0;j<=9;++j)
		{
		   $("#sT"+i+j).css("visibility", "hidden"); 
		   $("#HsT"+i+j).css("visibility", "hidden"); 
		}
	   }
	   
	   for(var i=0;i<=16;++i)
	     {
			$("#object"+i).show();
		 } 
		 
	     $("#submitB").css("background-color", "#C7C7C7"); 
		 $("#resetB").css("background-color", "#C7C7C7"); 
		 $("#resetB").attr('disabled','disabled');
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $("#resetB").css( 'cursor', 'default' );
		 $('#resetB').css('pointer-events','none');
         $('#submitB').css('pointer-events','none');
		 
	    percentageA=0;
		percentageB=0;
        percentageC=0;
        percentageD=0;
        percentageE=0;
		
		bucketDropCount1=0;
		bucketDropCount2=0;
		bucketDropCount3=0;
		bucketDropCount4=0;
		bucketDropCount5=0;
		
		dropArrayX1= [];
		dropArrayY1= [];
		dropArrayX2= [];
		dropArrayY2= [];
		dropArrayX3= [];
		dropArrayY3= [];
		dropArrayX4= [];
		dropArrayY4= [];
		dropArrayX5= [];
		dropArrayY5= [];
		dropObject1= [];
		dropObject2= [];
		dropObject3= [];
		dropObject4= [];
		dropObject5= [];
		
		bucketC1=0;
        countB1=0;
		bucketC2=0;
        countB2=0;
		bucketC3=0;
        countB3=0;
		bucketC4=0;
        countB4=0;
		bucketC5=0;
        countB5=0;
}


jqueryFunctionA = function()
	{
		
		 $("#submitB").css("background-color", "#424242"); 
		 $("#resetB").css("background-color", "#424242"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $("#sT1"+bucketDropCount1).css("visibility", "visible");
		 $("#HsT1"+((bucketDropCount1)-1)).css("visibility", "visible");
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#sT1"+bucketDropCount1).html("1");
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#sT1"+bucketDropCount1).html("2");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#sT1"+bucketDropCount1).html("3");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#sT1"+bucketDropCount1).html("4");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  $("#sT1"+bucketDropCount1).html("5");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x6)&&(yT == y6))
		{
		  $("#sT1"+bucketDropCount1).html("6");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x7)&&(yT == y7))
		{
		  $("#sT1"+bucketDropCount1).html("7");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x8)&&(yT == y8))
		{
		  $("#sT1"+bucketDropCount1).html("8");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		
	}
	

jqueryFunctionB = function()
	{
		
		 $("#submitB").css("background-color", "#424242"); 
		 $("#resetB").css("background-color", "#424242"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $("#sT2"+bucketDropCount2).css("visibility", "visible");
		 $("#HsT2"+((bucketDropCount2)-1)).css("visibility", "visible");
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#sT2"+bucketDropCount2).html("1");
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#sT2"+bucketDropCount2).html("2");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#sT2"+bucketDropCount2).html("3");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#sT2"+bucketDropCount2).html("4");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  $("#sT2"+bucketDropCount2).html("5");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x6)&&(yT == y6))
		{
		  $("#sT2"+bucketDropCount2).html("6");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x7)&&(yT == y7))
		{
		  $("#sT2"+bucketDropCount2).html("7");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x8)&&(yT == y8))
		{
		  $("#sT2"+bucketDropCount2).html("8");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		
	}
	
jqueryFunctionC = function()
	{
		
		 $("#submitB").css("background-color", "#424242"); 
		 $("#resetB").css("background-color", "#424242"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $("#sT3"+bucketDropCount3).css("visibility", "visible");
		 $("#HsT3"+((bucketDropCount3)-1)).css("visibility", "visible");
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#sT3"+bucketDropCount3).html("1");
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#sT3"+bucketDropCount3).html("2");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#sT3"+bucketDropCount3).html("3");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#sT3"+bucketDropCount3).html("4");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  $("#sT3"+bucketDropCount3).html("5");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x6)&&(yT == y6))
		{
		  $("#sT3"+bucketDropCount3).html("6");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x7)&&(yT == y7))
		{
		  $("#sT3"+bucketDropCount3).html("7");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x8)&&(yT == y8))
		{
		  $("#sT3"+bucketDropCount3).html("8");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		
	}
	
jqueryFunctionD = function()
	{
		
		 $("#submitB").css("background-color", "#424242"); 
		 $("#resetB").css("background-color", "#424242"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $("#sT4"+bucketDropCount4).css("visibility", "visible");
		 $("#HsT4"+((bucketDropCount4)-1)).css("visibility", "visible");
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#sT4"+bucketDropCount4).html("1");
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#sT4"+bucketDropCount4).html("2");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#sT4"+bucketDropCount4).html("3");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#sT4"+bucketDropCount4).html("4");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  $("#sT4"+bucketDropCount4).html("5");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x6)&&(yT == y6))
		{
		  $("#sT4"+bucketDropCount4).html("6");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x7)&&(yT == y7))
		{
		  $("#sT4"+bucketDropCount4).html("7");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x8)&&(yT == y8))
		{
		  $("#sT4"+bucketDropCount4).html("8");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		
	}
	
jqueryFunctionE = function()
	{
		
		 $("#submitB").css("background-color", "#424242"); 
		 $("#resetB").css("background-color", "#424242"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $("#sT5"+bucketDropCount5).css("visibility", "visible");
		 $("#HsT5"+((bucketDropCount5)-1)).css("visibility", "visible");
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#sT5"+bucketDropCount5).html("1");
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#sT5"+bucketDropCount5).html("2");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#sT5"+bucketDropCount5).html("3");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#sT5"+bucketDropCount5).html("4");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  $("#sT5"+bucketDropCount5).html("5");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x6)&&(yT == y6))
		{
		  $("#sT5"+bucketDropCount5).html("6");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x7)&&(yT == y7))
		{
		  $("#sT5"+bucketDropCount5).html("7");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x8)&&(yT == y8))
		{
		  $("#sT5"+bucketDropCount5).html("8");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		
	}
	


});


function _(id){
	    return document.getElementById(id);
}

function drag_start(event){
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	objectT=event.dataTransfer.getData("text");
	elementT = document.getElementById(objectT);
	positionT = elementT.getBoundingClientRect();
	xT = positionT.left;
	yT = positionT.top;
	
	element1 = document.getElementById('waterMark1');
	position1 = element1.getBoundingClientRect();
	x1 = position1.left;
    y1 = position1.top;
	
	element2 = document.getElementById('waterMark2');
	position2 = element2.getBoundingClientRect();
	x2 = position2.left;
    y2 = position2.top;
	
	element3 = document.getElementById('waterMark3');
	position3 = element3.getBoundingClientRect();
	x3 = position3.left;
    y3 = position3.top;
	
	element4 = document.getElementById('waterMark4');
	position4 = element4.getBoundingClientRect();
	x4 = position4.left;
    y4 = position4.top;
	
	element5 = document.getElementById('waterMark5');
	position5 = element5.getBoundingClientRect();
	x5 = position5.left;
    y5 = position5.top;
	
	element6 = document.getElementById('waterMark6');
	position6 = element6.getBoundingClientRect();
	x6 = position6.left;
    y6 = position6.top;
	
	element7 = document.getElementById('waterMark7');
	position7 = element7.getBoundingClientRect();
	x7 = position7.left;
    y7 = position7.top;
	
	element8 = document.getElementById('waterMark8');
	position8 = element8.getBoundingClientRect();
	x8 = position8.left;
    y8 = position8.top;
    
}

function drag_enter(event){
	//_('app_status').innerHTML = "You are dragging over the  "+ event.target.getAttribute('id');
}
	
function drag_leave(event){
	//_('app_status').innerHTML = "You left the"+ event.target.getAttribute('id');
}

function drag_end(event){
	droppedIn=false;
}

function drag_drop(event){
	event.preventDefault();
	console.log(event.target.getAttribute('id'));
	if(event.target.getAttribute('id') == "drop_zone1")
	{
	    bucketC1++;
		countB1=0;
		if(bucketC1>8)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX1.length-1;++i)
			{
               if((xT==dropArrayX1[i])&&(yT==dropArrayY1[i]))
				{
					countB1++;	
				}
			}
			if(countB1==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject1.push(draggedObject);
				bucketDropCount1++;
				percentageA=percentageA+3;
				jqueryFunctionA();	
			}
			else{
				bucketC1--;
			}
		}
	}
	else if(event.target.getAttribute('id') == "drop_zone2")
	{
	    bucketC2++;
		countB2=0;
		if(bucketC2>8)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX2.length-1;++i)
			{
               if((xT==dropArrayX2[i])&&(yT==dropArrayY2[i]))
				{
					countB2++;	
				}
			}
			if(countB2==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject2.push(draggedObject);
				bucketDropCount2++;
				percentageB=percentageB+3;
				jqueryFunctionB();	
			}
			else{
				bucketC2--;
			}
		}
	}
	else if(event.target.getAttribute('id') == "drop_zone3")
	{
	    bucketC3++;
		countB3=0;
		if(bucketC3>8)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX3.length-1;++i)
			{
               if((xT==dropArrayX3[i])&&(yT==dropArrayY3[i]))
				{
					countB3++;	
				}
			}
			if(countB3==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject3.push(draggedObject);
				bucketDropCount3++;
				percentageC=percentageC+3;
				jqueryFunctionC();	
			}
			else{
				bucketC3--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "drop_zone4")
	{
	    bucketC4++;
		countB4=0;
		if(bucketC4>8)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX4.length-1;++i)
			{
               if((xT==dropArrayX4[i])&&(yT==dropArrayY4[i]))
				{
					countB4++;	
				}
			}
			if(countB4==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject4.push(draggedObject);
				bucketDropCount4++;
				percentageD=percentageD+3;
				jqueryFunctionD();	
			}
			else{
				bucketC4--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "drop_zone5")
	{
	    bucketC5++;
		countB5=0;
		if(bucketC5>8)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX5.length-1;++i)
			{
               if((xT==dropArrayX5[i])&&(yT==dropArrayY5[i]))
				{
					countB5++;	
				}
			}
			if(countB5==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject5.push(draggedObject);
				bucketDropCount5++;
				percentageE=percentageE+3;
				jqueryFunctionE();	
			}
			else{
				bucketC5--;
			}
		}
	}
	
	_(elem_id).style.display = "none";
	//document.getElementById("boxTick1").visiblity="visible";
	//_(elem_id).removeEventListener("draggable");
	//_(elem_id).style.cursor="default";
	droppedIn=true;
	
}

function resetAll(){
    // blah
	resetInitial();
};

var finalCount=0;
var bowl1=0;
var bowl2=0;
var bowl3=0;
var bowl4=0;
var bowl5=0;
function calculate()
{
	
	finalCount=0;
	bowl1=0; bowl2=0; bowl3=0; bowl4=0; bowl5=0;
	//alert(answerArray1);
	 for (var i = 0; i < answerArray1.length; ++i)
	    {
			for (var j = 0; j < answerArray1.length; ++j)
			{
				if (dropObject1[j] == answerArray1[i])
				{
					
					bowl1++;
				}
			}
		}
		
	for (var i = 0; i < answerArray2.length; ++i)
	    {
			for (var j = 0; j < answerArray2.length; ++j)
			{
				if (dropObject2[j] == answerArray2[i])
				{
					bowl2++;
				}
			}
		}
		
	for (var i = 0; i < answerArray3.length; ++i)
	    {
			for (var j = 0; j < answerArray3.length; ++j)
			{
				if (dropObject3[j] == answerArray3[i])
				{
					bowl3++;
				}
			}
		}
		
	for (var i = 0; i < answerArray4.length; ++i)
	    {
			for (var j = 0; j < answerArray4.length; ++j)
			{
				if (dropObject4[j] == answerArray4[i])
				{
					bowl4++;
				}
			}
		}
		
	for (var i = 0; i < answerArray5.length; ++i)
	    {
			for (var j = 0; j < answerArray5.length; ++j)
			{
				if (dropObject5[j] == answerArray5[i])
				{
					bowl5++;
				}
			}
		}
		
	finalCount = bowl1 + bowl2 + bowl3 + bowl4 + bowl5;
	if (finalCount <= 11)
	{
		attempt++;
		if(attempt==1)
		{
		  $("#tryAgainID").css( 'visibility','visible');
		  
		}
		else
		{
		     $("#submitB").css("background-color", "#C7C7C7"); 
			 $("#resetB").css("background-color", "#C7C7C7"); 
			 $("#resetB").attr('disabled','disabled');
			 $("#submitB").attr('disabled','disabled');
			 $("#submitB").css( 'cursor', 'default' ); 
			 $("#resetB").css( 'cursor', 'default' );
			 $("#inCorrectID").css("visibility", "visible");
			 $('#resetB').css('pointer-events','none');
             $('#submitB').css('pointer-events','none');
			 
			   for(var i=1;i<=13;++i)
				{
				  $("#object"+i).css( 'cursor', 'default' );
				  $("#object"+i).attr('disabled','disabled');
				  $("#object"+i).css('pointer-events','none');
				  $("#drop_zone"+i).css("cursor","pointer");
				}
			  reachedClickLevel=true;
			  showCase();
				
				
		}
	}
	else
	{
		$("#CorrectID").css("visibility", "visible");
		$("#LogoRotator").css("visibility","hidden");
        $("#dummyLoader").css("visibility","visible");
		//$("#nextID").css("background-color", "#FFCC00");
	    showCase();
		notCompletedTask=true;
		player.SetVar("attempt73","true");
		saveName();
	}
}


function showCase()
{
	           for(var k=0;k<=7;++k)
				{
					if(dropObject1[k] != undefined)
					{
						if(dropObject1[k] == 6 || dropObject1[k] == 7 || dropObject1[k] == 8 || dropObject1[k] == 12 || dropObject1[k] == 13)
						{ $("#cwA"+(k+1)).css("visibility","visible");$("#cwA"+(k+1)).css("background-color","#349945");}
						else
						{ $("#cwA"+(k+1)).css("visibility","visible");$("#cwA"+(k+1)).css("background-color","#ED5245");}
			    	} 
				}
				
				for(var k=0;k<=7;++k)
				{
					if(dropObject2[k] != undefined)
					{
						if(dropObject2[k] == 6 || dropObject2[k] == 7 || dropObject2[k] == 8)
						{ $("#cwB"+(k+1)).css("visibility","visible");$("#cwB"+(k+1)).css("background-color","#349945");}
						else
						{ $("#cwB"+(k+1)).css("visibility","visible");$("#cwB"+(k+1)).css("background-color","#ED5245");}
			    	} 
				}
				
				for(var k=0;k<=7;++k)
				{
					if(dropObject3[k] != undefined)
					{
						if(dropObject3[k] == 1 || dropObject3[k] == 2 || dropObject3[k] == 5 || dropObject3[k] == 9 || dropObject3[k] == 10 || dropObject3[k] == 11)
						{ $("#cwC"+(k+1)).css("visibility","visible");$("#cwC"+(k+1)).css("background-color","#349945");}
						else
						{ $("#cwC"+(k+1)).css("visibility","visible");$("#cwC"+(k+1)).css("background-color","#ED5245");}
			    	} 
				}
				
				for(var k=0;k<=7;++k)
				{
					if(dropObject4[k] != undefined)
					{
						if(dropObject4[k] == 6 || dropObject4[k] == 7 || dropObject4[k] == 8 || dropObject4[k] == 12 || dropObject4[k] == 13)
						{ $("#cwD"+(k+1)).css("visibility","visible");$("#cwD"+(k+1)).css("background-color","#349945");}
						else
						{ $("#cwD"+(k+1)).css("visibility","visible");$("#cwD"+(k+1)).css("background-color","#ED5245");}
			    	} 
				}
				
				for(var k=0;k<=7;++k)
				{
					if(dropObject5[k] != undefined)
					{
						if(dropObject5[k] == 1 || dropObject5[k] == 2 || dropObject5[k] == 3 || dropObject5[k] == 4	 || dropObject5[k] == 9 || dropObject5[k] == 10)
						{ $("#cwE"+(k+1)).css("visibility","visible");$("#cwE"+(k+1)).css("background-color","#349945");}
						else
						{ $("#cwE"+(k+1)).css("visibility","visible");$("#cwE"+(k+1)).css("background-color","#ED5245");}
			    	} 
				}
}

function finalResult()
{
	if(dropClicked1 && dropClicked2 && dropClicked3 && dropClicked4 && dropClicked5 == true)
	{
		$("#instructionFirst").css("visibility", "hidden");
        $("#instructionLast").css("visibility", "visible");
		$("#completedID").css("visibility", "visible");
		$("#LogoRotator").css("visibility","hidden");
        $("#dummyLoader").css("visibility","visible");
		notCompletedTask=true;
		interactiveCompleted=true;
		player.SetVar("attempt73","true");
		//saveName();
	}
}

function saveName()
{
	//alert("GOD");
	//localName= document.getElementById('txt1').value;
	//completedSlide=true;
	//player.SetVar("attempt73","true");
	////////////////////////////////////SCORM STORYLINE UPLOAD///////////////////////
	//player.SetVar("pebbleCompleted",completedSlide);
	////////////////////////////////////////////////////////////////////////////////
	//player.SetVar("localName",caps);
}

//////////////////Timer////////////////////////////


function startTimer(duration, display) {
	
    var timer = duration, minutes, seconds;
    setInterval(function () {
		
		if(notCompletedTask==false)
		{
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < -1) {
			//alert("ok");
			
			timer=0;
			display.textContent = minutes + ":" + "00";
			$("#instructionFirst").css("visibility", "hidden");
            $("#instructionLast").css("visibility", "visible");
			$("#timeUpID").css("visibility", "visible");
			$("#LogoRotator").css("visibility","hidden");
            $("#dummyLoader").css("visibility","visible");
			player.SetVar("attempt73","true");
			end();
			
			
            //timer = duration;
        }}
    }, 1000);
}

function end()
{
	
	clearInterval(timer);
			
}

window.onload = function () {
    
   //startTimer(fiveMinutes, display);
	//document.getElementById('LogoRotator').style.animationPlayState = 'paused';
	//document.getElementById('LogoRotator').style.animationPlayState = 'paused';
	//document.getElementById('LogoRotator').style.animationPlayState = 'paused';
	 
};
	
function timerStart()
{
	var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
	

}