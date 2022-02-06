// JavaScript
var family = new FamilyTree(document.getElementById("tree"), {
    mode: 'dark',
    mouseScrool: FamilyTree.none,
    nodeBinding: {
        field_0: "name"
    }
});


// family.load([
//             { id: 1, pids: [2], name: "Amber McKenzie", gender: "female" },
//             { id: 2, pids: [1], name: "Ava Field", gender: "male" },
//             { id: 3, mid: 1, fid: 2, name: "Peter Stevens", gender: "male" }
//         ]);

var arrItems = []; // THE ARRAY TO STORE JSON ITEMS.
// console.log("Started");
// $(document).ready(function () {
//     console.log("Called");
//     $.getJSON("./dataArray.json", function (data) {
//         $.each(data, function (index, value) {
//             console.log("Conatins Data, value");
//             arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
//             console.log(arrItems[0]);
//         });
//     });
// });

$.getJSON("./dataArray.json", function (data) {
    $.each(data, function (index, value) {
        arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
        // console.log(arrItems[0]);
    });
    family.load(arrItems);
});

// console.log("End");