		/* Om
		This function generates the source of the audio based on anuvakam and line number. 
		The source is also based on word to word learning or line by line learning.
		
		Also the current playing line of anuvakam is decided based on audio being palyed currently.
		Audio and button are named such that they show the line number they are associated to.
		*/
		function playAtharva(buttonNum)
			{
				//alert(anuNum);
				//alert(buttonNum);
			//	 document.getElementById("error").innerHTML = "";
			
		var buttonId = "p" + buttonNum;
		
		var buttonEle = document.getElementById(buttonId);
		document.getElementById(buttonId).scrollIntoViewIfNeeded();
		var curBut; 
		var currAud;
		var prevNum;
		var targetLength = 2;
		//alert(getLearningMode());
		if(getLearningMode() == 'com')
		{
			var sourceAud = "audio/Atharava/PPcom.mp3";
			//document.body.style.cursor = "not-allowed";
			document.getElementById("anu1").style.pointerEvents = "not-allowed";
		}
		else if((buttonEle instanceof HTMLButtonElement)||(buttonEle instanceof HTMLParagraphElement))
			sourceAud = "audio/Atharava/" + "ww_" + buttonNum +".mp3";
		else
			sourceAud = "audio/Atharava/" +getLearningMode()+"_" + buttonNum +".mp3";
		//alert('here');
		var sounds = document.getElementById('anu1Aud');
		sounds.controls = true;
		var source = document.getElementById('audioSource');
		currAud = source.src ;
		currAud = currAud.substring(currAud.lastIndexOf('/')+1);
		var playingButton = parseInt(currAud.substring((currAud.indexOf('_')+1),(currAud.indexOf('.mp3'))));
		
		/*FETCHING THE CURRENTLY PLAYING BUTTON NUMBER BASED ON THE AUDIO BEING PLAYED. THAT BUTTON COLOR IS CHANGED TO BLACK.
		IN FEW ANUVAKAS TWO LINES ARE BEING READ AT THE SAME TIME. IN WHICH CASE THAT BUTTONS ARE KEPT IN THE DIV AND IF THE 
		ELEMENT IS A DIV, ALL THE CHILDRENS COLOR IS CHANGED TO BLACK AFTER PAUSING.
		*/
		if(Number.isInteger(playingButton))	
			{
				playingButton=leftPad(playingButton,targetLength);
				curBut = "p" + playingButton;
				//alert("here");
				var currButtonEle = document.getElementById(curBut);
				/*ChNGES FOR ANU3*/
				/*if(currButtonEle instanceof HTMLParagraphElement){
					//alert("Yes");
					
					var tempBtn = +playingButton -1;
					var tempBtnEle = document.getElementById("p" + leftPad(tempBtn,targetLength));
					while(!(tempBtnEle instanceof HTMLParagraphElement)){
						tempButnID = "p" + tempBtn;
						//alert(tempButnID
						if(tempBtnEle instanceof HTMLSpanElement)
						inActiveButtonColor(tempButnID);
						tempBtn = +tempBtn - 1;
						tempBtn = leftPad(tempBtn,2);
						tempBtnEle = document.getElementById("p" + leftPad(tempBtn,targetLength));
					}
				}
				else */
				//alert(currButtonEle);
				if(currButtonEle instanceof HTMLButtonElement){
					
					let rep = currButtonEle.value;
					
					var dualButton;
					var i = 1;
					while(rep > 0){
						
						dualButton = +playingButton -i;
						dualButton = leftPad(dualButton,2);
						var dualButtonId = "p" + dualButton;
						
						if(!(document.getElementById(dualButtonId) instanceof HTMLButtonElement) || (document.getElementById(dualButtonId) instanceof HTMLParagraphElement)){
						inActiveButtonColor(dualButtonId);
						rep--;
					}
					i++;
				}
				}
				else
				inActiveButtonColor(curBut);	
					
				/*Yamini	
				//alert(playingButton);
				var dualButton = +playingButton -1;
				dualButton = leftPad(dualButton,2);
				var dualButtonId = "p" + dualButton;
				//document.getElementById(dualButtonId).style.color = "#000";
				inActiveButtonColor(dualButtonId);
				dualButton = +playingButton -2;
				dualButton = leftPad(dualButton,2);
				dualButtonId = "p" + dualButton;
				if((document.getElementById(dualButtonId) instanceof HTMLButtonElement) || (document.getElementById(dualButtonId) instanceof HTMLParagraphElement)){
					dualButton = +playingButton -3;
					dualButton = leftPad(dualButton,2);
					dualButtonId = "p" + dualButton;
				
					inActiveButtonColor(dualButtonId);
				}
				else
					inActiveButtonColor(dualButtonId);
			
			}
				inActiveButtonColor(curBut);*/
			}
				
		if(!sounds.paused)
				{
					sounds.pause();								
				}
				//alert(buttonNum);
				//alert(buttonEle);
			if(buttonEle instanceof HTMLButtonElement){
				let rep = buttonEle.value;
				//alert('rep is : ' + rep);
				var dualButton;
				var i = 1;
				while(rep > 0){
					//alert('enter while');
					dualButton = +buttonNum -i;
					dualButton = leftPad(dualButton,2);
					var dualButtonId = "p" + dualButton;
					//alert(dualButtonId);
					if(!(document.getElementById(dualButtonId) instanceof HTMLButtonElement) || (document.getElementById(dualButtonId) instanceof HTMLParagraphElement)){
						activeButtonColor(dualButtonId);
						rep--;
					}
					i++;
				}
				
				/*testing
				
				var dualButton = +buttonNum -1;
				dualButton = leftPad(dualButton,2);
				//alert('dualButton');
				//alert(dualButton);
				var dualButtonId = "p" + dualButton;
				
				activeButtonColor(dualButtonId);
				dualButton = +buttonNum -2;
				dualButton = leftPad(dualButton,2);
				dualButtonId = "p" + dualButton;
				//alert(dualButtonId);
				//alert(dualButton);
				if((document.getElementById(dualButtonId) instanceof HTMLButtonElement) || (document.getElementById(dualButtonId) instanceof HTMLParagraphElement))
				{
					dualButton = +buttonNum -3;
					dualButton = leftPad(dualButton,2);
					dualButtonId = "p" + dualButton;
					if((document.getElementById(dualButtonId) instanceof HTMLButtonElement) || (document.getElementById(dualButtonId) instanceof HTMLParagraphElement)){
						dualButton = +buttonNum -4;
						dualButton = leftPad(dualButton,2);
						dualButtonId = "p" + dualButton;
						activeButtonColor(dualButtonId);
					}else
					activeButtonColor(dualButtonId);
				}
				else
					activeButtonColor(dualButtonId);testing*/
					
			}
			else
				activeButtonColor(buttonId);
			
				
			buttonEle.style.border = "none";
			source.src = sourceAud;	
			sounds.load();
			sounds.play();
			//alert('reached');
		sounds.onended = function() {
			//alert('reached');
			
			buttonEle.style.color = "#000";
			var bolds = buttonEle.getElementsByTagName('b');
			for(var i = 0; i < bolds.length; i++)
				{
					bolds[i].style.color = '#17202A';
			}
			if(getLearningMode() == 'com'){playAtharva('00');	}
			buttonNum = +buttonNum + 1;
			buttonNum = leftPad(buttonNum,2);
				//alert(buttonNum);
			var ele = document.getElementById('audio-text');
			var numberOfPs = ele.getElementsByTagName('p').length;
			var numberOfSpans = ele.getElementsByTagName('span').length;
			var numberOfButtons = ele.getElementsByTagName('button').length;
			//alert(+numberOfButtons + +numberOfSpans);
			if( buttonNum < (+numberOfButtons + +numberOfSpans + +numberOfPs))								
				playAtharva(buttonNum);
			else
			//alert("Anuvakam is complete. Please choose the next one");
				playAtharva('00');	
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
		//	document.getElementById("error").innerHTML = "";
			learningMode = mode;
			localStorage.setItem("learningMode" , mode);
			document.getElementById("llList1").style.display = "none";
			document.getElementById("llList2").style.display = "none";
			document.getElementById("llList3").style.display = "none";
		//	var sourceAud = "audio/Anu" + anuNum +getLearningMode()+"_" + buttonNum +".mp3";
			var iframe = document.getElementById("anu");
			var scrName = document.getElementById("anu").src;
			//scrName = scrName.substring(scrName.lastIndexOf('/')+1);
			//var scrAnuvakam = scrName.substring(10,12);
			//alert(iframe);
			//alert(scrName);
			var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
			//alert(innerDoc);
			var sounds = innerDoc.getElementById('anu1Aud');
			sounds.controls = true;
			var source = innerDoc.getElementById('audioSource');
			//alert(source.src);
			currAud = source.src ;
			currAud = currAud.substring(currAud.lastIndexOf('/')+1);
			var playingButton = parseInt(currAud.substring((currAud.indexOf('_')+1),(currAud.indexOf('.mp3'))));
			if(Number.isInteger(playingButton)){
				playingButton=leftPad(playingButton,2);
			}
			else 
				playingButton = '00';
		//	alert("playingButton"+playingButton);
		if(mode == 'com'){
			try{
			source.src = "audio/Atharava/PPcom.mp3";
			if(!sounds.paused)
				{
					sounds.pause();								
				}
			//	alert(source.src);
			
			sounds.load();
			//alert("playing " +playingButton);
			sounds.play();
			
				}
			catch(err){
				document.getElementById("error").innerHTML = err.message+"Please contact Subbaya Shastry garu";
			}
		}
		else{
		//	try{
				var playingButtonId  = "p" +playingButton;
				innerDoc.getElementById(playingButtonId).click();
		}
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
document.getElementById("lanList5").style.display = "none";					
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
//document.getElementById("error").innerHTML = "";	
		const myElement = document.getElementById(listID);
		var list;
		for (let i = 0; i < myElement.children.length; i++) {
			var listClass = myElement.children[i].className ;	
			if (listClass != ''){
				list = document.getElementsByClassName(listClass)[2];
				for (let j = 0; j < list.children.length; j++) {
					if(document.getElementById(list.children[j].id).style.display == "block")
						document.getElementById(list.children[j].id).style.display = "none";
					else
						document.getElementById(list.children[j].id).style.display = "block";
				}
			}
		}
	}
	
	function activeButtonColor(buttonId){
		document.getElementById(buttonId).style.color = "blue";
		var smalls = document.getElementById(buttonId).getElementsByTagName('small');
		for(var i = 0; i < smalls.length; i++){
									//smalls[i].style.color = '#1C37B6';
			smalls[i].style.color = '#dc143c';
			
		}
		var bolds = document.getElementById(buttonId).getElementsByTagName('b');
		for(var i = 0; i < bolds.length; i++){
			bolds[i].style.color = '#241CB6'
			
		}
		var spans = document.getElementById(buttonId).getElementsByTagName('span');
		for(var i = 0; i < spans.length; i++){
			spans[i].style.color = "blue";
			
		}
	}
	 
	function inActiveButtonColor(buttonId){
		//alert(buttonId);
		document.getElementById(buttonId).style.color = "#000";
		var smalls = document.getElementById(buttonId).getElementsByTagName('small');
		for(var i = 0; i < smalls.length; i++)
		{
			smalls[i].style.color = '#424949';
			
			//smalls[i].style.color = '#dc143c';
		}
		var bolds = document.getElementById(buttonId).getElementsByTagName('b');
		
		for(var i = 0; i < bolds.length; i++)
		{
			bolds[i].style.color = '#17202A';
			
		}	
		var spans = document.getElementById(buttonId).getElementsByTagName('span');
		for(var i = 0; i < spans.length; i++){
			spans[i].style.color = "#000";
			
		}
	}
	