function capitalizeString(str) {
  return str.toUpperCase();
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = {
  capitalizeString,
  reverseString,
  countVowels
};
