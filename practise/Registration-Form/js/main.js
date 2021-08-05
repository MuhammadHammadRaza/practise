let onSignup = () => {
    // get values from input fields
    var userName = document.getElementById("username");
    var userEmail = document.getElementById("email");
    var phone = document.getElementById("phone");
    var city = document.getElementById("city");
    var password = document.getElementById("password");
    var message = document.getElementById("signup");
    if (userName.value !== "" && userEmail.value !== "" && phone.value !== "" && password.value !== "" && city.value !== "") {
        // store get values in object
        var userInfo = {
            name: userName.value,
            email: userEmail.value,
            phone: phone.value,
            city: city.value,
            password: password.value

        }

        // getting object from storage to check through email if user already exist?
        var users = JSON.parse(localStorage.getItem("users")) || [];

        var userIdx = users.findIndex(function (value) {
            return value.email.toLowerCase() === userInfo.email.toLowerCase();
        });
        if (userIdx === -1) {
            // this user doesn't exist
            users.push(userInfo);
            // store in storage
            localStorage.setItem("users", JSON.stringify(users));
            // redirect to login page
            location.href = "login.html";
        }
        else {
            message.value = "Email Already Exist!";
            message.classList.remove("form-submit");
            message.classList.remove("form-submit:hover");
            message.classList.add("form-not-submit");
        }
    }
    else {
        message.value = "All Fields Are Required!";
        message.classList.remove("form-submit");
        message.classList.remove("form-submit:hover");
        message.classList.add("form-not-submit");
    }
    // clear state
    setTimeout(() => {
        message.value = "Register";
        message.classList.remove("form-not-submit");
        message.classList.add("form-submit");
    }, 2000);
}

let onLogin = () => {
    // get values from input
    var loginEmail = document.getElementById("loginEmail");
    var password = document.getElementById("password");
    var message = document.getElementById("login");
    if (loginEmail.value !== "" && password.value !== "") {
        var user = {
            email: loginEmail.value,
            password: password.value
        }

        var users = JSON.parse(localStorage.getItem("users")) || [];
        // get indx
        var checkUserEmail = users.find(function (val) {
            return val.email.toLowerCase() === user.email.toLowerCase();
        });
        if (checkUserEmail) {
            var currentUser = users.find(function (val) {
                return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
            });
            if (currentUser) {
                localStorage.setItem("user", JSON.stringify(currentUser));
                // user login
                location.href = "index.html";
            } else {
                message.value = "Incorrect Password!";
                message.classList.remove("form-submit");
                message.classList.remove("form-submit:hover");
                message.classList.add("form-not-submit");
            }
        }
        else {
            message.value = "Email Not Registered!";
            message.classList.remove("form-submit");
            message.classList.remove("form-submit:hover");
            message.classList.add("form-not-submit");
        }
    }
    else {
        message.value = "All Fields Are Required!";
        message.classList.remove("form-submit");
        message.classList.remove("form-submit:hover");
        message.classList.add("form-not-submit");
    }
    // clear state
    setTimeout(() => {
        message.value = "Log in";
        message.classList.remove("form-not-submit");
        message.classList.add("form-submit");
    }, 2000);
}


let whileLogin = () => {
    // if (JSON.parse(localStorage.getItem("user"))) {
    var welcomeHead = document.getElementById("welcome");
    var welcomeBar = document.getElementById("offcanvasWithBackdropLabel");
    var numBar = document.getElementById("numBar");
    var cityBar = document.getElementById("cityBar");

    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        welcomeHead.innerHTML = "Welcome " + user.name.split(" ")[0] + "!";
        welcomeBar.innerHTML = `${user.name}<i class="float-end bi bi-pencil-square" onClick="editUser('name')"></i>`
        numBar.innerHTML = `${user.phone}<i class="float-end bi bi-pencil-square" onClick="editUser('phone')"></i>`
        var cityName = user.city[0].toUpperCase() + user.city.slice(1).toLowerCase();
        cityBar.innerHTML = `${cityName}<i class="float-end bi bi-pencil-square" onClick="editUser('city')"></i>`
        // // <i class="bi bi-pencil-square"></i>
    }
    else {
        location.href = "./login.html";
        // onLogin();
    }
}
let editUser = (e) => {
    var user = JSON.parse(localStorage.getItem("user"));
    var users = JSON.parse(localStorage.getItem("users"));
    var edit = prompt(`Enter New Detail`, user[e]);


    // var i = users.findIndex(user)
    // user[e] = edit;
    // users[i][e] = user[e];
    // localStorage.setItem("users", JSON.stringify(users));
    // localStorage.setItem("user", JSON.stringify(user));


    for (var i = 0; i < users.length; i++) {       
        if (JSON.stringify(users[i]) == JSON.stringify(user)) {
            user[e] = edit;
            users[i][e] = user[e];
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("user", JSON.stringify(user));
        }
    }
    location.href = "index.html"
}

let onPostCreation = () => {
    var message = document.getElementById("postBtn");
    var title = document.getElementById("floatingTitle");
    var desc = document.getElementById("floatingDescription");

    if (title.value != "" && desc.value != "") {
        //creating a post card
        var postCardMain = document.getElementById("postCard");
        postCardMain.setAttribute("class", "d-flex flex-column-reverse bd-highlight");
        postCardList = postCardMain.appendChild(document.createElement("div"))
        postCardList.innerHTML = `<div class="mt-3 mx-auto card mb-3"><button type="button" class="position-absolute top-0 end-0 btn-close" onclick="deleteItem(this)"></button><img src="./images/signin-image.jpg" class="card-img-top" id="img"><div class="card-body"><h5 class="card-title">${title.value}</h5><p class="card-text">${desc.value}</p></div></div>`

        title.value = "";
        desc.value = "";
        var x = document.getElementsByTagName("img");

    }
    else {
        message.innerHTML = "All Fields Required";
        message.classList.add("bg-danger");
    }

    setTimeout(() => {
        message.innerText = "Post";
        message.classList.remove("bg-danger");
    }, 2000);
}

let onLogout = () => {
    var user = JSON.parse(localStorage.getItem("user"))
    var welcomeHead = document.getElementById("welcome");
    welcomeHead.innerHTML = "Good Bye " + user.name.split(" ")[0] + " :)";
    localStorage.removeItem("user")
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}

function deleteItem(e) {
    e.parentNode.remove();
}
