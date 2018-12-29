var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	input.value = "";
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	li.appendChild(button);
	ul.appendChild(li);
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listEvent(event) {
	var {tagName,classList,parentNode} = event.target
	if (tagName === "SPAN") {
		classList.toggle("done");
	} else if (tagName === "BUTTON") {
		parentNode.remove();
	}
	
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", listEvent);


