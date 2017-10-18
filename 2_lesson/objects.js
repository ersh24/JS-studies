const obj = {};
const obj1 = new Object();
obj.name = "Вася"
obj.age = 25
console.log(obj)

const obj2 = {
	name:"Вася",
  age:25
}
obj2.name

const fieldName = 'age'
console.log(obj2[fieldName])
console.log(obj2['age'])

const obj3 = {
	func(a,f){
  	console.log('')
  }
}
obj3.func


const obj4 = {
	name:"sadf"
}
const newObject =
Object.assign({},obj4);
console.log(newObject)

const obj5 = {name: 'ASFD'};
const copy = {...obj5};
console.log(copy)


//Massiv
const arr = [2,4,7,8,'asd',{}];

//pop,push,shift,unshift

arr.push(4)
console.log(arr)

arr.pop();
console.log(arr)


arr.unshift('first')
console.log(arr)

arr.shift()
console.log(arr)


map()
forEach()

for (let i, i<arr.length,i++){}

sort(a,b){
  return a-b
}

arr.filter()
arr.find()
arr.reduce()

const sum arr = [2,3,4,45]

const sum = arr.reduce((previosValue,element)=> {
    return previosValue+element
  },0)

arr.splice()
