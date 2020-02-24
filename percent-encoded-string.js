const urlEncode = function(text) {
  // Put your solution here
  let trimText = text.trim()
  let newText = ""
  for (let i = 0; i < trimText.length; i++) {
    if (trimText[i] === " ") {
      newText += "%20"
    } else {
      newText += trimText[i]
    }
  }
  return newText
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));