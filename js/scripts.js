//OBJECT DEFINITIONS------------------------------
var pSize = {
  Small:1,
  Medium:2,
  Large:3,
  ExLarge:4,
}

function Pizza(size) {
  this.size = size;
  this.toppings = ["Cheese"];
  this.cost = 7
  this.base = 7
}

Pizza.prototype.addToppings = function(order){
  if (this.toppings[0] === "Cheese" && order.length > 0){
    this.toppings[0] = order;
    this.base += 1
  }else if (this.toppings.indexOf(order) > -1){
    this.price()
  } else {
    this.toppings.push(order);
    this.price()
  }
}

Pizza.prototype.price = function(){
  this.cost = Math.floor((this.base + (this.toppings.length / 2))*(1+(0.25 * pSize[this.size])))
}


//FRONTEND BELOW THIS LINE -----------------------
$(document).ready(function() {
  var pizzaSize = $(".size").val();
  var pizzaTop = [];

  var newPizza = new Pizza(pizzaSize)
  updateOrder();


  $("#size").change(function(){
    newPizza.size = $(".size").val();
    newPizza.price();
    updateOrder()
  });

  $("#addPizza").click(function(){
    newPizza.size = $(".size").val();
    newPizza.addToppings($(".toppings").val())
    updateOrder();
  });

  function updateOrder(){
    pizzaSize = $(".size").val();
    newPizza.price();
    $("#result").text("$"+newPizza.cost + " " + newPizza.size + " " + newPizza.toppings.join(" "));
  }

});
