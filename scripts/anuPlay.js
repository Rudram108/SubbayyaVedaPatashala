		var learningMode;
		function anu1TeluguPrint(anuNum, buttonNum)
			{
				//alert(anuNum);
				alert(buttonNum);
				var buttonId = "button" + buttonNum;
				var buttonEle = document.getElementById(buttonId);
			
				var curBut; 
				var currAud;
				var prevNum;
				var targetLength = 2;
				alert("value returned" +getLearningMode());
				var sourceAud = "audio/Anu" + anuNum +getLearningMode()+"_" + buttonNum +".mp3";
				alert(sourceAud);
				var sounds = document.getElementById('anu1Aud');
				sounds.controls = true;
				var source = document.getElementById('audioSource');
				currAud = source.src ;
				//alert(currAud);
				currAud = currAud.substring(currAud.lastIndexOf('/')+1);
				//alert(currAud);
				var playingButton = parseInt(currAud.substring((currAud.indexOf('_')+1),(currAud.indexOf('.mp3'))));
				//var playingButton = parseInt((currAud.substring(currAud.length-6,currAud.length)).substring(0,2));
				//alert(playingButton);
				//alert("if " + Number.isInteger(playingButton));
				//if((Number.isInteger(playingButton)))
				if(Number.isInteger(playingButton))	
				{
					playingButton=leftPad(playingButton,targetLength);
					curBut = "button" + playingButton;
					//alert(curBut);
					document.getElementById(curBut).style.color = "#000";
					//var font = window.getComputedStyle(buttonEle, null).getPropertyValue('font-size');
					//alert(parseInt(font));
					//document.getElementById(curBut).style.fontSize   = buttonEle.style.fontSize;
				}
				
				if(!sounds.paused)
				{
					
					sounds.pause();	
					/*buttonEle.style.color = "#000";
					buttonEle.style.fontSize   ="21px";	*/				
				}
				
					//buttonEle.style.color = "#086D1B";
					buttonEle.style.color = "blue";
					//alert(buttonEle.style.fontSize);
					//buttonEle.style.fontSize   = document.getElementById(curBut).style.fontSize +1;		
					buttonEle.style.border = "none";
					source.src = sourceAud;	
					sounds.load();
					sounds.play();
					
				
				sounds.onended = function() 
				{
					buttonEle.style.color = "#000";
					//buttonEle.style.fontSize   ="21px";
					buttonNum = +buttonNum + 1;
					
					buttonNum = leftPad(buttonNum,2);
					if( buttonNum < 11)
						anu1TeluguPrint(anuNum,buttonNum);
				}
					
			}
			
			function leftPad(number, targetLength) {
				var output = number + '';
				while (output.length < targetLength) {
					output = '0' + output;
				}
				return output;
			}
			
			function setLearningMode(mode){
				 learningMode = mode;
				 localStorage.setItem("learningMode" , mode);
				alert("value is set");
				alert(mode);
			}
			
			function getLearningMode(){
				lMode = localStorage.getItem("learningMode");
				if(lMode === undefined){
					return 'ww';
				}
				return lMode;
			}
					
			function showDiv(anuvakam){

			var divId = document.getElementById(anuvakam);
			divId.style.visibility = 'visible';
			manuBtnOnClick();
		}
		
	

	function manuBtnOnClick(){
		var manuBtn = document.getElementById("manuBtn");
		var namakam = document.getElementById("namakambtn");
		var menu = document.getElementById("menu");
		var iframe = document.getElementById("anu");
		
	
		var doc;
	
		if(namakam.style.left== "-250px"){
			namakam.style.left = "0"; 
			menu.src = "images/close.png"
			namakam.style.backgroundColor = "#20B2AA";	
			
		}
			
		else
		{
			namakam.style.left = "-250px";
			menu.src = "images/menu.png"
		}
	}
	
	function moveAnuText()
	{
			var Tmenu = document.getElementById("telugu");
			alert(Tmenu);
	}
			 