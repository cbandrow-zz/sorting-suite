let randomNumbers = []

export const ranNums = (min, max, number) => {

  for (let i = 0; i < number; i ++) {
    randomNumbers[i] = (Math.floor(Math.random() * max - min));
  }
  return randomNumbers;
}

let randomCharacters = []
let possibleChars = "abcdefghijklmnopqrstuvwxyz";

export const randomAlphabet = (maxChar) => {
  for (let i = 0; i < maxChar; i ++) {
    let letters = possibleChars.charAt(Math.floor(Math.random() *
    possibleChars.length))

    randomCharacters.push(letters);
  }
  return randomCharacters;
}
