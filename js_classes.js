// Create a Dog class. Each dog should have a name and a location.
// Add a speak method that logs "Woof! my name is {name}"
// Add a walk method that accepts two arguments: location (string) and distance (integer)
// Add a display_walks method that console.logs all of the dog's walks
// Add a total_distance method that returns the total distance of all the walks

//Dog class

class Dog {
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.total = []; 

    }
    //speak method
      speak() {
        return(`Woof! my name is ${this.name}`);
    }
    
    //single walk method
      walk(locationNew, distance) {
        this.total.push(`Walked to: ${locationNew} from ${this.location}. Walked: ${distance}km`);
    }
    
    // display all walks method
      display_walks() {
        return(this.total);    
    }
    
    //   total_distance () {
    //     console.log();
    // }

}

let dog1 = new Dog("alfred", "sydney");
let dog2 = new Dog("je t'aime", "balmain")

//invoke speak method
// dog1.speak();

dog1.walk("anandale", 5);
dog2.walk("lilyfield", 2);
dog1.display_walks();
dog2.display_walks();







