export default  function parseAmount(str) {
  return replaceComma(str)*100;
}
export function replaceComma(str){
  return str.replace(',','.');
}

 export function Domagic(str) {
  let myStr = '';
  for (let i = 0; i < str.length; i++) {
    let count = str.toLowerCase().split(str[i].toLowerCase()).length - 1;
    if (count > 1) {
      myStr = myStr + ')';
    } else {
      myStr = myStr + '(';
    }
  }
  return (myStr);
}
