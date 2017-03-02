window.onload = function() {
  
 var button = document.querySelector("button");

button.addEventListener("click", function(event){
  console.log("Executed in the callback function.");
});
}
