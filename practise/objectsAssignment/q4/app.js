let getBtn = document.getElementById("getData");
let setItem = _ => {
    getBtn.disabled = false;
    let submit = document.getElementById("submit");
    let userName = document.getElementById("name").value;
    let gender = "";
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    if (male.checked == true) {
        gender = male.value;
    } else if (female.checked == true) {
        gender = female.value;
    }
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;
    if (userName && (male || female) && address && education && profession) {
        function User(userName, gender, address, education, profession) {
            this.userName = userName;
            this.gender = gender;
            this.address = address;
            this.education = education;
            this.profession = profession;
        }

        let user1 = new User(userName, gender, address, education, profession);
        let users = JSON.parse(localStorage.getItem("people")) || [];
        users.push(user1);
        localStorage.setItem("people", JSON.stringify(users));
    }else{
        submit.value = "ALL FIELDS ARE REQUIRED!"
        submit.style.backgroundColor = "red"
    }
    // clear state
    setTimeout(() => {
        submit.value = "Submit";
        submit.style.backgroundColor = "lightGray"
        // message.classList.remove("form-not-submit");
        // message.classList.add("form-submit");
    }, 2000);
}

let getData = _ => {
    getBtn.disabled = true;
    let users = JSON.parse(localStorage.getItem("people"));
    let table = document.getElementsByTagName("table")[0];
    for (i = 0; i < Object.keys(users[0]).length; i++) {
        let tableRow = table.appendChild(document.createElement("tr"));
        let tableHead = tableRow.appendChild(document.createElement("th"));
        let tableHeadName = Object.keys(users[0])[i].slice(0, 1).toUpperCase() + Object.keys(users[0])[i].slice(1)
        tableHead.appendChild(document.createTextNode(tableHeadName));
        for (j = 0; j < users.length; j++) {
            let tableData = tableRow.appendChild(document.createElement("td"));
            // let tableDataName = Object.keys(users[j][i]);
            let tableDataName = users[j][Object.keys(users[j])[i]];
            // console.log(tableDataName);
            tableData.appendChild(document.createTextNode(tableDataName));
        }
    }
}