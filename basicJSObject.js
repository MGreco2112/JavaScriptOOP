let dog = {
    name: "Holly",
    numLegs: 4
  };

//access properties of object

console.log(dog.name);
console.log(dog.numLegs);

//created method within object
dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => {
      return "This dog has " + dog.numLegs + " legs."
    }
  };
  
  dog.sayLegs();