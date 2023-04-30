let keys = Object.keys(localStorage), i = 1;

for(let key of keys) {
    let basket,res = [0,0];
    if (key != 'endSum' && key != 'endCount'){
        let div = document.createElement("div"),
        p1 = document.createElement("p"),
        p2 = document.createElement("p"),
        p3 = document.createElement("p");
        div.id = `${i}`;
        basket = localStorage.getItem(key);
        res = JSON.parse(basket);
        p1.className = "nameOfClothBasket"
        p1.style = "margin-right: 320px;"
        p2.className = "nameOfClothBasket"
        p3.className = "nameOfClothBasket"
        p2.style = "margin-right: 300px;"
        p1.innerHTML += key;
        p2.innerHTML += res[0];
        p3.innerHTML += res[1];
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.className = "forDivTwoHTML";
        document.body.append(div);
        i++;
    }  
    else if (key == 'endSum'){
        let div = document.createElement("div"),
        p = document.createElement("p");
        div.id = `${i}`;
        p.className = "forSUMandSUMCOUNTTwoHTML";
        p.innerHTML += localStorage.getItem(key) + ' × ';
        div.appendChild(p);
        div.style = "text-align: right; display: flex; justify-content: flex-end;";
        document.body.append(div);
        i++;
    }
    else{
        let div = document.createElement("div"),
        p = document.createElement("p");
        div.id = `${i}`;
        p.className = "forSUMandSUMCOUNTTwoHTML2";
        p.innerHTML += localStorage.getItem(key);
        div.appendChild(p);
        div.style = "text-align: right; display: flex; justify-content: flex-end;";
        document.body.append(div);
        i++;
    }
}

function Clear(){
    for(let key of keys) {
        localStorage.removeItem(key);
    }
    for (let j = 1;; j++){
        document.getElementById(`${j}`).innerHTML = ' ';
    }
}