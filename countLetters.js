var phrase = "lighthouse in the house";

function countLetters(str) {
//store results in here
  var obj = {};
  str = str.split(' ').join('');
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (obj[letter] === undefined) {
      var = obj[letter] = 0;
    }
    obj[letter] += 1;
  }
  return obj;

}

console.log(countLetters(phrase));