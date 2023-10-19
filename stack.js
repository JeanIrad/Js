class StackFrontier {
  constructor(data=[]) {
    this.data = data
    this.next = null;
  }
  addItem(item) {
    if (this.data === null) {
      this.data = item;
      return this
    } else {
      this.data.push(item);
      return this
    }
  }
  removeItem(){
    if( this.data === null){
        console.log('Nothing remains in the stack')
        return this
    }else{
        this.data.pop()
        return this
    }
  }
  extendStack(node){
    if(this.next === null){
        this.next = node
        return this.next
    }
  }
}
const obj = {
    name: 'Jean',
    age: 23,
    email: 'jado.milton@gmail.com',
    address: 'Kigali'
}
const nextObj = {...obj, name: 'Paul', email: 'paul@gmail.com'}
Object.seal(obj)
let mystack = new StackFrontier([obj]),
nextNode = new StackFrontier([nextObj]),
more = new StackFrontier(['test'])
more.addItem(obj)
nextNode.extendStack(more)

nextNode.addItem(nextObj)
mystack.extendStack(nextNode)

// mystack.addItem(obj)
mystack.removeItem()
mystack.addItem(obj)
mystack.removeItem()
console.log(mystack)
// console.log(mystack.removeItem())
// console.log(mystack.removeItem())
// console.log(nextNode.next)