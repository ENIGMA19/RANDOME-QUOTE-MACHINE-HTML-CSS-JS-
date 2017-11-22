var quotes = [
	"Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind. -Dr. Seuss",
	"Imitation is suicide.-Ralph Waldo Emerson",
	"Flatter yourself critically.-Willis Goth Regier",
	"Do what you can, with what you have, where you are.-Theodore Roosevelt",
	"Be yourself; everyone else is already taken.-Oscar Wilde",
	 "To the man who only has a hammer, everything he encounters begins to look like a nail.-Abraham Maslow",
	 "Watch your thoughts, they become words.Watch your words, they become actions.Watch your actions, they become habits.Watch your habits,they become character.Watch your character,it becomes your destiny. :Lao-Tze " ];                                                                                                 


function quote() {
	var random = Math.floor(Math.random() * 7);
	document.getElementById('title').value = quotes[random];

	 var tweetQuote = quotes[random];
  
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote;
  $('#twitter-share-button').attr('href', tweetQuote);
	
}
function displaydate()
{
var d = new Date();
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById('daydisp').innerHTML=days[d.getDay()]+"|"+d.getDate()+"/"+[d.getMonth()+1]+"/"+[d.getFullYear()];

}
function displaytime()
{
var today = new Date();
var m=today.getMinutes();
m=checkTime(m);
var s=today.getSeconds();
s=checkTime(s);

document.getElementById('timedisp').innerHTML=today.getHours()+":"+m+":"+s;
var t = setTimeout(function(){displaytime()},1000);
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
	
}

