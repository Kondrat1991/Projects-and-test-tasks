
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
    console.log(typeof(searchWordArr));
    console.log("searchWordArr", searchWordArr);
    let sortedByLength = arr.map(good => {

        let itemLength = intersect_arrays(good.title.toLowerCase().split(' '), searchWordArr);
        console.log("itemLength",itemLength);
        good.itemMatchLength = itemLength;
        return good;
    });

    const sortedArr = sortedByLength.sort(
        (a, b) => b.itemMatchLength - a.itemMatchLength
    );
// array sorted by relevance condition
    return (sortedArr);
}

console.log(generalSearchForGoodsMod(searchWord2, testArr));






/*function generalSearchForGoodsMod(parameters, callback) {
    console.log("param look",parameters.where.title);
    sails.models.shopgood
        .find(parameters)
        .populate("stock")
        .populate("subGroup")
        .exec((err, shopGoods) => {
            if (err) {
                return callback(err, null);
            }
            if (parameters.sort.dateSearchAd) {
                let first = parameters.where.title.toString().toLowerCase();
                let second = first.split("/");
                second.pop();second.shift();
                let fifth = second.toString();
                console.log("let fifth",fifth);
                let seven = fifth.split(/[\s,]+/)
                console.log("searchWordArr",seven);

                const sortedByLength = shopGoods.map(good => {
                    console.log("good title unmodified",(good.title));
                    console.log("good.title",(good.title.toString().toLowerCase().split(" ")));

                    let itemLength = intersect_arrays(seven, good.title.toString().toLowerCase().split(' '));

                    /!*let filteredStrings = {search:fifth, select:good.title.toString().toLowerCase()};

                    let result = filteredStrings.select.match(new RegExp('[' + filteredStrings.search + ']', 'g')).join('');

                    console.log("filteredStrings",result);

                    let itemLength = result.length;*!/

                    console.log("itemLength",itemLength);
                    good.itemMatchLength = itemLength;

                    return good;
                });
                const sortedArr = sortedByLength.sort(
                    (a, b) => b.itemMatchLength - a.itemMatchLength
                );

                // array sorted by relevance condition
                /!* console.log("sortedArr",sortedArr);*!/
                return callback(null, sortedArr);
            }
            // and here by price value
            return callback(null, shopGoods);
        });
}*/


