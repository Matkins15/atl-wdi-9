console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(name, creatureType) {
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;
  this.name = name;
  this.creatureType = creatureType;

  this.cry = function(){
    this.smallerTummy = this.foodInTummy - 1;
    console.log(`${this.smallerTummy}`);
    console.log(`WAHH ${this.name} is hungry`);

    function hungerTimer() {
        this.cry = setInterval(function(){
          console.log(`${this.name}`); }, 6000);
    }; hungerTimer();
  };

  this.puke = function(){
    this.smallerTummy = this.foodInTummy - 1;
    console.log(`${this.smallerTummy} i can't afford to lose anymore food`);

    function sickTimer() {
        this.puke = setInterval(function(){
          console.log(`${this.name}`); }, 10000);
    }; sickTimer();
  };

  this.yawn = function(){
    this.nosleep = this.restedness - 1;
    console.log(`${this.name} has a current restedness of: ${this.nosleep}`);

    function yawnTimer() {
        this.puke = setInterval(function(){
          console.log(`${this.name}`); }, 20000);
    }; yawnTimer();
  };

};


//create new Tamagotchis
var tamagotchi1 = new Tamagotchi("Matt", "Beast");
var tamagotchi2 = new Tamagotchi("Lin", "Flower");
var tamagotchi3 = new Tamagotchi("Harry", "Joker");
var tamagotchi4 = new Tamagotchi("Ray", "Lasagna");


//test out your Tamagotchies below via console.logs
// var myVar = this.cry;
//
// function myStartFunction() {
//     this.cry = setInterval(function(){ console.log(`${this.name}`); }, 2000);
// }
