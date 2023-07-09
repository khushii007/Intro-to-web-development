function temperature() {
    var celsius = document.getElementById("c").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("f").value = fahrenheit;
}

function weight() {
    var kg = document.getElementById("kg").value;
    var lbs = kg * 2.2;
    document.getElementById("lbs").value = lbs;
}

function distance() {
    var km = document.getElementById("km").value;
    var miles = km * 0.62137;
    document.getElementById("m").value = miles;
}