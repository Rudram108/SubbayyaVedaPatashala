		/* Om
		This function generates the source of the audio based on anuvakam and line number. 
		The source is also based on word to word learning or line by line learning.
		
		Also the current playing line of anuvakam is decided based on audio being palyed currently.
		Audio and button are named such that they show the line number they are associated to.
		*/
	function anu1TeluguPrint(anuNum, buttonNum){
				//alert(anuNum);
				//alert(buttonNum);
		var buttonId = "button" + buttonNum;
		var buttonEle = document.getElementById(buttonId);
		var curBut; 
		var currAud;
		var prevNum;
		var targetLength = 2;
		var sourceAud = "audio/Anu" + anuNum +getLearningMode()+"_" + buttonNum +".mp3";
		var sounds = document.getElementById('anu1Aud');
		sounds.controls = true;
		var source = document.getElementById('audioSource');
		currAud = source.src ;
		currAud = currAud.substring(currAud.lastIndexOf('/')+1);
		var playingButton = parseInt(currAud.substring((currAud.indexOf('_')+1),(currAud.indexOf('.mp3'))));
		if(Number.isInteger(playingButton))	
			{
				playingButton=leftPad(playingButton,targetLength);
				curBut = "button" + playingButton;
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
				
		if(!sounds.paused)
				{
					sounds.pause();								
				}
				
					//buttonEle.style.color = "#086D1B";
			buttonEle.style.color = "blue";
		var smalls = buttonEle.getElementsByTagName('small');
		for(var i = 0; i < smalls.length; i++){
						//smalls[i].style.color = '#1C37B6';
				smalls[i].style.color = '#dc143c';
		}
		var bolds = buttonEle.getElementsByTagName('b');
		for(var i = 0; i < bolds.length; i++){
			bolds[i].style.color = '#241CB6';
		}
				
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
			var numberOfButtons = ele.getElementsByTagName('button').length;
			//alert(numberOfButtons);
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
		if(mode == 'ww'){
			document.getElementById("llList1").style.color = "red";
		}else{
			document.getElementById("llList2").style.color = "red";
			
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
			namakam.style.left = "0"; 
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
		if(getLearningMode() == 'ww'){
			document.getElementById("llList1").style.color = "red";
		}else{
			document.getElementById("llList2").style.color = "red";
			
		}	
		
	}
	
			 
	