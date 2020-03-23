<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"></link>

// arguments object - no longer with arrow functions

const add = (a, b) => {
//  console.log(arguments);   
 return a + b;

};

console.log(add(51, 1))

//this keyword - no longer boundlive-serapp

const user = {
    name: 'Matthew',
    cities: ['Wells, Bristol, Beijing'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city);
    } 
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());