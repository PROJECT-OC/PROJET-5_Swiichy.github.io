//Add item - remove item

let x = 1;

function addItem() {
    x = x + 1;
    document.querySelector('.number-item-js').innerHTML = x;
}

function removeItem() {
    if (x >= 2) {
        x = x - 1;
        document.querySelector('.number-item-js').innerHTML = x;
    }
}