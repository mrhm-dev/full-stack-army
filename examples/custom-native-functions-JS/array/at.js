// Ex: Array.prototype.at()

const at = (array = [], index = 0) => {
    if(index >= 0) {
        return array[index]
    }else{
        return array[array.length - Math.abs(index)]
    }
}

