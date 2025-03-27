class myArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  get(index){
    return this.data[index]
  }

  pop(){
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  shift(){
    const firstItem = this.data[0]
    for(let i = 0; i < this.length - 1; i++){
        this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
    return firstItem
  }

  deletebyIndex(index){
    const item = this.data[index]
    for(let i = index; i < this.length - 1; i++){
        this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
    return item
  }
}

const myNewArray = new myArray()

console.log(myNewArray.push("apple"))
console.log(myNewArray.push("banana"))
console.log(myNewArray.push("orange"))
console.log(myNewArray.push("grape"))
console.log(myNewArray.deletebyIndex(0))
console.log(myNewArray)