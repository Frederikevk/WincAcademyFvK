
const age = 18;
const isFemale = true;
const driverStatus = "bob";



if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}
