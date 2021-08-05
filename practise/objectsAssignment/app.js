let btnQ1 = document.getElementsByTagName("body")[0].appendChild(document.createElement("button"));
btnQ1.setAttribute("onclick", "q1()");
btnQ1.innerText = "Question 1";

let btnQ2 = document.getElementsByTagName("body")[0].appendChild(document.createElement("button"));
btnQ2.setAttribute("onclick", "q2()");
btnQ2.innerText = "Question 2";

let btnQ3 = document.getElementsByTagName("body")[0].appendChild(document.createElement("button"));
btnQ3.setAttribute("onclick", "q3()");
btnQ3.innerText = "Question 3";

let q4 = document.getElementsByTagName("body")[0].appendChild(document.createElement("a"));
let btnQ4 = q4.appendChild(document.createElement("button"));
q4.setAttribute("href", "./q4/index.html");
btnQ4.innerText = "Question 4";

let q1 = _ => {
    btnQ1.setAttribute("class", "hidden");
    btnQ2.setAttribute("class", "hidden");
    btnQ3.setAttribute("class", "hidden");
    btnQ4.setAttribute("class", "hidden");
    // creating table element
    let table = document.getElementsByTagName("body")[0].appendChild(document.createElement("table"));
    table.setAttribute("border", "1");
    table.setAttribute("cellspacing", "0");
    var itemsArray = [{ name: "Juice", price: "500", quantity: "3" }, { name: "Cookie", price: "30", quantity: "9" }, { name: "Shirt", price: "880", quantity: "1" }, { name: "Pen", price: "100", quantity: "2" }]
    var totalPrice = 0
    // creating a flag for an upcoming if conditon
    var totalRow = false;
    // creating tr, one extra tr than actual objects keys for showing total price
    for (let i = 0; i <= Object.keys(itemsArray[0]).length; i++) { //length = 3
        // creating a tr 
        let tableRow = table.appendChild(document.createElement("tr"));
        // creating th for item's type
        let rowHead = tableRow.appendChild(document.createElement("th"));
        // creating condition to check if it is NOT last extra tr
        if (i < Object.keys(itemsArray[0]).length) {
            // getting name of item from object
            var rowHeadName = Object.keys(itemsArray[i])[i]
            // setting name of td 
            rowHead.appendChild(document.createTextNode(rowHeadName));
        }
        else { // else condition names th last tr which is extra
            rowHead.appendChild(document.createTextNode("Total"));
            totalRow = true;
        }
        // creating multiple td using loop
        for (let j = 0; j < itemsArray.length; j++) { // length = 4
            // td comes after th, showing item from object property
            rowItem = tableRow.appendChild(document.createElement("td"));
            if (!totalRow) { // if conditon checks for flag which will NOT be true until that extra tr is made for total
                let itemName = itemsArray[j][rowHeadName]; // getting item name from objects
                rowItem.appendChild(document.createTextNode(itemName));
            }
            else { // else conditons runs at last iteration of previous loop, when extra tr is printed
                // calculating price of each item
                let total = Number(itemsArray[j].price) * Number(itemsArray[j].quantity);
                rowItem.appendChild(document.createTextNode(total));
                totalPrice = totalPrice + total; // storing total price of items in a variable to show final price
            }
        }
    }
    let showTotalPrice = document.getElementsByTagName("body")[0].appendChild(document.createElement("h2"));
    showTotalPrice.innerHTML = `Total Price: ${totalPrice}`;
}

let q2 = _ => {
    btnQ1.setAttribute("class", "hidden");
    btnQ2.setAttribute("class", "hidden");
    btnQ3.setAttribute("class", "hidden");
    btnQ4.setAttribute("class", "hidden");
    let obj = {
        userName: "Hammad",
        email: "hammad@gmail.com",
        password: "123",
        age: 12,
        gender: "male",
        city: "Karachi",
        country: "Pakistan"
    }
    let agenCountryProperty = document.getElementsByTagName("body")[0].appendChild(document.createElement("h2"));
    var checkAgenCountry = obj.hasOwnProperty("age") && obj.hasOwnProperty("country")
    agenCountryProperty.innerHTML = `Does Age & Country Property Exist? ${checkAgenCountry}`;

    let lastnFirstNameProperty = document.getElementsByTagName("body")[0].appendChild(document.createElement("h2"));
    var checkLastnFirstNameProperty = obj.hasOwnProperty("lastName") && obj.hasOwnProperty("firstName")
    lastnFirstNameProperty.innerHTML = `Does firstName & lastName Property Exist? ${checkLastnFirstNameProperty}`;
}
let q3 = _ => {
    btnQ1.setAttribute("class", "hidden");
    btnQ2.setAttribute("class", "hidden");
    btnQ3.setAttribute("class", "hidden");
    btnQ4.setAttribute("class", "hidden");
    function Obj(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    let obj1 = new Obj("hammad", 12, "hammad@gmail.com")
    let obj2 = new Obj("ahmed", 12, "ahmed@gmail.com")
    let obj3 = new Obj("hasan", 12, "hasan@gmail.com")
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
    let text = document.getElementsByTagName("body")[0].appendChild(document.createElement("h2"));
    text.innerHTML = "Open console to see results"
}




