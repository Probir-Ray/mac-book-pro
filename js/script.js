// Javascript started here.

// Get Cost function
function getCost(item, price) {
    const itemCostText = document.getElementById(item + '-price');
    let itemCostAmount = itemCostText.innerText;
    itemCostText.innerText = price;
    
    totalPriceCalc();
}

// Total Price Calculation
function totalPriceCalc() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const totalPriceText = document.getElementById('total-price');
    let totalPrice = totalPriceText.innerText;

    // Get Element value.
    const memoryCostText = document.getElementById('memory-price');
    const storageCostText = document.getElementById('storage-price');
    const deliveryPriceText = document.getElementById('delivery-price');

    // Sum of all cost
    totalPrice = parseFloat(memoryCostText.innerText) + parseFloat(storageCostText.innerText) +
    parseFloat(deliveryPriceText.innerText) + bestPrice;

    totalPriceText.innerText = totalPrice;

}


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

