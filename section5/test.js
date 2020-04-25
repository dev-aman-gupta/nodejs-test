const assert = require('assert');

let inputJSON = [{
    "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
    "max_weight": 8,
    "contents": [{
        "type": "apple",
        "color": "green",
        "weight": 1.5
    }, {
        "type": "apple",
        "color": "red",
        "weight": 1
    }, {
        "type": "pear",
        "color": "green",
        "weight": 2.5
    }]
}];

let outputJSON = [{
    "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
    "total_fruits": 3,
    "total_weight": 5,
    "fruit_counts": [{
        "type": "apple",
        "count": 2
    }, {
        "type": "pear",
        "count": 1
    }]
}]

describe('Input file has data', function () {
    it('should have at least 1 fruit basket data', function () {
        assert.notEqual(inputJSON.length, 0)
    });
});

describe('Total fruit basket weight', function () {
    it('should have inputJSON and outputJSON weight equal', function () {
        let totalWeight = inputJSON[0].contents.reduce(function (acc, obj) { return acc + obj.weight; }, 0);
        assert.equal(totalWeight, outputJSON[0].total_weight)
    });
});

describe('Total fruits in a fruit basket count', function () {
    it('should have inputJSON and outputJSON weight equal', function () {
        assert.equal(inputJSON[0].contents.length, outputJSON[0].total_fruits);
    });
});