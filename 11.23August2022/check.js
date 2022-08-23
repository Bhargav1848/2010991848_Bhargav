var data = [{
        id: 1,
        name: "Bhargav",
        age: 19,
    },
    {
        id: 2,
        name: "Ayerish",
        age: 21,
    },
    {
        id: 3,
        name: "Amritansh",
        age: 24,
    },
    {
        id: 4,
        name: "Chetan",
        age: 20,
    },
];

function check() {
    var text = document.getElementById("text").value;
    var name, id, age;
    data.map((key, index) => {
        if (key["id"] == text) {
            name = key["name"];
            age = key["age"];
            id = key["id"];
        }
    });

    document.getElementById("object").innerHTML =
        " Id: " + id + "<br>" + "Age: " + age + "<br>" + " Name: " + name;
}