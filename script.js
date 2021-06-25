//is het nummer hoger dan 100?

const numberCheck = function(number) {
   if (number > 100) {
       return true;
   }  else {
   return false;
   }
}

console.log (numberCheck(99));
console.log (numberCheck(101));

//Bouncer Brenda
//De leeftijd doe je als eerste want dat is de eerste voorwaarde die je stelt
//om binnen te komen. Als de functie hieraan voldoet 

const bouncerBrendaReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfVisitor, 
) {
    if (ageOfVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};


console.log(bouncerBrendaReaction(2000, 0, 15)); 
console.log(bouncerBrendaReaction(2000, 1999, 50)); 
console.log(bouncerBrendaReaction(2000, 2000, 15)); 
console.log(bouncerBrendaReaction(2000, 2999, 30)); 

const averageNumber = function(
    numbera,
    numberb,
    numberc,
    numberd,
    numbere,
){
        const total = numbera + numberb + numberc + numberd + numbere;
        const average = total / 5;
        return average;
    };


    console.log(averageNumber(10, 10, 8, 6, 6));

