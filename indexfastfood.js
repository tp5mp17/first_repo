var burgers = ['Hamburger', 'Cheeseburger'];

var featuredDrink = ['Strawberry Milkshake'];

function purchaseItem(itemToPurchase, quantity) {
    if(!item.includes(itemToPurchase)){
       console.log("Error: Invalid item! Unable to complete purchase!");
        return; 
    }
}

    let price;
    const itemToPurchase = ('Hamburger', 'Cheeseburger', 'Strawberry Milkshake');


   if(itemToPurchase === "Hamburger"){
        price = 1.99;
    }
    else if(itemToPurchase === "Cheeseburger"){
        price = 2.99;
    }
    else if(itemToPurchase === "Strawberry Milkshake"){
         price = 3.99;
    
    const totalPrice = price;
    console.log(`Thanks for shopping! You purchased ${itemToPurchase}(s). The total price is $${totalPrice}`);
    }

function addBurger() {
    const newBurger = ['Flatburger'];

    if (typeof burger !== 'undefined' && Array.isArray(burgers)) {
        burgers.push(newBurger);
    } else {
        return('The "burgers" array is not defined.');
    }
}

function changeFeaturedDrink() {
    if (typeof featuredDrink !== 'undefined') {
        featuredDrink = 'The JavaShake!';
    } else {
        return('The "featuredDrink" variable is not defined');
    }
}

function addMapleBaconBurger () {
    if (true) {
        let anotherNewBurger = 'Maple Bacon Burger';

        if (typeof burgers !== 'undefined' && Array.isArray(burgers)) {
            burger.push(anotherNewBurger);
        } else {
            return('The "burgers" array is not defined');
        }
    }
}
console.log(burgers, featuredDrink,)