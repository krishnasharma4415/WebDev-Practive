function checkNumber() {
    let num = parseInt(document.getElementById("numberInput").value);
    let output = document.getElementById("output");

    let square = num * num;
    let cube = num * num * num;

    output.innerHTML = "<h3>Arithmetic:</h3>";
    output.innerHTML += "<p>Square of " + num + " is: " + square + "</p>";
    output.innerHTML += "<p>Cube of " + num + " is: " + cube + "</p>";

    output.innerHTML += "<h3>Logical:</h3>";
    if (num > 0 && num % 2 === 0) {
        output.innerHTML += "<p>" + num + " is a positive even number.</p>";
    } else if (num > 0 && num % 2 !== 0) {
        output.innerHTML += "<p>" + num + " is a positive odd number.</p>";
    } else if (num === 0) {
        output.innerHTML += "<p>" + num + " is zero.</p>";
    } else {
        output.innerHTML += "<p>" + num + " is a negative number.</p>";
    }
}
