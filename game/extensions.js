Date.prototype.add = function(milliseconds) {  
    return new Date(this.getTime() + milliseconds);  
}

Math.randomBetween = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}