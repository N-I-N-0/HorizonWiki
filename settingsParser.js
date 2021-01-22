//prepare lists
var eventId2 = 0;		//Nybble 1-2
var eventId1 = 0;		//Nybble 3-4
var dependencies = [];
var dualBoxes = [];
var checkBoxes = [];
var lists = [];
var values = [];
var externals = [];

var div = document.getElementsByClassName("spriteSettings")[0];
var xml = div.innerHTML;
div.innerHTML="";
var reggieDiv = document.createElement('div');
reggieDiv.classList.add('reggieDiv');
div.appendChild(reggieDiv);
$(div).append(
	$('<input>', {
		type: 'text',
		val: '0000 0000 0000 0000',
		id: 'rawReggieInput',
		//pattern: '[a-fA-F\d]+',
		onchange: 'updateItAllOnChange()',
		onkeyup: 'updateItAllOnChange()'
	})
);
var rawInput = document.getElementById("rawReggieInput");
rawInput.style.borderColor = "black"; 
rawInput.style.borderStyle = "solid"; 

function parseThoseSettings() {
	//load settings into a var, remove text from page and prepare for adding usable settings
	


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





function updateItAllOnChange() {
	if (rawInput.value.replace(/\s+/g, '').length == 16) {
		let re = /[0-9A-Fa-f]{16}/g
		if(!re.test(rawInput.value.replace(/\s+/g, ''))) {
			rawInput.style.borderColor = "red";
		} else {
			rawInput.style.borderColor = "black";
		}
	} else {
		rawInput.style.borderColor = "red";
	}
	rawInput.style.borderStyle = "solid"; 
}