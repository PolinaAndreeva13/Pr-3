var endSum = 0;
var endCount = 0;
const display =  document.getElementById("price_");

function Price(numPrice, count, src, numberOfClotch){
    let sum = Number(localStorage.getItem(src));
    sum += numPrice;

    let sumCount = Number(localStorage.getItem(numberOfClotch));
    sumCount += count;

    endSum = Number(localStorage.getItem('endSum'));
    endSum += numPrice;

    endCount = Number(localStorage.getItem('endCount'));
    endCount += count;

    display.innerHTML = ''
    display.innerHTML += endSum + " капибарных рублей";  

    localStorage.setItem(src, sum);
    localStorage.setItem('endSum', endSum);
    localStorage.setItem('endCount', endCount);
    localStorage.setItem(numberOfClotch, sumCount);
}