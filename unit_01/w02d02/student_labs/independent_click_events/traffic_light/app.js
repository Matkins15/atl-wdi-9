window.onload = function() {
  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#goButton');

  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');
  var goLight = document.querySelector('#goLight');

  stopButton.addEventListener('click', trafficLight.illuminateRed);
  slowButton.addEventListener('click', trafficLight.illuminateYellow);
  goButton.addEventListener('click', trafficLight.illuminateGreen);
}

var trafficLight = {
  illuminateRed: function(event) { // the object trafficLight is illuminating red when clicked
    trafficLight.clearLights(); // trafficLight is cutting off when another light is clicked

    stopLight.style.background = 'red';
  },

  illuminateYellow: function(event) { //initial bug made slow light blue
    trafficLight.clearLights(); // yellow light does not cut off when another light is triggered

    slowLight.style.background = 'yellow'; // changed color from yellow from blue
  },

  illuminateGreen: function(event) { //no color would show once go button was triggered
    trafficLight.clearLights();

    goLight.style.background = 'green';
},
  
  clearLights: function() {
  stopLight.style.background = 'black';
  slowLight.style.background = 'black';
  goLight.style.background = 'black';
  }
}
