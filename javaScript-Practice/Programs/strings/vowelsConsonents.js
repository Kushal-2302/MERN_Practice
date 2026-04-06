//?  Count vowels and consonants

//! Arrow Function Implementation

const countVowelsAndConsonants = (str) => {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0 ; consonantCount = 0;

    for (let char of str){
        if(/[a-zA-Z]/.test(char)){ //check only letters
            if(vowels.includes(char)){
                vowelCount++;
            } else {
                consonantCount++;
            }
        } 
    }
    return { vowels : vowelCount, consonents : consonantCount};
}
console.log(countVowelsAndConsonants("kushal kumar"));