function change(n) {
    n = parseInt(n);
    if (n == "") {
        alert("Input is Empty");
    } else {
        var sum = findSum(n);
        var element = document.getElementById("square");
        element.style.width = sum + "mm";
        element.style.height = sum + "mm";
        element.style.border = " 2px solid black";
        element.style.borderRadius = sum / 5 + "%";
    }
}

function myFunction(p1) {
    if (/\s/g.test(p1)) {
        alert("Space Not aloowed");
    }
}

var input = document.getElementById("input1");
input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault(); //cancel the default action
        document.getElementById("button").click();
    }
});

function findSum(n) {
    let s = 0;
    while (n != 0) {
        s += n % 10;
        n /= 10;
    }
    return s;
}