const char = (str) => {
  var result = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i];
    console.log(char);
    if (result[char] > 0) {
      //   console.log(result[char]);

      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

var finalResult = char("Mmaaanish !");
console.log(finalResult);
