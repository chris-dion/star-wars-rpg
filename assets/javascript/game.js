//create a character class with hp, attack, and counter atk stats

//initializ all the characters
function start_game {
	//low hp, very high attack, low counter
	var vader = {
		hp: 10;
		atk: 4;
		cnter_atk: 2;
	}

	//medium hp, high attack, low counter
	var luke = {
		hp: 15;
		atk: 3;
		cnter_atk: 1;
	}

	// high hp, medium attack, low counter
	var sidius = {
		hp: 20;
		atk: 1;
		cnter_atk: 1;
	}

	//high hp, low attack, high counter
	var yoda = {
		hp: 23;
		atk: 1;
		cnter_atk: 3;
	}
}

//function for a single turn in combat given your character and your chosen enemy
	//opponent loses life equal to the player's atk stat    (change objects stats and how the data is displayed)
	//player loses life equal to the opponents cntr stats   (change objects stats and how the data is displayed)
	//check for deaths
		//if player dies then display game over
		//if oponnent is dead
			//if all enemies are dead
				//display player wins
			//
		//
	//end combat
