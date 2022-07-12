// Ex: Array.prototype.at()

Array.prototype.myAt = function(index = 0) {

    if(index >= 0) {
        return this[index]
    }else{
        return this[this.length - Math.abs(index)]
    }
}
