let endSum = 0, endCount = 0, arr = [];
const display = document.getElementById("price_");

if (localStorage.getItem('endSum') != null) {
    display.innerHTML += Number(localStorage.getItem('endSum')) + " капибарных рублей";
}
else {
    display.innerHTML += 0 + " капибарных рублей";
}

function Price(numPrice, count, name) {
    let basket, res = [0, 0], sum, sumCount;

    if (localStorage.getItem(name) != null) {
        basket = localStorage.getItem(name);
        res = JSON.parse(basket);
    }

    sum = Number(res[1]);
    sum += numPrice;

    sumCount = Number(res[0]);
    sumCount += count;

    endSum = Number(localStorage.getItem('endSum'));
    endSum += numPrice;

    endCount = Number(localStorage.getItem('endCount'));
    endCount += count;

    display.innerHTML = ''
    display.innerHTML += endSum + " капибарных рублей";

    arr = [];
    arr[0] = sumCount;
    arr[1] = sum;

    localStorage.setItem(name, JSON.stringify(arr));
    localStorage.setItem('endSum', Number(endSum));
    localStorage.setItem('endCount', Number(endCount));
}