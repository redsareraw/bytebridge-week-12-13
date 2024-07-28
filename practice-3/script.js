function myFunction() {
    let message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x == "") throw "Please input a number";
        if(x < 10) throw "Your number is too low!";
        if(x > 25) throw "Your number is too high!";
        message.innerHTML = "You followed directions!";
    }
    catch(err) {
        message.innerHTML = err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}

let age = 17;

const isOldEnough = age >= 18 ? "Welcome to Our Site." : "Sorry, you must be 18 or older to enter.";

console.log(isOldEnough);