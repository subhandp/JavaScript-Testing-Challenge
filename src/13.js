class Stats {
    constructor(dataset) {
        this.datasetLength = dataset.length;
        this.maxVal = Math.max(...dataset);
        this.minVal = Math.min(...dataset);
        this.datasetSum = dataset.reduce((a, b) => a + b, 0);
        this.statsVal = {};
        this.statsVal['mean'] = this.datasetSum / this.datasetLength;
        this.statsVal['median'] = this.median(dataset);
        this.statsVal['range'] = this.maxVal - this.minVal;
        this.statsVal['mode'] = this.mode(dataset);
        this.statsVal['largest'] = this.maxVal;
        this.statsVal['smallest'] = this.minVal;
        this.statsVal['sum'] = this.datasetSum;
        this.statsVal['count'] = this.datasetLength;
        return this.statsVal;
    }
    median(dataset) {
        const sorted = dataset.sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);

        if (sorted.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        }

        return sorted[middle];
    }
    mode(dataset) {
        let object = {};
        dataset.map((v) => {
            if (object[v] === undefined) {
                object[v] = 0
            }
            object[v] += 1
        })

        let modeVal = Object.keys(object).filter(x => {
            return object[x] == Math.max.apply(null,
                Object.values(object));
        });

        return modeVal.join(', ') + `, each appeared ${object[modeVal[0]]} times`

    }
}

module.exports = Stats;