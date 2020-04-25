const Fruit = require("./Fruit");
class FruitBasket {
    constructor(id, max_weight) {
        this.id = id;
        this.max_weight = max_weight;
        this.contents = [];
    }

    addFruits(contents) {
        contents.map(fruit => {
            this.contents.push(new Fruit(fruit.type, fruit.color, fruit.weight));
        })
        return;
    }

    getTotalWeight() {
        return this.contents.reduce(function (acc, obj) { return acc + obj.weight; }, 0);
    }

    getTotalFruits() {
        return this.contents.length;
    }

    groupFruitsByType() {
        let res = this.contents.reduce(function (r, fruit) {
            r[fruit.type] = r[fruit.type] || [];
            r[fruit.type].push(fruit);
            return r;
        }, Object.create(null));
        let result = [];
        for (let key in res) {
            result.push({ type: key, count: res[key].length })
        }
        return result;
    }

    getBasetDetails() {
        return {
            id: this.id,
            total_fruits: this.getTotalFruits(),
            total_weight: this.getTotalWeight(),
            fruit_counts: this.groupFruitsByType(), 
        }
    }
}

module.exports = FruitBasket;