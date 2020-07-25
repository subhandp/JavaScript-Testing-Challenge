function stats(a) {
    // // return dataset.reduce((a, b) => a + b, 0) / dataset.length
    // let counts = {};
    // dataset.map((v) => {
    //     if (counts[v] === undefined) {
    //         counts[v] = 0
    //     }
    //     counts[v] += 1
    // })

    // console.log(counts);


    return Object.values(
        a.reduce((count, e) => {
            if (!(e in count)) {
                count[e] = [0, e];
            }

            count[e][0]++;
            return count;
        }, {})
    ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];




}


function median(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

// {
//     "mean": 22.142857142857,
//     "median": 23,
//     "range": 36,
//     "mode": "38, 23, each appeared 2 times",
//     "largest": 38,
//     "smallest": 2,
//     "sum": 155,
//     "count": 7
// }

// console.log(median([10, 2, 38, 23, 38, 23, 21]))
console.log(stats([10, 2, 38, 23, 38, 23, 21]))