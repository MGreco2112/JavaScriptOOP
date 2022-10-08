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