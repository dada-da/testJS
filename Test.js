const results = [];

function mapnArray(...array) {
    const stashArray = array;
    let minVal = stashArray[0].length;
    let innerArrayIndex = stashArray.length;

    for(let i = 0; i < innerArrayIndex - 1; i++) {
        if(minVal > stashArray[i + 1].length) {
            minVal = stashArray[i + 1].length;
        }
    }

    for(let i = 0; i < minVal; i++){
        results[i] = [];
    }

    for(let i = 0; i < minVal; i++) {
        for(let y = 0; y < innerArrayIndex; y++) {
            results[i][y] = (stashArray[y][i]);
        }
    }
    return results;
}

console.log(mapnArray([1,2], [3,4,5], [6,7,8]));
//expected ouput [ [ 1, 3, 6 ], [ 2, 4, 7 ] ]

console.log(mapnArray([1,2,3,4,5], [6,7,8,9], [10,11,12,13,14,15,16]));
//expected ouput [ [ 1, 6, 10 ], [ 2, 7, 11 ], [ 3, 8, 12 ], [ 4, 9, 13 ] ]

console.log(mapnArray([1, 2], [3, 4], [5, 6, 7], [8, 9]));
//expected ouput [ [ 1, 3, 5, 8 ], [ 2, 4, 6, 9 ], [ 3, 8, 12 ], [ 4, 9, 13 ] ]

