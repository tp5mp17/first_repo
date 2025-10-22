function calculateDiscountedPrice(quantity, pricePerItem) {
        debugger;
    let totalPrice = 0;
    
    totalPrice = 10;

debugger;
  for (let i = 1; i < quantity; i++) { 

        totalPrice += pricePerItem;

    }


debugger;
    if (quantity >= 10) {

        totalPrice *= 0.9;

    }


 return totalPrice;

}