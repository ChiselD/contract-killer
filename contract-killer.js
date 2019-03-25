// Explanation of how coding works

// Programming language used is JavaScript

// Scenario is this: You are a real bastard. You make enemies as easy
// as blinking, and people are constantly hiring contract killers to
// take you out. You have an established routine for dealing with these
// assassination attempts. When you find out that there's a contract
// out on you (yet again) you send your trusty spy to find out certain
// pieces of information for you.
// Based on this information, you follow the routine below to take
// care of the situation and save your ass.


// Data in the following section (variables) changes in each case!
//=========================================================
// Your spy returns, bearing the following information:
var assassin = {
	name: "John Q. Smith",
	blackmailable: false,
	achillesHeel: "unknown"
}
var client = {
	name: "Betty Biggins",
	blackmailable: false,
	achillesHeel: "unknown"
}
var contractHasBeenSigned = true;
//=========================================================


function saveMyAss(assassin, client) {
	// The client needs to be eliminated in any case.
	console.log("Attempting to eliminate client.");
	var clientEliminated = eliminate(client);
	if (clientEliminated === true) {
		console.log("Client eliminated!");
		console.log(client.achillesHeel);
		console.log("Now let's see about the assassin...");
	}
	if (contractHasBeenSigned) {
		// The assassin's on the job, uh-oh!
		console.log("Attempting to eliminate assassin.");
		var assassinEliminated = eliminate(assassin);
		if (assassinEliminated === true) {
			console.log("Assassin eliminated!");
			console.log(assassin.achillesHeel);
			success();
		}
	} else {
		console.log("Turns out the contract wasn't official yet.");
		console.log("So, no need to worry about the assassin.");
		success();
	}
}

function eliminate(target) {
	var eliminationResults = false;
	// This array logs the results of each elimination attempt
	var attempts = [
		seduce(target),
		blackmail(target),
		bribe(target),
		kill(target)
	];
	for (let i = 0; i < attempts.length; i++) {
		if (attempts[i] === true) {
			eliminationResults = true;
			break;
		}
	}
	return eliminationResults;
}

function seduce(target) {
	console.log("Attempting seduction...");
	var seduced = false;
	// You get only one try to seduce them - here we go...
	var targetWillpower = Math.ceil(Math.random() * 100);
	var yourSexiness = Math.ceil(Math.random() * 100);
	// Let's see which of you two is more powerful
	if (yourSexiness > targetWillpower) {
		this.achillesHeel = "Seduction worked!";
		seduced = true;
	}
	return seduced;
}

function blackmail(target) {
	console.log("Attempting blackmail...");
	var blackmailed = false;
	if (this.blackmailable) {
		// Let's roll a die to see if your spy could get any dirt.
		var theDirt = Math.ceil(Math.random() * 6);
		// If the die comes up 5 or 6, the spy succeeded!
		if (theDirt >= 5) {
			this.achillesHeel = "Blackmail worked!";
			blackmailed = true;
		}
	}
	return blackmailed;
}

function bribe(target) {
	console.log("Attempting bribery...");
	var bribed = false;
	// What amount of money would be enough to tempt the target?
	var targetBreakingPoint = Math.ceil(Math.random() * 10000);
	// What amount of money do you have in the bank?
	var cashOnHand = Math.ceil(Math.random() * 10000);
	if (cashOnHand >= targetBreakingPoint) {
		this.achillesHeel = "Bribery worked!";
		bribed = true;
	}
	return bribed;
}

function kill(target) {
	console.log("Attempting murder...");
	var dead = false;
  	// Let's see if fate is on your side today.
  	var opportunity = Math.random();
  	var luck = Math.random();
	// If both factors are above 50%, you succeed!
	if (opportunity > .5 && luck > .5) {
		this.achillesHeel = "Murder worked!";
		dead = true;
	}
	return dead;
}

function success() {
	console.log("All is well!");
	console.log("Until you cross somebody else, that is...");
	return 0;
}

function failure() {
	console.log("Despite your best efforts, you couldn't worm your way out of this one.");
	console.log("Guess that means it's time to flee the country and change your name.");
	console.log("Don't act so surprised.");
	console.log("You knew your evil ways would catch up with you sooner or later.");
	return 0;
}

saveMyAss(assassin, client);

//====================