const element =  document.getElementById("1");
let keys = Object.keys(localStorage);
for(let key of keys) {
   // console.log(`${key}: ${localStorage.getItem(key)}`);
    //element.innerHTML += `${key}: ${localStorage.getItem(key)}`;
}

for(let key of keys) {
    if (key.indexOf('jpg') != -1){
        console.log(key);
        var img = new Image();
        img.src = key;
        //element.innerHTML += img;

    }
    //element.innerHTML += `${key}: ${localStorage.getItem(key)}`;
}
//element.innerHTML += sumCount + " товаров на сумму " + sum + " капибарных рублей";