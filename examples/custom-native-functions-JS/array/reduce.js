// Ex: Array.prototype.reduce()

Array.prototype.myReduce = function (cb, initValue = 0) {
    let acc = initValue

    for(let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }

    return acc
}
