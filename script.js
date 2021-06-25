//is het nummer hoger dan 100?

const numberCheck = function(number) {
   if (number > 100) {
       return true;
   }  else {
   return false;
   }
};

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

    //Dus eerst toekennen verschillende parameters, dan wil je alles bij elkaar optellen. daar maak je een const voor.
    //dan wil je het totaal delen door het aantal parameters om het gemiddelde te weten
    //dan wil je dat de hij de average terug stuurt.
    //uitkomst moet gelogd worden met de naam van de functie gevolgd door parameters (cijfers in dit geval)


//-------------------

//Function declaration
function doSquareCalculation(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}

//Function expression
const doSquareCalculation = function(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

//Shorter function expression
const doSquareCalculation = function(number1, number2) {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};

//Arrow function
const doSquareCalculation = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

//Shorter arrowfunction
const doSquareCalculation = (number1, number2) => {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};

//----------------Calling functions

const scream = function () {
    console.log("Aaaaaaa!");
  };
  
  // Calling scream outside of a function
  scream();
  
  // Here we call scream inside of a function
  const makeNoise = function () {
    scream();
  };
  
  makeNoise();

//return values of a function inside a function

const add = function(numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which is outside of a function.
const eight = add(3, 5);
console.log(eight);

const doCalculation = function() {
    // The add function returns to this line, which is inside of a function.
    const six = add(2, 4);
    console.log(six);
};

doCalculation();

//Debugging complex functions with logging results to see whats happening and in what order
const makePositive = function(number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function(number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function(number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));

//Hey Kiddo 
const isAdult = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greet = function(age) {
    if (isAdult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greet(65)); // "Hello there"
console.log(greet(10)); // "Hey kiddo"

// We can make this a lot shorter by using arrow functions, the ternary if
// statement and returning booleans immediately. You don't need to write it
// this short, but it's good to see that it's possible.

const isAdultShort = age => age >= 18;

const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

console.log(greetShort(65)); // "Hello there"
console.log(greetShort(10)); // "Hey kiddo"

//VAT exercise 1

const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

//VAT exercise 2

const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]



