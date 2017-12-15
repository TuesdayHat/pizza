//LOOSE HELPER FUNCTIONS--------------------------
function makePizza(){//testing purposes
  var newPizza = new Pizza("xLarge");
  //size: 1=small, 2=large, 3=extra large
  newPizza.addToppings(["sausage","pepperoni"]);
  console.log(newPizza.size + " " + newPizza.toppings.join(", ") + " pizza");
  newPizza.price();
  console.log("$" + newPizza.cost);
}

//OBJECT DEFINITIONS------------------------------
var pSize = {
  small:1,
  medium:2,
  large:3,
  xLarge:4,
}

function Pizza(size) {
  this.size = size;
  this.toppings = ["cheese"];
  this.cost = 7
}

Pizza.prototype.addToppings = function(order){
  //takes in an array
  if ((this.toppings[0] === "cheese") && (order.length > 0)){
    this.toppings[0] = order[0];
    for(var t=1;t<order.length;t++){
      this.toppings.push(order[t]);
    }
    this.cost += 1
  }
}

Pizza.prototype.price = function(){
  this.cost = (this.cost + (this.toppings.length / 2))*(1+(0.25 * pSize[this.size]))
}


//FRONTEND BELOW THIS LINE -----------------------
makePizza();
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
