/*
//function that make a proper view of search request;
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
        title: "  протеин новый  Best"
    },
    {
        title: "протеин новый лучший"
    }

];
//this is the word from input
let searchWord = "protein Best Nutrition";
let searchWord2 = "протеин новый лучший";

function properSearchString(string) {
    const firstStep = string.split(/\s+/);
    const secondStep = firstStep.map(elem => `\\b${elem}`);
    return secondStep.join("|");
}
searchQuery = new RegExp(properSearchString(searchWord), "gi");

function generalSearchForGoodsMod(searchQuery, arr) {
    console.log("reg expression", searchQuery);
    let sortedByLength = arr.map(good => {
        let itemLength = XRegExp.match(good.title, searchQuery, "all");
        good.itemMatchLength = itemLength.length;
        return good;
    });

    const sortedArr = sortedByLength.sort(
        (a, b) => b.itemMatchLength - a.itemMatchLength
    );
    // array sorted by relevance condition
    return (sortedArr);
}
let relevant = generalSearchForGoodsMod(searchQuery, testArr);
console.log("relevantArr", relevant);






*/


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
        title: "  протеин новый  Best"
    }
    ];
    //this is the word from input
    let searchWord = "protein Best Nutrition";
    let searchWord2 = "протеин новый лучший";

    function properSearchString(string) {
        const firstStep = string.split(/\s+/);
        const secondStep = firstStep.map(elem => `\\b${elem}`);
        return secondStep.join("|");
    }

    searchQuery = new RegExp(properSearchString(searchWord), "gi");

    function generalSearchForGoodsMod(searchQuery, arr) {
        console.log("reg expression", searchQuery);
        let sortedByLength = arr.map(good => {
            let itemLength = good.title.match(searchQuery);
            //another approach with XegExp look like this but don't work either
            //let itemLength = XRegExp.match(good.title, searchQuery, "all");
            good.itemMatchLength = itemLength.length;
            return good;
    });

    const sortedArr = sortedByLength.sort(
        (a, b) => b.itemMatchLength - a.itemMatchLength
    );
    // array sorted by relevance condition
    return (sortedArr);
    }

    let relevant = generalSearchForGoodsMod(searchQuery, testArr);
    console.log("relevantArr", relevant);