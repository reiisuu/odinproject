/* const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function() {
        
    }
}

console.log(myObject.property);
console.log(myObject.otherProperty);
console.log(myObject["obnoxious property"]); */

/* const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "jen",
    marker: "O"
}

function getWinner(coin) {
    if (coin == 1) {
        console.log(`Winner: ${playerOne.name} + ${playerOne.marker}`);
    } else {
        console.log(`Winner: ${playerTwo.name} + ${playerTwo.marker}`);
    }
}

getWinner(100); */




const car = {
  make: "Volkswagen",
  model: "Golf",
  year: 2026,
  color: "blue",
  priceUSD: 40000,

    getDiscount: function(discountPercentage) {
        const discountedPrice = 1 - discountPercentage / 100;
        this.priceUSD = this.priceUSD * discountedPrice; 
    },

    getSummary() {
        return `${this.year} - ${this.make} - ${this.model} - ${this.priceUSD}`;
    },
};

console.log(car.getSummary());
console.log(car.getDiscount(25));
console.log(car.getSummary());


