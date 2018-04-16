var div = document.getElementById("my-div");


function changeColor() {
	div.style.backgroundColor = "red";
	div.style.height = "400px";
	div.style.width = "400px" 
	console.log("working");
}


for (var i = 0; i<=100; i+=5) {
	console.log(i);
}

var miata = {
	make: "toyota",
	color: "red",
	doors: 2
};

var fivePointO = {
	make: "ford",
	color: "black",
	doors: 2
};




console.log(miata.color);
console.log(miata.make);
console.log(fivePointO.color);

// Why does this not work

// var dogs = ["boxer", "lab", "husky", "weenie"];

// for (var = i; i<dogs.length; i++) {
// 	console.log(dogs[i]);
// }



var element = document.getElementById("element");
element.textContent += "Go Dubs";
element.style.color = "blue";

// function that puts the user-input value into the document
function change() {
	var text = document.getElementById("text");
	var elementTwo = document.getElementById("element-two")
	elementTwo.textContent = text.value;
	console.log("this is working");
}

// array section
var array = ["String 1", "String 2", "String 3", "String 4", "String 5" ];

// looping array
for (var i = 0; i<array.length; i++) {
	console.log(array[i]);
};

// object 
var object = {
	objectOne: "this is the first object",
	objectTwo: 30,
	objectThree: "true"
};

// logic to push objects onto the document
var firstHeading = document.getElementById("first-heading");
var secondHeading = document.getElementById("second-heading");
var thirdHeading = document.getElementById("third-heading");

firstHeading.textContent = object.objectOne;
secondHeading.textContent = object.objectTwo;
thirdHeading.textContent = object.objectThree;

// array stored in a variable
var variableArray = [
	
	objectOne = {
		propOne: "this is the first object",
		propTwo: 30,
		propThree: "true"
	}, 
	objectTwo = {
		proptOne: "this is the second object",
		propTwo: 31,
		propThree: "false"
	}, 
	objectThree = {
		propOne: "this is the third object",
		propTwo: 32,
		propThree: "null"
	}
];

// loop the array of the object 

for (var i = 0; i < variableArray.length; i++) {
	console.log(variableArray[i]);
}

// Changes font color of entire document to red
document.body.style.color = "red";

