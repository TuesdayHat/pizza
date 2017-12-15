//LOOSE HELPER FUNCTIONS--------------------------
function makePizza(){//testing purposes
  var newPizza = new Pizza("Large");
  newPizza.addToppings(["sausage","pepperoni"])
  console.log(newPizza.size + " " + newPizza.toppings.join(", ") + " pizza");
}



//OBJECT DEFINITIONS------------------------------
function Pizza(size) {
  this.size = size;
  this.toppings = ["cheese"];
}

Pizza.prototype.addToppings = function(order){
  //takes in an array
  if ((this.toppings[0] === "cheese") && (order.length > 0)){
    this.toppings[0] = order[0];
    for(var t=1;t<order.length;t++){
      this.toppings.push(order[t]);
    }
  }
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
