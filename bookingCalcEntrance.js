var range;
var compute;
var rate;

function ageRange(age){
	if (age >= 0 && age <= 3){
		range = "Toddler";
		compute = 0;
		console.log(range + " is " + 0 + " pesos.");
    }
	else if (age >= 4 && age <=12){
		range = "Child";
		console.log(range + " is " + 400 + " pesos.");
    }
	else if (age >= 12 && age <60){
		range = "Adult";
		console.log(range + " is " + 1200 + " pesos.");
    }
	else if (age >= 60){
		range = "Senior";
		console.log(range + " is " + (1200 - 200) + " pesos.");
    }
};

console.log(ageRange(45));