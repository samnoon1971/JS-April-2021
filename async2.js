

/**
 *  Demo 0
 */
/**
 *  type 1
 */
chooseToppings()
.then(function(toppings){
    return placeOrder(toppings);
})
.then(function(order){
    return collectOrder(order);
})
.then(function(pizza){
    eatPizza(pizza);
})
.catch(failureCallback);

/**
 *  type 2
 */

chooseToppings()
.then(toppings => placeOrder(toppings)
)
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza)
)
.catch(failureCallback);

/**
 *  type 3
 */

chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);


/**
 *  Demo 1
 */


