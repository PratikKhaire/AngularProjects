function ChkString(inputString: string): boolean {
    var targetWord: string = "marvellous";
    var lowercasedInput: string = inputString.toLowerCase();

    for (let i = 0; i <= lowercasedInput.length - targetWord.length; i++) {
        if (lowercasedInput.substring(i, i + targetWord.length) === targetWord) {
            return true;
        }
    }

    return false;
}


var inputString: string = "Pune Kothrud Marvellous Infosystems";


var containsMarvellous: boolean = ChkString(inputString);

if (containsMarvellous) {
    console.log(`The string contains the word "Marvellous".`);
} else {
    console.log(`The string does not contain the word "Marvellous".`);
}
