let userInputText = prompt('Input your text:');

const countWord = (str) => {
  const arrayOfWords = str.split(' ');

  let count = 0, i = 0;
  for (i; i < arrayOfWords.length; i++) {
     if (arrayOfWords[i] == 'html') {
      count++;
    }
  }

  return count;
}

console.log(`The number of 'html' word in '${userInputText}' is ${countWord(userInputText)}`);