// []

class Stack {
    constructor(){
        this.arr = []
    }
    //peek, push, pop, length

    peek = () => {
        if(this.arr.length == 0){
            return null
        }
        return this.arr[this.arr.length - 1]
    }

    push = (el) => {
        this.arr.push(el)
        
    }

    pop = () => {
        if(this.arr.length == 0){
            return undefined
        }
        return this.arr.pop()
        
    }

    length = () => {
        return this.arr.length
    }
}

module.exports = Stack