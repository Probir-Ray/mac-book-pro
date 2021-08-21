// Javascript started here.

// Get Cost function
function getCost(item, price) {
    const itemCostText = document.getElementById(item + '-price');
    let itemCostAmount = itemCostText.innerText;
    itemCostText.innerText = price;
    
    totalPriceCalc();
}

// Total Price Calculation function
function totalPriceCalc() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const totalPriceText = document.getElementById('total-price');
    const totalAmount = document.getElementById('total');

    // Get Element value.
    const memoryCostText = document.getElementById('memory-price');
    const storageCostText = document.getElementById('storage-price');
    const deliveryPriceText = document.getElementById('delivery-price');

    // Sum of all cost
    let totalPrice = parseInt(memoryCostText.innerText) + parseInt(storageCostText.innerText) +
    parseInt(deliveryPriceText.innerText) + parseInt(bestPrice);

    totalPriceText.innerText = totalPrice;
    totalAmount.innerText = totalPrice;
    return totalPrice;

}

    // Promo code calculation
    document.getElementById('apply-promo').addEventListener('click', function(){
        const totalPrice = totalPriceCalc();
        const totalAmount = document.getElementById('total');
        const promoInputText = document.getElementById('promo-input'); 

        if(promoInputText.value == 'stevekaku') {
            let promoAmount = totalPrice * 0.2;
            let price = totalPrice - promoAmount;
            console.log(promoAmount, totalPrice, price);
            totalAmount.innerText = price.toFixed(2);
            promoInputText.value = '';
        } else {
            
        }
    })




// Event Listener for 8GB Memory 
document.getElementById('memory-8gb').addEventListener('click', function() {
    getCost('memory', 0);
});

// Event Listener for 16GB Memory
document.getElementById('memory-16gb').addEventListener('click', function() {
    getCost('memory', 180);
});



// Event Listener for 256GB SSD
document.getElementById('ssd-256').addEventListener('click', function() {
    getCost('storage', 0);
})

// Event Listener for 512GB SSD
document.getElementById('ssd-512').addEventListener('click', function() {
    getCost('storage', 100);
})

// Event Listener for 1TB SSD
document.getElementById('ssd-1tb').addEventListener('click', function() {
    getCost('storage', 180);
})


// Event Listener for free delivery
document.getElementById('delivery-free').addEventListener('click', function() {
    getCost('delivery', 0);
})

// Event Listener for paid delivery
document.getElementById('delivery-paid').addEventListener('click', function() {
    getCost('delivery', 20);
})

