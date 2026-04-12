const findLongestWord = sentence => {
  return sentence
    .split(" ")                // split sentence into words
    .reduce((longest, word) => 
      word.length > longest.length ? word : longest
    , "");
};

// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// Output: "jumped"
