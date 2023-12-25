function ChkString(inputString) {
    var targetWord = "marvellous";
    var lowercasedInput = inputString.toLowerCase();
    for (var i = 0; i <= lowercasedInput.length - targetWord.length; i++) {
        if (lowercasedInput.substring(i, i + targetWord.length) === targetWord) {
            return true;
        }
    }
    return false;
}
var inputString = "Pune Kothrud Marvellous Infosystems";
var containsMarvellous = ChkString(inputString);
if (containsMarvellous) {
    console.log("The string contains the word \"Marvellous\".");
}
else {
    console.log("The string does not contain the word \"Marvellous\".");
}
