const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
tutorials = tutorials.map(function (tutorials) {
    let count = tutorials.split(" ").length;
    let arrayString = tutorials.split(" ");
    for (let i = 0; i < arrayString.length; i++) {
        arrayString[i] =arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1);
    }
    let newString = "";
    for (let i = 0; i < arrayString.length; i++) {
        if (i == arrayString.length - 1) {
            newString += arrayString[i];
        } else {
            newString += arrayString[i] + " ";
        }
    }
    return (tutorials = newString);
});
const titleCased = () => {
  return tutorials
}