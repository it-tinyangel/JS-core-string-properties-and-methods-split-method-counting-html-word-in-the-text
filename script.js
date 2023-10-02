const userInputText = prompt('Input your text:');

const countWord = (str) => {
  const arrayOfWords = str.split(' ');

  let count = 0;
  
  for (let i= 0; i < arrayOfWords.length; i++) {
    //  if (arrayOfWords[i] == 'html') {
     if (arrayOfWords.at(i) == 'html') {
      count++;
    }
  }

  return count;
}

console.log(`The number of 'html' word in '${userInputText}' is ${countWord(userInputText)}`);
