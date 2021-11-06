		/* Om
		This function generates the source of the audio based on anuvakam and line number. 
		The source is also based on word to word learning or line by line learning.
		
		Also the current playing line of anuvakam is decided based on audio being palyed currently.
		Audio and button are named such that they show the line number they are associated to.
		*/
		function anu1TeluguPrint(anuNum, buttonNum)
			{
				//alert(anuNum);
				//alert(buttonNum);
				var buttonId = "button" + buttonNum;
				var buttonEle = document.getElementById(buttonId);
			
				var curBut; 
				var currAud;
				var prevNum;
				var targetLength = 2;
				//alert("value returned" +getLearningMode());
				var sourceAud = "audio/Anu" + anuNum +getLearningMode()+"_" + buttonNum +".mp3";
				//alert(sourceAud);
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
					var currButtonEle = document.getElementById(curBut);
					currButtonEle.style.color = "#000";
					var smalls = currButtonEle.getElementsByTagName('small');
					for(var i = 0; i < smalls.length; i++)
						{
							smalls[i].style.color = '#424949';
							//smalls[i].style.color = '#dc143c';
						}
					var bolds = currButtonEle.getElementsByTagName('b');
					
						for(var i = 0; i < bolds.length; i++)
						{
							bolds[i].style.color = '#17202A';
						}	
					//var font = window.getComputedStyle(buttonEle, null).getPropertyValue('font-size');
					//alert(parseInt(font));
					//document.getElementById(curBut).style.fontSize   = buttonEle.style.fontSize;
				}
				
				if(!sounds.paused)
				{
					
					sounds.pause();	
				
								
				}
				
					//buttonEle.style.color = "#086D1B";
				
					buttonEle.style.color = "blue";
					
					var smalls = buttonEle.getElementsByTagName('small');
					
						for(var i = 0; i < smalls.length; i++)
						{
							//smalls[i].style.color = '#1C37B6';
							smalls[i].style.color = '#dc143c';
						}
					var bolds = buttonEle.getElementsByTagName('b');
					
						for(var i = 0; i < bolds.length; i++)
						{
							bolds[i].style.color = '#241CB6';
						}
					
					
					//alert(buttonEle.style.fontSize);
					//buttonEle.style.fontSize   = document.getElementById(curBut).style.fontSize +1;		
					buttonEle.style.border = "none";
					source.src = sourceAud;	
					sounds.load();
					sounds.play();
					
				
				sounds.onended = function() 
				{
					buttonEle.style.color = "#000";
					//for(var i = 0; i < smalls.length; i++)
						//{
							//smalls[i].style.color = '#424949';
					//	}
					var bolds = buttonEle.getElementsByTagName('b');
					
						for(var i = 0; i < bolds.length; i++)
						{
							bolds[i].style.color = '#17202A';
						}
					//buttonEle.style.fontSize   ="21px";
					buttonNum = +buttonNum + 1;
					
					buttonNum = leftPad(buttonNum,2);
					if( buttonNum < 32)
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
			
		/*
		This function set the Learning Mode
		*/
			function setLearningMode(mode){
				 learningMode = mode;
				 localStorage.setItem("learningMode" , mode);
				//alert("value is set");
				//alert(mode);
			}
		/*
		This function get the Learning Mode
		*/	
			function getLearningMode(){
				lMode = localStorage.getItem("learningMode");
				if(lMode === null){
					return 'ww';
				}
				return lMode;
			}
		/*
		This function set the Text Mode
		*/			
				 function setTextMode(tMode){
				 
					 textMode = tMode;
					localStorage.setItem("textMode" , tMode);
				var iframe = document.getElementById("anu");
			
				var scrName = document.getElementById("anu").src;// "namakamAnu" + anuvakamNum + getLanguage() + getTextMode()+".html";
			scrName = scrName.substring(scrName.lastIndexOf('/')+1);
			//alert(scrName);
			var scrAnuvakam = scrName.substring(10,12);
			//alert(scrAnuvakam);
			var scr = "namakamAnu" + scrAnuvakam + getLanguage() + tMode+".html";
			//alert(scr);
			var iframe = document.getElementById("anu");
			//alert("iframe");
			
			document.getElementById("anu").src = scr;
			divId.style.visibility = 'visible';
					//alert("value is set");
				 
				 
			 }
		/*
		This function get the Text Mode
		*/			
				 
			  function getTextMode(){
				 tMode = localStorage.getItem("textMode");
				if(tMode === null){
					return 'nrl';
				}
				return tMode;
				 
			 }
			/*
		This function set the Language Mode
		*/			
			 
			  function setLanguage(lang){
					language = lang;						
					localStorage.setItem("language" , lang);
					
					/*changes*/

			/*changes made*/
			var iframe = document.getElementById("anu");
			//alert("iframe");
			var scrName = document.getElementById("anu").src;// "namakamAnu" + anuvakamNum + getLanguage() + getTextMode()+".html";
			scrName = scrName.substring(scrName.lastIndexOf('/')+1);
			//alert(scrName);
			var scrAnuvakam = scrName.substring(10,12);
			//alert(scrAnuvakam);
			var scr = "namakamAnu" + scrAnuvakam + lang + getTextMode()+".html";
			//alert(scr);
			var iframe = document.getElementById("anu");
			//alert("iframe");
			
			document.getElementById("anu").src = scr;
			//divId.style.visibility = 'visible';
			
			  }			
			/*
		This function get the Language Mode
		*/		 
			 
			  function getLanguage(){
				 lang = localStorage.getItem("language");
				if(lang === null){
					return 'Tel';
				}
				return lang;
				 
			 }
			 
			/*
		This function makes the div holding the anuvakam text visible and sets the source of the frame based on the inputs.
		*/		 
			function showDiv(anuvakamNum){
			//alert("Entered showDov");
			var divId = document.getElementById("anu1");
			
			//divId.style.visibility = 'visible';
			/*changes made*/
			var iframe = document.getElementById("anu");
			//alert("iframe");
			var scrName = "namakamAnu" + anuvakamNum + getLanguage() + getTextMode()+".html";
			//alert(scrName);
			document.getElementById("anu").src = scrName;
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
		//	alert(Tmenu);
	}
	
	/*function hover(buttonHover){
		
		var buttonHoverId = "button" + buttonHover;
		var buttonHoverEle = document.getElementById(buttonHoverId);
		buttonHoverEle.style.color = "yellow";
		var smalls = buttonHoverEle.getElementsByTagName('small');
					
						for(var i = 0; i < smalls.length; i++)
						{
							smalls[i].style.color = '#EBF11C';
						}
					var bolds = buttonHoverEle.getElementsByTagName('b');
					
						for(var i = 0; i < bolds.length; i++)
						{
							bolds[i].style.color = '#C5CB05';
						}
	}
	
	function hoverOut(buttonHover){
		
		var buttonHoverId = "button" + buttonHover;
		var buttonHoverEle = document.getElementById(buttonHoverId);
		buttonHoverEle.style.color = "#000";
		var smalls = buttonHoverEle.getElementsByTagName('small');
					
						for(var i = 0; i < smalls.length; i++)
						{
							smalls[i].style.color = '#424949';
						}
					var bolds = buttonHoverEle.getElementsByTagName('b');
					
						for(var i = 0; i < bolds.length; i++)
						{
							bolds[i].style.color = '#17202A';
						}
	}
			 */
			 
	