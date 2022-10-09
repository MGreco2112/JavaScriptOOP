let dog = {
    name: "Holly",
    numLegs: 4
  };

//access properties of object

console.log(dog.name);
console.log(dog.numLegs);

//created method within object
//the "this" keyword does not work in an ES6 function
dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => {
      return "This dog has " + dog.numLegs + " legs."
    }
  };
  
  dog.sayLegs();

  dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  //created constructor for Dog class
  function Dog() {
    this.name = "Holly",
    this.color = "Yellow",
    this.numLegs = 4
  }

  //constructed Dog object

  let hound = new Dog();

  // created new constructor that takes arguments to assign values to instantiated object

  function Dog(name, color) {
    this.name = name,
    this.color = color,
    this.numLegs = 4
  }

  let terrier = new Dog("Holky", "Black");


  //demonstrated the functionality of the instanceof keyword in JavaScript

  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House(3);
  
  myHouse instanceof House;


  //utilized the .hasOwnProperty method to add the properties to the ownProps array
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  //utilized the Object.prototype field to give all Objects of that type a default value

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

  //utilized .hasOwnProperty to filter between propertites within instance of Dog object as ownProperties or prototypeProperties

  // function Dog(name) {
  //   this.name = name;
  // }
  
  // Dog.prototype.numLegs = 4;
  
  // let beagle = new Dog("Snoopy");
  
  // let ownProps = [];
  // let prototypeProps = [];
  
  // // Only change code below this line
  
  // for (let property in beagle) {
  //   if (beagle.hasOwnProperty(property)) {
  //     ownProps.push(property);
  //   } else {
  //     prototypeProps.push(property);
  //   }
  // }

  
