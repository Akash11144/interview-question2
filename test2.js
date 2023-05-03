// to find anagram strings from array of strings
const ARR_LENGTH = 10000;
const findAnagrams = (arr) => {
  if (arr.length > ARR_LENGTH) return "Array length should be less than 10000";
  if (arr.length < 2) return [arr];
  let anagrams = {};
  arr.forEach((word) => {
    const sortedWord = word.split("").sort().join("");
    anagrams[sortedWord]
      ? anagrams[sortedWord].push(word)
      : (anagrams[sortedWord] = [word]);
  });
  return Object.values(anagrams).filter((anagram) => anagram.length > 0);
};

console.log(findAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(findAnagrams([""]));
console.log(findAnagrams(["a"]));
console.log(findAnagrams([]));
