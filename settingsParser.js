//prepare lists
var eventId2 = 0;		//Nybble 1-2
var eventId1 = 0;		//Nybble 3-4
var dependencies = [];
var dualBoxes = [];
var checkBoxes = [];
var lists = [];
var values = [];
//var externals = [];


function parseThoseSettings() {
	//load settings into a var, remove text from page and prepare for adding usable settings
	var div = document.getElementsByClassName("spriteSettings")[0];
	var xml = div.innerHTML;
	div.innerHTML="";
	var reggieDiv = document.createElement('div');
	reggieDiv.classList.add('reggieDiv');
	div.appendChild(reggieDiv)




	addDualBox();
}


function addDualBox(text1 = "", text2 = "", initial = 0) {
	var dualBox = {
	title1   : text1,
	title2   : text2,
	bitStart : 0,
	bitEnd   : 0,
	value    : initial,
	//test : function() {
	//  return this.title1;
	//}
	};
	dualBoxes.push(dualBox);
}

