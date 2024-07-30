document.getElementById('delivery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance = document.getElementById('distance').value;
    let cost = 0;

    if (distance <= 200) {
        cost = 0;
    } else if (distance <= 1000) {
        cost = 100;
    } else if (distance <= 2000) {
        cost = 200;
    } else {
        cost = 'Out of delivery range';
    }

    document.getElementById('delivery-cost').textContent = `Delivery Cost: ${cost} Ksh`;
});
