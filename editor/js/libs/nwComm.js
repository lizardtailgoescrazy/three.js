var socket = io.connect('http://arbiter:8080');
var userID = null;
var myRoom = null;
var bubble = null;

function connectToServer(){
	if(io){
		socket = io.connect('http://arbiter:8080');
		if(!socket){
			alert("Unable to connect to server !");
			return false;
		}
		return true;
	}
	else{
		alert("Socket.io library was not initiated.");
		return false;
	}
}

function sendToServer(type, obj){
	if(true){
		type = type + "";
		var prepedMsg = {
					from: userID,
					type: "init",
					stuff: obj
		};
		socket.emit(type, prepedMsg);
	}
}

function createBubble(content){
	bubble = document.createElement("div");
	var p = bubble.createElement("p");
	p.style.color='red';
	p.style.padding='1em';
	p.style.background="white";
	p.style.border="solid 3px black";
	p.style.margin="auto";
	p.createTextNode(content);
}