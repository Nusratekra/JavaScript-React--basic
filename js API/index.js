// ✅ Validation API
function validate() {
    const inputObj = document.getElementById('id1');

    if (inputObj.validity.rangeOverflow) {
        inputObj.setCustomValidity("You have made range overflow!");
    } else if (inputObj.validity.rangeUnderflow) {
        inputObj.setCustomValidity("You have made range underflow!");
    } else if (inputObj.validity.valueMissing) {
        inputObj.setCustomValidity("Value Missing!");
    } else {
        inputObj.setCustomValidity(""); // Clear custom message
    }

    if (!inputObj.checkValidity()) {
        document.getElementById('demo').innerHTML = inputObj.validationMessage;
    } else {
        document.getElementById('demo').innerHTML = "✅ Input is valid!";
    }
}

// 🕹️ History API
function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

function goBackSteps(steps) {
    window.history.go(steps); // Example: -2
}

function getHistory() {
    const total = window.history.length;
    const currentUrl = window.location.href;
    document.getElementById("demo").innerHTML =
        `🔢 You have ${total} entries in your session history.<br>📍Current URL: ${currentUrl}`;
}

//Storage API
/* localStorage -> after close the browser the storage will Remain , 
sessionStorage -> after close the browser the storage will delated */
function setLocalStorage(key, value) {
    localStorage.setItem(key, value); // Pass both key and value
}

function getLocalStorage(key) {
    alert(localStorage.getItem(key)); 
}
function removeLocalStorage(key) {
    localStorage.removeItem(key); 
}
function clearLocalStorage() {
    localStorage.clear(); 
}
//same for sessionStorage

//Fetch API
const dispay = document.getElementById("display");
//Promise
function getData() {
    fetch("data.txt")
        .then(response => response.text()) // Read the text from the response
        .then(data => {
            dispay.innerText = data;       // Display the data inside the HTML element
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
const display1 = document.getElementById("display1");
async function getData1() {
    const res =await fetch("data1.txt");
    const d= await res.text();

    display1.innerText=d;
        
}

//Geolocation API

const display2 = document.getElementById("display2");

function getLocation() {
    if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(showPosition, showError);
        navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        display2.innerHTML = "Geolocation is not available in your browser!";
    }
}

function showPosition(position) {
    display2.innerHTML =
        "Latitude: " + position.coords.latitude + "<br>" +
        "Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            display2.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            display2.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            display2.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            display2.innerHTML = "An unknown error occurred.";
            break;
    }
}
