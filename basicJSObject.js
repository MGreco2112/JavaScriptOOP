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

  //explored the use of the Object.constructor property

  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }

  //modified elements of the Dog.prototype in bulk by redefining the prototype

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs : 4,
    eat: function() {
      console.log("*scarf scarf burp*");
    },
    describe: function() {
      console.log(`My name is ${this.name}`)
    }
  };


  // When reassigning the Prototype Object, remember to bring the Constructor field value into the new Object

  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  //Utilizing the Object.prototype.isPrototypeOf(instance) to identify the parent Object of the instance

  function Dog(name) {
    this.name = name;
  }
  
  let pupper = new Dog("Snoopy");

  //Using Object.prototype.isPrototypeOf(constructor.prototype) to compare Supertype Object to subtype Object
  
  // Only change code below this line
  
  // Dog.prototype.isPrototypeOf(pupper);

  // function Dog(name) {
  //   this.name = name;
  // }
  
  // let beagle = new Dog("Snoopy");
  
  // Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // // Fix the code below so that it evaluates to true
  // Object.prototype.isPrototypeOf(Dog.prototype);


//inheritance is used in JS through the Object.create(Constructor.prototype) method

  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let moose = Object.create(Animal.prototype); // Change this line


