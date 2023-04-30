let keys = Object.keys(localStorage), i = 1, j = 1;

for (let key of keys) {
    let basket, res = [0, 0];
    if (key != 'endSum' && key != 'endCount') {
        let div = document.createElement("div"),
            p1 = document.createElement("p"),
            p2 = document.createElement("p"),
            p3 = document.createElement("p");
        basket = localStorage.getItem(key);
        res = JSON.parse(basket);
        p1.className = "nameOfClothBasket"
        p2.className = "nameOfClothBasket"
        p3.className = "nameOfClothBasket"
        p1.innerHTML += key;
        p2.innerHTML += res[0];
        p3.innerHTML += res[1];
        let table = document.getElementById("table_");
        let tr = document.createElement("tr");
        tr.id = "tr_";
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.id = `${i}`;
        td2.id = `${i}`;
        td3.id = `${i}`;
        td1.appendChild(p1);
        td2.appendChild(p2);
        td3.appendChild(p3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
        j++;
    }
    else if (key == 'endSum') {
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
    else {
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

function Clear() {
    for (let key of keys) {
        localStorage.removeItem(key);
    }
    for (let a = 0; a < j; a++){
        document.getElementById("tr_").remove();
    }
}