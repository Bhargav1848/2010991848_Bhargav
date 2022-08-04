function evenSum(n) {
    var count = 1;
    for (var i = 1; i < n; i++) {
        if (i % 2 == 0) {
            count++;
        }
    }

    document.getElementById("text").innerHTML =
        "Count of even numbers is: " + count;
}

function sumBetween(l, r, k) {
    if (r < l) {
        alert("R should be greater than L");
        return;
    }
    var sum = 0;
    for (var a = l; a < r; a++) {
        if (a % k == 0) {
            sum++;
        }
    }

    document.getElementById("text").innerHTML =
        "Count of numbers divisible by " + k + " : " + sum;
}