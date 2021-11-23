		function anu1TeluguPrint(num)
			{
				
				//appending the parameter to generate the ids for audio and button.
				var audioId = "sound" + num;
				var buttonId = "button" + num;
				var audioEle = document.getElementById(audioId);
				var buttonEle = document.getElementById(buttonId);
				
			
				
				var curBut; 
				var curButId;
				
				var sounds = document.getElementsByTagName('audio');
				
				

			
				 //pause all the audios before starting the new audio.
				for(var i = 0; i < sounds.length; i++)
				{	
					if(!sounds[i].paused)
					{
						alert("pausing");
						sounds[i].pause();
						sounds[i].currentTime = 0;
						curBut = "button" + i;
						alert(curBut);
						alert("Changing the color to white");
						//curButId = document.getElementById(curBut);
						document.getElementById(curBut).style.color = "#fff";
						document.getElementById(curBut).style.fontSize   ="16px";
					}
				}
				
			
				//on click chnaging the color to green nd font size is increased.
				
				//buttonEle.style.color = "#086D1B";
				
					document.getElementById(buttonId).style.color = "#086D1B";
					buttonEle.style.fontSize   ="20px";		
					buttonEle.style.border = "none";
				alert("playing");
				//play the audio.
				audioEle.play();
				
				//after the audio is played change the font to previous color n font. And switch to next line.
				
				audioEle.onended = function() {
					buttonEle.style.color = "#fff";
					buttonEle.style.fontSize   ="16px";
					num = +num + 1;
				
					if( num < 3)
					anu1TeluguPrint(num);
				}
					
			}
			
			function showDiv(anuvakam){

			var divId = document.getElementById(anuvakam);
			alert("infun");
			alert(divId);
			divId.style.visibility = 'visible';
				alert(divId.style.visibility);
		}

			
			 