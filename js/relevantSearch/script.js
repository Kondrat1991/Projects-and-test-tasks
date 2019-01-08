
// Масив, який получимо з бази
let testArr = [
    {
        title: "Best protein Nutrition"
    },
    {
        title: "Best protein"
    },
    {
        title: "протеин Nutrition"
    },
    {
        title: "протеин Best Nutrition"
    },
    {
        title: "protein Best Nutrition"
    },

    {
        title: "Best протеин"
    },
    {
        title: "  протеин новый  лучший"
    }
];

//this is the word from input
let searchWord = "protein Best Nutrition";
let searchWord2 = "лучший Протеин новый";
let searchWord3 = "протеин";



// функція для знаходження спільних слів в 2-х масивах
function intersect_arrays(a, b) {
    var sorted_a = a.concat().sort();
    var sorted_b = b.concat().sort();
    var common = [];
    var a_i = 0;
    var b_i = 0;

    while (a_i < a.length && b_i < b.length)
    {
        if (sorted_a[a_i] === sorted_b[b_i]) {
            common.push(sorted_a[a_i]);
            a_i++;
            b_i++;
        }
        else if(sorted_a[a_i] < sorted_b[b_i]) {
            a_i++;
        }
        else {
            b_i++;
        }
    }
    return common.length;
}


function generalSearchForGoodsMod(searchWord, arr) {

    let searchWordArr = searchWord.toLowerCase().split(" ");
    let sortedByLength = arr.map(good => {
        let itemLength = intersect_arrays(good.title.toLowerCase().split(' '), searchWordArr);


        good.itemMatchLength = itemLength;
        return good;
    });

    const sortedArr = sortedByLength.sort(
        (a, b) => b.itemMatchLength - a.itemMatchLength
    );
// array sorted by relevance condition
    return (sortedArr);
}

console.log(generalSearchForGoodsMod(searchWord3, testArr));


/*var b = function () {
    alert("function b");
};

function a() {
    alert(("function a"));
}

b();
a();*/
