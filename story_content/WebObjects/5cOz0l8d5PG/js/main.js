//Storyline Code//
var player = window.parent.GetPlayer();	
var revisit = false;
revisit = player.GetVar("attempt61");
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
var bucketC6=0;
var countB6=0;
var dropArrayX6= new Array();
var dropArrayY6= new Array();
var dropObject6= new Array();
var xT;
var yT;
var percentageA=0;
var percentageB=0;
var percentageC=0;
var percentageD=0;
var percentageE=0;
var percentageF=0;
var objectT;
var elementT;
var positionT;
var jqueryFunctionA;
var jqueryFunctionB;
var jqueryFunctionC;
var jqueryFunctionD;
var jqueryFunctionE;
var jqueryFunctionF;
var droppedIn=false;
var elem_id;
var bucketDropCount1=0;
var bucketDropCount2=0;
var bucketDropCount3=0;
var bucketDropCount4=0;
var bucketDropCount5=0;
var bucketDropCount6=0;
var x1,x2,x3,x4,x5,x6,x7,x8;
var y1,y2,y3,y4,y5,y6,y7,y8;
var element1,element2,element3,element4,element5,element6,element7,element8;
var position1,position2,position3,position4,position5,position6,position7,position8;
var resetInitial;

var answerArray1 = new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17");
var answerArray2 = new Array("4","5","6","9","10","11","12","13","14");
var answerArray3 = new Array("7","8","9","10","11","12","13","14","15","16","17");
var answerArray4 = new Array("9","10","11","12","13","14","15","16","17" );
var answerArray5 = new Array("1","2","3","9","10","11","12","13","14");
var answerArray6 = new Array("1","2","3","4","5","6","9","10","11","12","13","14");
var correctAnswerCount = 17;

var attempt=0;
var notCompletedTask=false;
var interactiveCompleted=false;
var completedSlide=false;

var reachedClickLevel=false;
var dropClicked1=false;
var dropClicked2=false;
var dropClicked3=false;
var dropClicked4=false;
var dropClicked5=false;
var dropClicked6=false;






$(document).ready(function() {	
//$("#activityID").css("visibility","hidden");
$("#timeUpPop").css("visibility","hidden");
$("#popIncorrectDetail").css("visibility","hidden");
$("#popCorrectDetail").css("visibility","hidden");
$("#popIncorrectConfirm").css("visibility","hidden");
$("#popDetailCompleted").css("visibility","hidden");
$("#popExit").css("visibility", "hidden");
$("#LogoRotator").css("visibility","hidden");
$("#dummyLoader").css("visibility","visible");

$("#instructionFirst").css("visibility", "hidden");
$("#instructionLast").css("visibility", "hidden");

$("#submitB").css("visibility","visible");
$("#submitB").attr('disabled','disabled');
$("#submitB").css( 'cursor', 'default' );
	
$("#done-btn").css("visibility","hidden");
$("#done-btn").attr('disabled','disabled');	
$("#done-btn").css( 'cursor', 'default' );
$('#done-btn').css('pointer-events','none');
	
$("#resetB").css("visibility","visible");
$("#resetB").attr('disabled','disabled');
$("#resetB").css( 'cursor', 'default' );
$("#closeBtn").css('cursor','pointer');

$('#resetB').css('pointer-events','none');
$('#submitB').css('pointer-events','none');

//$("#LogoRotator").css("animation-play-state", "paused");


for(var i=1;i<=17;++i)
{
	 $("#object"+i).css("cursor","pointer");
	 $("#patch"+i).css("visibility","hidden"); 
}

$("#letsGo").click(function() {
   $("#popDetail").css("visibility","hidden");
   $("#activityID").css("visibility","visible");
  // $("#LogoRotator").css("animation-play-state", "running");
   $("#LogoRotator").css("visibility","visible");
   $("#dummyLoader").css("visibility","hidden");
   $("#instructionFirst").css("visibility", "visible");

   timerStart();
})

$("#continue").click(function() {
   $("#popIncorrectDetail").css("visibility","hidden");
})

$("#continueCorrect").click(function() {
   $("#popCorrectDetail").css("visibility","hidden");
	$("#done-btn").css("visibility","visible");
	
   //$("#popDetailCompleted").css("visibility","visible");
})

$("#continueCorrect,#done-btn").click(function() {
//   $("#popCorrectDetail").css("visibility","hidden");
   $("#popDetailCompleted").css("visibility","visible");
})

$("#continueWrong").click(function() {
   $("#popIncorrectConfirm").css("visibility","hidden");
})

/*
$("#resetB").hover(function() {
   $(this).css("background-color", "#424242"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");
})

$("#resetB").mouseout(function() {
  $(this).css("background-color", "#FFE600");
  $(this).css("color","#333");
})*/

$("#resetB").click(function(){
	$(this).css("color","#000");
	resetInitial();
})
/*
$("#submitB").hover(function() {
   $(this).css("background-color", "#424242"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");
})


$("#submitB").mouseout(function() {
  $(this).css("background-color", "#FFE600");
  $(this).css("color","#333");
})*/

$("#done-btn").click(function(){
	$(this).css("color","#000");
	calculate();
})

$("#submitB").click(function(){
	$(this).css("color","#000");
	calculate();
})

$("#closeBtn").click(function(){
	revisit = player.GetVar("attempt61");
	if(revisit)
	{
		player.SetVar("exit61","true");
	}
	else
	{
		$("#popExit").css("visibility", "visible");	
		notCompletedTask=true;
		$("#LogoRotator").css("visibility","hidden");
		$("#dummyLoader").css("visibility","visible");
	}
	    
})


$("#NoExit").click(function(){
	
	$("#popExit").css("visibility", "hidden");
	if(interactiveCompleted==false)
	{
		notCompletedTask=false;
		$("#LogoRotator").css("visibility","visible");
		$("#dummyLoader").css("visibility","hidden");
	}
})


$("#yesExit").click(function(){
	
	player.SetVar("Task61","true");
	player.SetVar("exit61","true");
	
	//player.SetVar("test_011","true");
	
})

////God is Great////

$("#drop1").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch1").css("visibility", "visible");
		 dropClicked1=true;
		 finalResult();
	}
})

$("#drop2").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch2").css("visibility", "visible");
		 dropClicked2=true;
		 finalResult();
	}
})

$("#drop3").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch3").css("visibility", "visible");
		 dropClicked3=true;
		 finalResult();
	}
})

$("#drop4").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch4").css("visibility", "visible");
		 dropClicked4=true;
		 finalResult();
	}
})

$("#drop5").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch5").css("visibility", "visible");
		 dropClicked5=true;
		 finalResult();
	}
})

$("#drop6").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch6").css("visibility", "visible");
		 dropClicked6=true;
		 finalResult();
	}
})

function finalResult()
{
	if(dropClicked1 && dropClicked2 && dropClicked3 && dropClicked4 && dropClicked5 && dropClicked6 == true)
	{
		notCompletedTask=true;
		interactiveCompleted=true;
		$("#instructionFirst").css("visibility", "hidden");
        $("#instructionLast").css("visibility", "visible");
		$("#done-btn").css("visibility","visible");
		//$("#popDetailCompleted").css("visibility","visible");
		$("#LogoRotator").css("visibility","hidden");
        $("#dummyLoader").css("visibility","visible");
		player.SetVar("attempt61","true");
		//saveName();
	}
}

function resetPopup()
{
	for(var i=1;i<=6;++i)
	{
		$("#patch"+i).css("visibility", "hidden");
	}
}


function calculate()
{
	     $("#submitB").css("background-color", "#808080"); 
		 $("#resetB").css("background-color", "#808080"); 
		 $("#resetB").attr('disabled','disabled');
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $("#resetB").css( 'cursor', 'default' );
	
		 $("#done-btn").css("background-color", "#808080"); 
		 $("#done-btn").attr('disabled','disabled');
		 $("#done-btn").css( 'cursor', 'default' );
	
	finalCount=0;
	bowl1=0; bowl2=0; bowl3=0; bowl4=0; bowl5=0; bowl6=0;
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
		
	for (var i = 0; i < answerArray6.length; ++i)
	    {
			for (var j = 0; j < answerArray6.length; ++j)
			{
				if (dropObject6[j] == answerArray6[i])
				{
					bowl6++;
				}
			}
		}
		
	finalCount = bowl1 + bowl2 + bowl3 + bowl4 + bowl5 + bowl6;
	if (finalCount < correctAnswerCount)
	{
		attempt++;
		//alert(finalCount);
		if(attempt==1)
		{
		  $("#popIncorrectDetail").css("visibility","visible");
		  resetInitial();
		}
		else
		{
			 $("#done-btn").css( 'cursor', 'default' );
			 $("#done-btn").attr('enabled','enabled');
			$("#done-btn").removeAttr('disabled');
			 $("#done-btn").css("background-color", "#C7C7C7"); 
			 $("#done-btn").css("color", "#000");
			
		     $("#submitB").css("background-color", "#C7C7C7"); 
			 $("#resetB").css("background-color", "#C7C7C7"); 
			 $("#resetB").css("color", "#000"); 
			 $("#submitB").css("color", "#000"); 
			 $("#resetB").attr('disabled','disabled');
			 $("#submitB").attr('disabled','disabled');
			 $("#submitB").css( 'cursor', 'default' ); 
			 $("#resetB").css( 'cursor', 'default' );
			 $("#popIncorrectConfirm").css("visibility", "visible");
			 $('#resetB').css('pointer-events','none');
             $('#submitB').css('pointer-events','none');
			 
			   for(var i=1;i<=17;++i)
				{
				  $("#object"+i).css( 'cursor', 'default' );
				  $("#object"+i).attr('disabled','disabled');	
				  $("#object"+i).css('pointer-events','none');	
				  $("#drop"+i).css("cursor","pointer");
				}
			
				$('#submitB').css('pointer-events','none');
                $('#resetB').css('pointer-events','none');
                $('#done-btn').css('pointer-events','initial');
			
			   reachedClickLevel=true;
		}
	}
	else
	{
		$("#popCorrectDetail").css("visibility", "visible");
	    notCompletedTask=true;
		interactiveCompleted=true;
		$("#LogoRotator").css("visibility","hidden");
        $("#dummyLoader").css("visibility","visible");
		player.SetVar("attempt61","true");
		//saveName();
	}
}


resetInitial = function()
{
	bucketDropCount1=0;
	bucketDropCount2=0;
	bucketDropCount3=0;
	bucketDropCount4=0;
	bucketDropCount5=0;
	bucketDropCount6=0;

    lastfun();
	
	$("#done-btn").css( 'cursor', 'default' );
    $("#done-btn").css("background-color", "#808080"); 
	$("#done-btn").attr('disabled','disabled');
    $('#done-btn').css('pointer-events','none');
	$("#done-btn").css("color","#333");
		 
	$("#submitB").css("background-color", "#808080"); 
    $("#resetB").css("background-color", "#808080"); 
	$("#resetB").attr('disabled','disabled');
	$("#submitB").attr('disabled','disabled');
	$("#submitB").css( 'cursor', 'default' ); 
	$("#resetB").css( 'cursor', 'default' );
	$("#submitB").css("color","#333");
	$("#resetB").css("color","#333");
	$('#resetB').css('pointer-events','none');
    $('#submitB').css('pointer-events','none');
		 
	percentageA=0;
	percentageB=0;
    percentageC=0;
    percentageD=0;
    percentageE=0;
	percentageF=0;
		
	bucketDropCount1=0;
	bucketDropCount2=0;
	bucketDropCount3=0;
	bucketDropCount4=0;
	bucketDropCount5=0;
	bucketDropCount6=0;
		
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
	dropArrayX6= [];
	dropArrayY6= [];
	dropObject1= [];
	dropObject2= [];
	dropObject3= [];
	dropObject4= [];
	dropObject5= [];
	dropObject6= [];
		
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
	bucketC6=0;
    countB6=0;
	
	for(var i=1;i<=17;++i)
	{
	document.getElementById("object"+i).style.disabled = false;
	document.getElementById("object"+i).disabled = false;
	document.getElementById("object"+i).style.cursor = "pointer";
	}
}


jqueryFunctionA = function()
{
		 $("#done-btn").css("background-color", "#FFE600"); 
		 $("#done-btn").removeAttr("disabled");
		 $("#done-btn").css( 'cursor', 'pointer' );
	
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
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
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}	
}	



jqueryFunctionB = function()
{
		 $("#done-btn").css("background-color", "#FFE600"); 
		 $("#done-btn").removeAttr("disabled");
		 $("#done-btn").css( 'cursor', 'pointer' );
	
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
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
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		
		
}


jqueryFunctionC = function()
{
		 $("#done-btn").css("background-color", "#FFE600"); 
		 $("#done-btn").removeAttr("disabled");
		 $("#done-btn").css( 'cursor', 'pointer' );
	
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
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
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
}


	
jqueryFunctionD = function()
{
		 $("#done-btn").css("background-color", "#FFE600"); 
		 $("#done-btn").removeAttr("disabled");
		 $("#done-btn").css( 'cursor', 'pointer' );
	
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
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
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}

}
	
jqueryFunctionE = function()
{   
		 $("#done-btn").css("background-color", "#FFE600"); 
		 $("#done-btn").removeAttr("disabled");
		 $("#done-btn").css( 'cursor', 'pointer' );
	
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
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
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
}


jqueryFunctionF = function()
{
		 $("#done-btn").css("background-color", "#FFE600"); 
		 $("#done-btn").removeAttr("disabled");
		 $("#done-btn").css( 'cursor', 'pointer' );
	
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
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
		  dropArrayX6.push(xT);
		  dropArrayY6.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{	
		  dropArrayX6.push(xT);
		  dropArrayY6.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  dropArrayX6.push(xT);
		  dropArrayY6.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  dropArrayX6.push(xT);
		  dropArrayY6.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  dropArrayX6.push(xT);
		  dropArrayY6.push(yT);
		}
}


})



lastfun = function()
{
        for(var i=1;i<=3;++i)
	     {
			document.getElementById("object"+i).style.top = y1+"px";
			document.getElementById("object"+i).style.left = x1+"px";
		 } 
		 
		 for(var i=4;i<=6;++i)
	     {
			document.getElementById("object"+i).style.top = y2+"px";
			document.getElementById("object"+i).style.left = x2+"px";
		 } 
		 for(var i=7;i<=8;++i)
	     {
			document.getElementById("object"+i).style.top = y3+"px";
			document.getElementById("object"+i).style.left = x3+"px";
		 } 
		 
		 for(var i=9;i<=14;++i)
	     {
			document.getElementById("object"+i).style.top = y4+"px";
			document.getElementById("object"+i).style.left = x4+"px";
		 } 
		 
		 for(var i=15;i<=17;++i)
	     {
			document.getElementById("object"+i).style.top = y5+"px";
			document.getElementById("object"+i).style.left = x5+"px";
		 } 
}


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
	
	
	dropE1 = document.getElementById('drop1');
	dropPos1 = dropE1.getBoundingClientRect();
	dx1 = dropPos1.left;
    dy1 = dropPos1.top;
	
	dropE2 = document.getElementById('drop2');
	dropPos2 = dropE2.getBoundingClientRect();
	dx2 = dropPos2.left;
    dy2 = dropPos2.top;
	
	dropE3 = document.getElementById('drop3');
	dropPos3 = dropE3.getBoundingClientRect();
	dx3 = dropPos3.left;
    dy3 = dropPos3.top;
	
	dropE4 = document.getElementById('drop4');
	dropPos4 = dropE4.getBoundingClientRect();
	dx4 = dropPos4.left;
    dy4 = dropPos4.top;
	
	dropE5 = document.getElementById('drop5');
	dropPos5 = dropE5.getBoundingClientRect();
	dx5 = dropPos5.left;
    dy5 = dropPos5.top; 
	
	dropE6 = document.getElementById('drop6');
	dropPos6 = dropE6.getBoundingClientRect();
	dx6 = dropPos6.left;
    dy6 = dropPos6.top; 
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

function disableButton(event)
{
	document.getElementById(elem_id).style.disabled = true;
	document.getElementById(elem_id).disabled = true;
	document.getElementById(elem_id).style.cursor = "default";
	
	$('#submitB').css('pointer-events','auto');	
	$('#done-btn').css('pointer-events','auto');
    $('#resetB').css('pointer-events','auto');
}

function drag_drop(event){
	event.preventDefault();
	console.log(event.target.getAttribute('id'));
	if(event.target.getAttribute('id') == "drop1")
	{
	    bucketC1++;
		countB1=0;
		
		if(bucketC1>5)
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
				if(bucketC1==1)
				{
					dy1=dy1+60;
					dx1=dx1+27;
				}
				else if(bucketC1==2)
				{
					dy1=dy1+32;
					dx1=dx1-5;
				}
				else if(bucketC1==3)
				{
					dy1=dy1+32;
					dx1=dx1+60;
				}
				else if(bucketC1==4)
				{
					dy1=dy1+2;
					dx1=dx1+28;
				}
				else if(bucketC1==5)
				{
					dy1=dy1-32;
					dx1=dx1+52;
				}
				document.getElementById(elem_id).style.top = dy1+"px";
				document.getElementById(elem_id).style.left = dx1+"px";
				disableButton();
				jqueryFunctionA();	
			}
			else{
				bucketC1--;
			}
		}
	}
	else if(event.target.getAttribute('id') == "drop2")
	{
	    bucketC2++;
		countB2=0;
		if(bucketC2>5)
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
				if(bucketC2==1)
				{
					dy2=dy2+60;
					dx2=dx2+27;
				}
				else if(bucketC2==2)
				{
					dy2=dy2+32;
					dx2=dx2-5;
				}
				else if(bucketC2==3)
				{
					dy2=dy2+32;
					dx2=dx2+60;
				}
				else if(bucketC2==4)
				{
					dy2=dy2+2;
					dx2=dx2+28;
				}
				else if(bucketC2==5)
				{
					dy2=dy2-32;
					dx2=dx2+52;
				}
				document.getElementById(elem_id).style.top = dy2+"px";
				document.getElementById(elem_id).style.left = dx2+"px";
				disableButton();
				jqueryFunctionB();	
			}
			else{
				bucketC2--;
			}
		}
	}
	else if(event.target.getAttribute('id') == "drop3")
	{
	    bucketC3++;
		countB3=0;
		if(bucketC3>5)
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
				if(bucketC3==1)
				{
					dy3=dy3+60;
					dx3=dx3+27;
				}
				else if(bucketC3==2)
				{
					dy3=dy3+32;
					dx3=dx3-5;
				}
				else if(bucketC3==3)
				{
					dy3=dy3+32;
					dx3=dx3+60;
				}
				else if(bucketC3==4)
				{
					dy3=dy3+2;
					dx3=dx3+28;
				}
				else if(bucketC3==5)
				{
					dy3=dy3-32;
					dx3=dx3+52;
				}
				document.getElementById(elem_id).style.top = dy3+"px";
				document.getElementById(elem_id).style.left = dx3+"px";
				disableButton();
				jqueryFunctionC();	
			}
			else{
				bucketC3--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "drop4")
	{
	    bucketC4++;
		countB4=0;
		if(bucketC4>5)
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
				if(bucketC4==1)
				{
					dy4=dy4+60;
					dx4=dx4+27;
				}
				else if(bucketC4==2)
				{
					dy4=dy4+32;
					dx4=dx4-5;
				}
				else if(bucketC4==3)
				{
					dy4=dy4+32;
					dx4=dx4+60;
				}
				else if(bucketC4==4)
				{
					dy4=dy4+2;
					dx4=dx4+28;
				}
				else if(bucketC4==5)
				{
					dy4=dy4-32;
					dx4=dx4+52;
				}
				document.getElementById(elem_id).style.top = dy4+"px";
				document.getElementById(elem_id).style.left = dx4+"px";
				disableButton();
				jqueryFunctionD();	
			}
			else{
				bucketC4--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "drop5")
	{
	    bucketC5++;
		countB5=0;
		if(bucketC5>5)
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
				if(bucketC5==1)
				{
					dy5=dy5+60;
					dx5=dx5+27;
				}
				else if(bucketC5==2)
				{
					dy5=dy5+32;
					dx5=dx5-5;
				}
				else if(bucketC5==3)
				{
					dy5=dy5+32;
					dx5=dx5+60;
				}
				else if(bucketC5==4)
				{
					dy5=dy5+4;
					dx5=dx5+28;
				}
				else if(bucketC5==5)
				{
					dy5=dy5-32;
					dx5=dx5+52;
				}
				document.getElementById(elem_id).style.top = dy5+"px";
				document.getElementById(elem_id).style.left = dx5+"px";
				disableButton();
				jqueryFunctionE();	
			}
			else{
				bucketC5--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "drop6")
	{
	    bucketC6++;
		countB6=0;
		if(bucketC6>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX6.length-1;++i)
			{
               if((xT==dropArrayX6[i])&&(yT==dropArrayY6[i]))
				{
					countB6++;	
				}
			}
			if(countB6==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject6.push(draggedObject);
				bucketDropCount6++;
				percentageF=percentageF+3;
				if(bucketC6==1)
				{
					dy6=dy6+60;
					dx6=dx6+27;
				}
				else if(bucketC6==2)
				{
					dy6=dy6+32;
					dx6=dx6-5;
				}
				else if(bucketC6==3)
				{
					dy6=dy6+32;
					dx6=dx6+60;
				}
				else if(bucketC6==4)
				{
					dy6=dy6+4;
					dx6=dx6+28;
				}
				else if(bucketC6==5)
				{
					dy6=dy6-32;
					dx6=dx6+52;
				}
				document.getElementById(elem_id).style.top = dy6+"px";
				document.getElementById(elem_id).style.left = dx6+"px";
				disableButton();
				jqueryFunctionF();	
			}
			else{
				bucketC6--;
			}
		}
	}
	droppedIn=true;
}





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
			timer=0;
			display.textContent = minutes + ":" + "00";
			$("#instructionFirst").css("visibility", "hidden");
            $("#instructionLast").css("visibility", "visible");
			$("#timeUpPop").css("visibility","visible");
			$("#LogoRotator").css("visibility","hidden");
            $("#dummyLoader").css("visibility","visible");
			player.SetVar("attempt61","true");
			end();
        }
		}
    }, 1000);
	
}

function end()
{
	//clearInterval(timer);		
}

function timerStart()
{
	var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
}

