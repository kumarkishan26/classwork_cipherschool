//implement a stack datastructure using class keyword

class Stack{
    constructor(){
        this.array= [];
    }

    isEmpty(){
        return this.array.length ==0;
    }

    push(item){
        this.array.push(item);
    }

    pop(){
        if(this.array.length ==0){
            return "underflow";
        }
        return this.array.pop();
    }

    top(){
        return this.array[this.array.length -1];
    }

    printStack(){
        var str = " ";
        for( var i=0;i< this.array.length;i++)
        {
            str+= this.array[i]+ " ";
        }
        return str;
    }
}
var stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.top());
stack.push(40);
console.log(stack.printStack());