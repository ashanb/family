//JavaScript
var family = new FamilyTree(document.getElementById("tree"), {
    mode: 'dark',
    mouseScrool: FamilyTree.none,
    nodeBinding: {
        field_0: "name"
    }
});

// family.load([
//     { id: 1, pids: [2], name: "Amber McKenzie", gender: "female" },
//     { id: 2, pids: [1], name: "Ava Field", gender: "male" },
//     { id: 3, mid: 1, fid: 2, name: "Peter Stevens", gender: "male" }
// ]);

// family.load([
//     { "id": 1, "pids": [
//         2
//     ], "name": "Amber McKenzie", "gender": "female"
//     },
//     { "id": 2, "pids": [
//         1
//     ], "name": "Ava Field", "gender": "male"
//     },
//     { "id": 3, "mid": 1, "fid": 2, "name": "Peter Stevens", "gender": "male"
//     }
// ]);

var arrItems = []; // THE ARRAY TO STORE JSON ITEMS.

$(document).ready(function () {
    $.getJSON("./dataArray.json", function (data) {  
        $.each(data, function (index, value) {
            arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
        });
    });
});

family.load(arrItems);
