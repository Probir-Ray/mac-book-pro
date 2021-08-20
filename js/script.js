// Javascript started here.


// Memory Cost function
function getMemoryCost(price) {
    const memoryCostText = document.getElementById('memory-price');
    let memoryConst = memoryCostText.innerText;
    memoryCostText.innerText = price;
    totalPriceCalc();
}

// Event Listener for 8GB Memory 
document.getElementById('memory-8gb').addEventListener('click', function() {
    getMemoryCost(0);
});

// Event Listener for 16GB Memory
document.getElementById('memory-16gb').addEventListener('click', function() {
    getMemoryCost(180);
});



// Storage Cost function
function getStorageCost(price) {
    const storageCostText = document.getElementById('storage-price');
    let storageCost = storageCostText.innerText;
    storageCostText.innerText = price;
    totalPriceCalc();
}

// Event Listener for 256GB SSD
document.getElementById('ssd-256').addEventListener('click', function() {
    getStorageCost(0);
})

// Event Listener for 512GB SSD
document.getElementById('ssd-512').addEventListener('click', function() {
    getStorageCost(100);
})

// Event Listener for 1TB SSD
document.getElementById('ssd-1tb').addEventListener('click', function() {
    getStorageCost(180);
})



// Delivery Cost Calculate;
function getDeliveryCost(costOfDelivery) {
    const deliveryPriceText = document.getElementById('delivery-price');
    let deliveryPrice = deliveryPriceText.innerText;
    deliveryPriceText.innerText = costOfDelivery;
    totalPriceCalc();
}

// Event Listener for free delivery
document.getElementById('delivery-free').addEventListener('click', function() {
    getDeliveryCost(0);
})

// Event Listener for paid delivery
document.getElementById('delivery-paid').addEventListener('click', function() {
    getDeliveryCost(20);
})



// Total Price Calculation
function totalPriceCalc() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const totalPriceText = document.getElementById('total-price');
    let totalPrice = totalPriceText.innerText;

    const memoryCostText = document.getElementById('memory-price');
    const storageCostText = document.getElementById('storage-price');
    const deliveryPriceText = document.getElementById('delivery-price');

    totalPrice = parseFloat(memoryCostText.innerText) + parseFloat(storageCostText.innerText) +
    parseFloat(deliveryPriceText.innerText);

    totalPriceText.innerText = bestPrice + totalPrice;

}