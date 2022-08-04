function change() {
    var a = document.getElementById("square");

    if (a.style.borderRadius == "50%") {
        a.style.borderRadius = "0px";
    } else {
        a.style.borderRadius = "50%";
    }
}