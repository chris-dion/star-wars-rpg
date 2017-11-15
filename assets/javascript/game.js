//create a character class with hp, attack, and counter atk stats
var characters = {
//initializ all the characters
	//low hp, very high attack, low counter
	vader: {
		hp: 10,
		base_atk: 4,
		atk: 4,
		cnter_atk: 2
	},

	//medium hp, high attack, low counter
	luke: {
		hp: 15,
		base_atk: 3,
		atk: 3,
		cnter_atk: 1
	},

	// high hp, medium attack, low counter
	sidius: {
		hp: 20,
		base_atk: 1,
		atk: 1,
		cnter_atk: 1
	},

	//high hp, low attack, high counter
	yoda: {
		hp: 23,
		base_atk: 1,
		atk: 1,
		cnter_atk: 3
	},
};

//name of the players character
var player_char = "";

//will hold the name of the players enemies
var enemies_array = [""];

//the name of the enemy that the player chose to fight
var defender = "";

//number of times that the player wins a fight. 3 wins means the player wins the game
var num_victories = 0;

//creates a div so the enemy can be placed in the proper place
function create_defender (enemy){
	$("#defender")
		.html("<div id=\""+enemy+"\"><p>"+enemy+"</p><img src=\"assets/images/"+enemy+".jpeg\"></div>");
}

//this calculates each bout of fighting and checks for wins or lose conditions
function fight (){
	//object variable to refence the current defenders stats
	var defend = characters[defender];

	//object variable to refence the players characters stats
	var player = characters[player_char];

	//change player's hp by the current defenders counter attack stat
	player["hp"] -= defend["cnter_atk"];

	//change the current defender hp based on the players attack stat
	defend["hp"] -= player["atk"];

	//change the players attack stat by adding the players base attack to the grand total
	player["atk"] += player["base_atk"];

	//if the player hp is less then or equal to zero
	if (player["hp"] <= 0){
		// remove the players icon image and replace it with a game over message
		$( "div" ).remove( "#"+ player_char);
		$("#your_char")
			.html("<div id=\"defeat\"><p>You are Dead!</p></div>");
	//else if the defender hp is less than or equal to zero
	}else if(defend["hp"] <= 0){
		//increment number of victories
		num_victories++;
		//if number of victories equal 3 than
		if (num_victories == 3){
			//remove the defender icon and display a victory message
			$( "div" ).remove( "#"+defender);
			$("#defender")
			.html("<div id=\"victory\"><p>You Win!</p></div>");
		//else remove the defender icon from the page
		}else{
			$( "div" ).remove( "#"+defender);
		}
		//set defender name to "" to allow the player to select the next defender
		defender = "";
	}
}



//create a button for the luke icon for the player to set the players character as luke.
document.getElementById("luke").onclick = function(){
	player_char = "luke";

	//list enemies in the array
	enemies_array = [ "vader", "yoda", "sidius"];

	//remove all characters icons from the player choice menu
	$( "div" ).remove( "#luke");
	$( "div" ).remove( "#yoda");
	$( "div" ).remove( "#vader");
	$( "div" ).remove( "#sidius");

	//put the player character icon in the proper place in the page
	$("#your_char")
		.html("<div id=\""+player_char+"\"><p>Luke Skywalker</p><img src=\"assets/images/luke.jpeg\"></div>");

	//loop through the enemies array and adding divs under the enemies section of the page
	for(var i = 0; i<enemies_array.length; i++){
		console.log(i);
		$("#opponent_" + i)
		.html("<div id=\""+enemies_array[i]+"\"><p>"+enemies_array[i]+"</p><img src=\"assets/images/"+enemies_array[i]+".jpeg\"></div>");
	}
}

//create a button for the yoda icon for the player to set the players character as yoda.
document.getElementById("yoda").onclick = function(){
	player_char = "yoda";

	//list enemies in the array
	enemies_array = [ "luke", "vader", "sidius"];

	//remove all characters icons from the player choice menu
	$( "div" ).remove( "#luke");
	$( "div" ).remove( "#yoda");
	$( "div" ).remove( "#vader");
	$( "div" ).remove( "#sidius");

	//put the player character icon in the proper place in the page
	$("#your_char")
		.html("<div id=\""+player_char+"\"><p>yoda</p><img src=\"assets/images/yoda.jpeg\"></div>");

	//loop through the enemies array and adding divs under the enemies section of the page
	for(var i = 0; i<enemies_array.length; i++){
		console.log(i);
		$("#opponent_" + i)
		.html("<div id=\""+enemies_array[i]+"\"><p>"+enemies_array[i]+"</p><img src=\"assets/images/"+enemies_array[i]+".jpeg\"></div>");
	}
}

//create a button for the vader icon for the player to set the players character as vader.
document.getElementById("vader").onclick = function(){
	player_char = "vader";

	//list enemies in the array
	enemies_array = [ "yoda", "luke", "sidius"];

	//remove all characters icons from the player choice menu
	$( "div" ).remove( "#luke");
	$( "div" ).remove( "#yoda");
	$( "div" ).remove( "#vader");
	$( "div" ).remove( "#sidius");

	//put the player character icon in the proper place in the page
	$("#your_char")
		.html("<div id=\""+player_char+"\"><p>Darth Vader</p><img src=\"assets/images/vader.jpeg\"></div>");

	//loop through the enemies array and adding divs under the enemies section of the page
	for(var i = 0; i<enemies_array.length; i++){
		console.log(i);
		$("#opponent_" + i)
		.html("<div id=\""+enemies_array[i]+"\"><p>"+enemies_array[i]+"</p><img src=\"assets/images/"+enemies_array[i]+".jpeg\"></div>");
	}
 }

//create a button for the sidius icon for the player to set the players character as sidius.
document.getElementById("sidius").onclick = function(){
	player_char = "sidius";

	//list enemies in the array
	enemies_array = [ "vader", "yoda", "luke"];

	//remove all characters icons from the player choice menu
	$( "div" ).remove( "#luke");
	$( "div" ).remove( "#yoda");
	$( "div" ).remove( "#vader");
	$( "div" ).remove( "#sidius");

	//put the player character icon in the proper place in the page
	$("#your_char")
		.html("<div id=\""+player_char+"\"><p>Darth Sidius</p><img src=\"assets/images/sidius.jpeg\"></div>");

	//loop through the enemies array and adding divs under the enemies section of the page
	for(var i = 0; i<enemies_array.length; i++){
		console.log(i);
		$("#opponent_" + i)
		.html("<div id=\""+enemies_array[i]+"\"><p>"+enemies_array[i]+"</p><img src=\"assets/images/"+enemies_array[i]+".jpeg\"></div>");
	}
}

//creates a button that allows the player to decide who they want to fight
document.getElementById("opponent_0").onclick = function(){

	//if there aren't a already existing defender
	if (defender === ""){

		//get the name of the character
		defender = enemies_array[0];

		//remove that characters icon
		$( "#"+defender ).hide();

		//calls a function that places the characters icon in the defender section
		create_defender(defender);
	}
}

//creates a button that allows the player to decide who they want to fight
document.getElementById("opponent_1").onclick = function(){

	//if there aren't a already existing defender
	if (defender === ""){

		//get the name of the character
		defender = enemies_array[1];

		//remove that characters icon
		$( "#"+defender+"" ).hide();

		//calls a function that places the characters icon in the defender section
		create_defender(defender);
	}
}

//creates a button that allows the player to decide who they want to fight
document.getElementById("opponent_2").onclick = function(){

	//if there aren't a already existing defender
	if (defender === ""){

		//get the name of the character
		defender = enemies_array[2];

		//remove that characters icon
		$( "#"+defender+"" ).hide();

		//calls a function that places the characters icon in the defender section
		create_defender(defender);
	}
}