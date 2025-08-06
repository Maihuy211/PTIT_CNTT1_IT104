const type: string = "hello world apple banana orange pumpkin cucumber";
const words: string[] = type.split(" ");

let longestWord: string = "";

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let resultStr = "";

    for (let j = 0; j < word.length; j++) {
        let char = word.charAt(j);
        if (!resultStr.includes(char)) {
            resultStr += char;
        }
    }

    if (resultStr.length === word.length) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
}

console.log(longestWord);
