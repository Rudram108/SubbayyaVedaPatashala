		/* Om
		This function generates the source of the audio based on anuvakam and line number. 
		The source is also based on word to word learning or line by line learning.
		
		Also the current playing line of anuvakam is decided based on audio being palyed currently.
		Audio and button are named such that they show the line number they are associated to.
		*/
		
	
	function anu1TeluguPrint(anuNum, buttonNum){
			//	alert(anuNum);
			//	alert(buttonNum);
				
			
		var buttonId = "p" + buttonNum;
		
		var buttonEle = document.getElementById(buttonId);
		
		var curBut; 
		var currAud;
		var prevNum;
		var targetLength = 2;
		//alert(getLearningMode());
		var sourceAud = "audio/Anu" + leftPad(anuNum,2) +getLearningMode()+"_" + buttonNum +".mp3";
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
				if(currButtonEle instanceof HTMLSpanElement){
				
				var dualButton = +playingButton -1;
				dualButton = leftPad(dualButton,2);
				var dualButtonId = "p" + dualButton;
				//document.getElementById(dualButtonId).style.color = "#000";
				inActiveButtonColor(dualButtonId);
				dualButton = +playingButton -2;
				dualButton = leftPad(dualButton,2);
				dualButtonId = "p" + dualButton;
				if(document.getElementById(dualButtonId) instanceof HTMLSpanElement){
					dualButton = +playingButton -3;
					dualButton = leftPad(dualButton,2);
					dualButtonId = "p" + dualButton;
				
					inActiveButtonColor(dualButtonId);
				}
				else
					inActiveButtonColor(dualButtonId);
			
			}else
				inActiveButtonColor(curBut);
			}
				
		if(!sounds.paused)
				{
					sounds.pause();								
				}
			if(buttonEle instanceof HTMLSpanElement){
				//alert('inspan');
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
				if(document.getElementById(dualButtonId) instanceof HTMLSpanElement){
					dualButton = +buttonNum -3;
					dualButton = leftPad(dualButton,2);
					dualButtonId = "p" + dualButton;
					
					activeButtonColor(dualButtonId);
				}
				else
					activeButtonColor(dualButtonId);
					
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
			buttonNum = +buttonNum + 1;
			buttonNum = leftPad(buttonNum,2);
				//alert(buttonNum);
			var ele = document.getElementById('audio-text');
			var numberOfButtons = ele.getElementsByTagName('p').length;
			var numberOfSpans = ele.getElementsByTagName('span').length;
			//alert(+numberOfButtons + +numberOfSpans);
			if( buttonNum < (+numberOfButtons + +numberOfSpans))								
				anu1TeluguPrint(leftPad(anuNum,2),buttonNum);
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
		document.getElementById("llList3").style.display = "none";
		//	var sourceAud = "audio/Anu" + anuNum +getLearningMode()+"_" + buttonNum +".mp3";
			var iframe = document.getElementById("anu");
			var scrName = document.getElementById("anu").src;
			scrName = scrName.substring(scrName.lastIndexOf('/')+1);
			var scrAnuvakam = scrName.substring(10,12);
			//alert(iframe);
			//alert(scrName);
			var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
			//alert(innerDoc);
			var sounds = innerDoc.getElementById('anu1Aud');
			sounds.controls = true;
			var source = innerDoc.getElementById('audioSource');
			alert(source.src);
			currAud = source.src ;
			if(Number.isNaN(currAud))
			{
				//alert("true");
			currAud = currAud.substring(currAud.lastIndexOf('/')+1);
			var playingButton = parseInt(currAud.substring((currAud.indexOf('_')+1),(currAud.indexOf('.mp3'))));
			
			playingButton=leftPad(playingButton,2);
			}
			else playingButton = '00';
			//alert("playingButton"+playingButton);
		if(mode == 'com'){
			alert(mode);
	
			try{
			//alert(source.src);
			source.src = "audio/Anu"+ scrAnuvakam+mode+".mp3";
			//alert(source.src);
				}
			catch(err){
				console.log("In catch");
				// document.getElementById("error").innerHTML = err.message+"Please contact Subbaya Shastry garu";
			}
		
		}
		else{
			//alert(mode);
	
			try{
				source.src = "audio/Anu"+ scrAnuvakam+mode+"_"+playingButton+".mp3";
				}
			catch(err){
				console.log("In catch");
				 document.getElementById("error").innerHTML = err.message+"Please contact Subbaya Shastry garu";
			}
		
		}
		
				
			if(!sounds.paused)
				{
					sounds.pause();								
				}
			//	alert(source.src);
			sounds.load();
			try{
			sounds.play();
			}catch(err)
			{
				console.log("Yamini");
			}
			 document.getElementById("error").innerHTML = "Please contact Subbaya Shastry garu";
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
		var scrAnuvakam = scrName.substring(10,12);
		var scr = "namakamAnu" + scrAnuvakam + getLanguage() + tMode+".html";
		var iframe = document.getElementById("anu");
		document.getElementById("anu").src = scr;
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
		var iframe = document.getElementById("anu");
		var scrName = document.getElementById("anu").src;// "namakamAnu" + anuvakamNum + getLanguage() + getTextMode()+".html";
		scrName = scrName.substring(scrName.lastIndexOf('/')+1);
		var scrAnuvakam = scrName.substring(10,12);
		var scr = "namakamAnu" + scrAnuvakam + lang + getTextMode()+".html";
		var iframe = document.getElementById("anu");
		document.getElementById("anu").src = scr;
		document.getElementById("lanList1").style.display = "none";
		document.getElementById("lanList2").style.display = "none";
		document.getElementById("lanList3").style.display = "none";	
		document.getElementById("lanList4").style.display = "none";			
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
		var divId = document.getElementById("anu1");
		var iframe = document.getElementById("anu");
		var scrName = "namakamAnu" + anuvakamNum + getLanguage() + getTextMode()+".html";
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
			namakam.style.left = "25px"; 
			menu.src = "images/close.png"
			namakam.style.backgroundColor = "#20B2AA";	
		}
		else{
			namakam.style.left = "-250px";
			menu.src = "images/menu.png"
		}
	}
	
	function moveAnuText(){
			var Tmenu = document.getElementById("telugu");
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
	function openLanguage(listID){		 
		const myElement = document.getElementById(listID);
		for (let i = 0; i < myElement.children.length; i++) {
			var listClass = myElement.children[i].className ;
			if (listClass != ''){
				var list = document.getElementsByClassName(listClass)[0];
				for (let j = 0; j < list.children.length; j++) {
					if(document.getElementById(list.children[j].id).style.display == "block")
						document.getElementById(list.children[j].id).style.display = "none";
					else
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
				if(document.getElementById(list.children[j].id).style.display == "block")
						document.getElementById(list.children[j].id).style.display = "none";
					else
						document.getElementById(list.children[j].id).style.display = "block";
				}
			}
		}
	}
	
	function openMode(listID){		 
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
	}
	 
	function inActiveButtonColor(buttonId){
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
	}
	