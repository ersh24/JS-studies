function calculator() {
  let a = +prompt('Введи первое число');
  let b = +prompt('Введи второе число');
  let operator = prompt('Введите оператор');
  console.log(operator);
  switch (operator){
    case '+':
      alert (a + b)
      break;
    case '-':
      alert (a - b)
      break;
    default:
      alert('try another')
  }
}
calculator()

let str = 'Ослик иа-иа смотрел на виадук';
let substring = 'иа'

function search(str,substring){
  let foundIndex =0;
  while(foundIndex != -1){
   foundIndex = str.indexOf(substring,foundIndex);
   if (foundIndex !=-1){
     console.log(foundIndex)
     foundIndex++
   }
  }
}

search(str,substring)
