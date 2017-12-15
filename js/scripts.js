//LOOSE HELPER FUNCTIONS--------------------------
function makePizza(){
  var newPizza = new Pizza("Large");
  console.log(newPizza.size + ", " + newPizza.toppings);
}


//OBJECT DEFINITIONS------------------------------
function Pizza(size) {
  this.size = size;
  this.toppings = ["cheese", "pepperoni"];
}



makePizza();

//FRONTEND BELOW THIS LINE -----------------------
// $(document).ready(function() {
//   $("#FORM").submit(function(event) {
//     event.preventDefault();
//     var input = $("#INPUT").val();
//     var result = input;
//
//     $("#result").text(result);
//
//   });
// });
