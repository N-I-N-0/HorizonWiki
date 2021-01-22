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
		onchange: 'updateRawInput()',
		onkeyup: 'updateRawInput()'
	})
);
var rawInput = document.getElementById("rawReggieInput");
rawInput.style.borderColor = "black"; 
rawInput.style.borderStyle = "solid"; 
$(div).append("<br>");


function parseThoseSettings() {
	//load settings into a var, remove text from page and prepare for adding usable settings
	


	addDualBox("a", "b");
	addDualBox();
	
}

function updateEverything() {
	
}


function addDualBox(text1 = "", text2 = "", start = 17, end = 17) {
	label1 = $("<label>");
	label2 = $("<label>");
	leftInput = $('<input>', {
		type: 'radio',
		name: 'dualradio' + dualBoxes.length,
		checked: 'true',
		onchange: 'updateEverything()',
		onkeyup: 'updateEverything()'
	});
	rightInput = $('<input>', {
		type: 'radio',
		name: 'dualradio' + dualBoxes.length,
		onchange: 'updateEverything()',
		onkeyup: 'updateEverything()'
	});
	label1.append(text1);
	label1.append(leftInput);
	label2.append(rightInput);
	label2.append(text2);
	
	$(div).append(label1);
	$(div).append(label2);
	$(div).append("<br>");
	
	dualBox = {
		bitStart : start,
		bitEnd   : end,
		left     : leftInput,
		right    : rightInput
	};

	//dualBoxes[0].left.prop("checked"));
	//dualBoxes[0].right.prop("checked", true));
	
	dualBoxes.push(dualBox);
}

/*int getNybbleValue(u32 settings, int fromNybble, int toNybble) {	 //Made that function because i wanted to, even if it's kinda useless. So shut up Meatball/CLF78
	int numberOfNybble = (toNybble  - fromNybble) + 1;               //gets how many nybbles are used for the process (example: nybbles 4-6 -> there's nybbles 4, 5 and 6 used -> numberOfNybble = 3) 
	int valueToUse = 48 - (4 * toNybble);                            //gets the value to use with the bitshift at the end 
	int fShit = pow(16, numberOfNybble) - 1;                         //gets the value to use with the "&" operator at the end 
	return ((settings >> valueToUse) & fShit);                       //uses everything to make the nybble value 
}*/
function nybbleToBit(first, second) {
	return [first*4-3, second*4];
}


function updateRawInput() {
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