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
function showPrice(item, price) {
    var modal = document.getElementById("priceModal");
    var priceText = document.getElementById("priceText");
    var span = document.getElementsByClassName("close")[0];

    priceText.textContent = item + ' costs ' + price;
    modal.style.display = "flex";

    span.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
