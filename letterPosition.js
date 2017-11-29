var phrase = "lighthouse in the house";

function countLetters(str) {
//store results in here
  var obj = {};
  str = str.split(' ').join('');
  for (var i = 0; i < str.length; i++) {
    var inst = str[i];
    if (obj[inst] === undefined) {
      obj[inst] = [];
    }
    obj[inst].push(i);
  }
  return obj;

}

console.log(countLetters(phrase));