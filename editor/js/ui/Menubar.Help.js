Menubar.Help = function ( signals ) {
	var bubble = null;
	
	function prepBubble()
	{
		bubble = document.createElement("div");
		var p = document.createTextNode("You are not in control");
		bubble.appendChild(p);
		var panel = $("#Panel");
		var panelPos = panel.position();

		bubble.style.position = "absolute";
		bubble.style.top = "32px";
		bubble.style.left = "0px";
		bubble.style.padding = "2em";
		bubble.style.margin = "auto";
		bubble.style.color = "white";
		bubble.style.display = "block";
		//bubble.style.border-radius = "0.25em";
		bubble.style.background = "rgba(0,0,0,0.6)";
		document.body.appendChild(bubble);
	}
	
	function makeBubble(){
		if(bubble != null){
			bubble.style.display = "block";
		}
	}
	
	function popBubble(){
		if(bubble != null){
			bubble.style.display = "none";
		}
	}


	var container = new UI.Panel();
	container.setClass( 'menu' );
	container.onMouseOver( function () { options.setDisplay( 'block' ) } );
	container.onMouseOut( function () { options.setDisplay( 'none' ) } );
	container.onClick( function () { options.setDisplay( 'block' ) } );

	var title = new UI.Panel();
	title.setTextContent( 'Control' ).setColor( '#666' );
	title.setMargin( '0px' );
	title.setPadding( '8px' );
	container.add( title );

	//

	var options = new UI.Panel();
	options.setClass( 'options' );
	options.setDisplay( 'none' );
	container.add( options );

	// source code

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Take control' );
	option.onClick( function () {
		options.setDisplay( 'none' );
		cameraControl = true;
		popBubble();
	});
	options.add( option );

	// about

	var option = new UI.Panel();
	option.setClass( 'option' );
	option.setTextContent( 'Return control' );
	option.onClick( function () {
		options.setDisplay( 'none' );
		cameraControl = false; 
		sendToServer("returningControl", null);
		makeBubble();
	} );
	options.add( option );

	//
	
	prepBubble();
	
	/*NETWORK INTERFACE*/
	socket.on('youAreAdmin', function(data) {
		alert("You are the admin of this room.");
		console.log(data);
		amIAdmin = true;
		cameraControl = true;
		popBubble();
		bubble = null;
	});

	return container;

}
