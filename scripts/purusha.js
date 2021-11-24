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
				}
			/* If an audio is already playing pause the audio beofre assinging a new audio*/
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
					//alert(buttonNum);
					var ele = document.getElementById('audioText');
					//alert(ele);
					var numberOfButtons = ele.getElementsByTagName('button').length;
					//alert(numberOfButtons);
					//alert(buttonNum);
					if( buttonNum < numberOfButtons)
						anu1TeluguPrint(anuNum,buttonNum);
					else
						alert("Anuvakam is complete. Please choose the next one");
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
				 document.getElementById("llList1").style.display = "none";
				 document.getElementById("llList2").style.display = "none";
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
				
				var scr = "suktamPurusha" + getLanguage() + tMode+".html";
			//alert(scr);
				var iframe = document.getElementById("anu");
			//alert("iframe");
			
				document.getElementById("anu").src = scr;
				var divId = document.getElementById("anu1");
		divId.style.visibility = 'visible';
				//divId.style.visibility = 'visible';
					//alert("value is set");
				 document.getElementById("textList1").style.display = "none";
				 document.getElementById("textList2").style.display = "none"; 
				 
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
			var scr = "suktamPurusha" + lang + getTextMode()+".html";
			
			var iframe = document.getElementById("anu");
			
			document.getElementById("anu").src = scr;
			
			var divId = document.getElementById("anu1");
		divId.style.visibility = 'visible';
		
			document.getElementById("lanList1").style.display = "none";
			document.getElementById("lanList2").style.display = "none";
			document.getElementById("lanList3").style.display = "none"; 				 
			document.getElementById("lanList4").style.display = "none"; 				 
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
			 
		
			
	function openLanguage(listID){		 
		const myElement = document.getElementById(listID);
		for (let i = 0; i < myElement.children.length; i++) {
			var listClass = myElement.children[i].className ;
			//alert(listClass);
	
		if (listClass != ''){
			//alert('listClass is not empty');
		 var list = document.getElementsByClassName(listClass)[0];
		 //alert(list);
		 for (let j = 0; j < list.children.length; j++) {
		// alert(list.children[j].id);
		//list.children[j].id.style.display = "block";
		document.getElementById(list.children[j].id).style.display = "block";
		}
		}
	}
	}
	
	function openText(listID){		 
		const myElement = document.getElementById(listID);
		for (let i = 0; i < myElement.children.length; i++) {
			var listClass = myElement.children[i].className ;

		if (listClass != ''){
			
		 var list = document.getElementsByClassName(listClass)[1];
		
		 for (let j = 0; j < list.children.length; j++) {
		
		document.getElementById(list.children[j].id).style.display = "block";
		}
		}
	}
	}
	
	function openMode(listID){		 
		const myElement = document.getElementById(listID);
		for (let i = 0; i < myElement.children.length; i++) {
			var listClass = myElement.children[i].className ;	
			if (listClass != ''){
				var list = document.getElementsByClassName(listClass)[2];
				for (let j = 0; j < list.children.length; j++) {
				document.getElementById(list.children[j].id).style.display = "block";
				}
			}
		}
	}
	
	