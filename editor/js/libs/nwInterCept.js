socket.on('connSuccess', function(data) {
	if(userID == null){
		userID = data.userID;
		myRoom = data.userRoom;
		console.log("Connection handshake successful.");
		console.log(data);
		/*Previous code to subscribe to a new room, disabled for now, all users so go same room
		App.socket.emit('subscribe', {
			roomName: myRoom,
			userID: myID,
		});*/
	}
	else{
		console.log("Something went wrong !");
	}
});
