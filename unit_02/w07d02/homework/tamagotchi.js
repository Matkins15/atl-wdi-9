console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi() {
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function(){
    var smallerTummy = this.foodInTummy - 1;
    console.log(smallerTummy);
    console.log("WAHH!!!");
  };
};


//create new Tamagotchis
var tamagotchiMatt = new Tamagotchi();
var tamagotchiAylin = new Tamagotchi();

console.log(tamagotchiMatt);
console.log(tamagotchiAylin);

tamagotchiMatt.cry();
tamagotchiAylin.cry();

//test out your Tamagotchies below via console.logs
