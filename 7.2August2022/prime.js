function prime(n) {
    let arr = new Array(100);
    arr.fill(1);

    for (var i = 2; i <= Math.sqrt(100); i++) {
        for (var j = i * i; j <= 100; j += i) {
            arr[j] = 0;
        }
    }

    alert(arr[n] == 1);
}