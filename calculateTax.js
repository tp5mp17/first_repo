function calculateTax(amount) {
return amount * 0.10;
}
const purchaseAmount = 100;
const tax = calculateTax(purchaseAmount);
//console.log("purchaseAmount", "tax");

function convertToUpperCase(text) {
    return text.toUpperCase();
}
function findMaximum(num1, num2) {
    return num1 > num2;
} 

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function calculateDiscountedPrice(originlPrice, discountPercentage) {
    const discountAmount = originlPrice * (discountPercentage / 100);
    return originlPrice - discountAmount;
}
let DiscountedPrice = calculateDiscountedPrice(100, 20);
console.log(DiscountedPrice);
