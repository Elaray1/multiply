module.exports = function multiply(first, second) {
  let array = [];
  let result = "";
  for(let i = first.length-1; i >= 0; i--) {
    let row = "";
    let add = 0;
    for(let j = second.length-1; j >= 1; j--) {
      let num = (+first[i] * +second[j])+add;
      add = Math.floor(num/10);
      num = num%10;
      row += num;
    }
    row += ((+first[i] * +second[0]) + add).toString().split("").reverse().join("");
    row = row.split("").reverse().join("");
    array.push(row);
  }
  for (let i = 1; i < array.length; i++) {
    array[i] += "0".repeat(i);
  }
  let maxLength = array[array.length-1].length;
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = "0".repeat(maxLength - array[i].length) + array[i];
  }
  let add = 0;
  let sum = 0;
  for (let i = maxLength - 1; i >= 1; i--) {
    sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += +array[j][i];
    }
    sum += add;
    add = Math.floor(sum/10);
    result = sum % 10 + result;
  }
  sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += +array[i][0];
  }
  result = sum + add + result;
  return result;
}
