// Add your Circle class here
// class Bird {
//     #phrase;
  
//     constructor(name) {
//       this.name = name;
//     }
  
//     set phrase(phrase) {
//       this.#phrase = phrase;
//     }
  
//     get speak() {
//       return `${this.name} says ${this.#phrase || "squawk"}`;
//     }
//   }
  
//   const daffy = new Bird("Daffy");
//   daffy.speak; // => 'Daffy says squawk'
//   daffy.phrase = "it's rabbit season!";
//   daffy.speak; // => 'Daffy says it's rabbit season!'

const pi = Math.PI

class Circle {
  constructor( radius ) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter( diameter ) {
    this.radius = diameter / 2
  }

  get circumference() {
    return ( this.radius * 2 ) * pi
  }

  set circumference( circumference ) {
    this.radius = circumference / ( pi * 2 )
  }

  get area() {
    return pi * ( this.radius * this.radius )
  }

  set area( area ) {
    this.radius = Math.sqrt( area / pi )
  }
}