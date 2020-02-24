const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longest = {name:"", course: ""}
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longest.name.length) {
      // add instructor names to longest object
      longest.name = instructors[i].name
      longest.course = instructors[i].course
    }
  }
  return longest
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));


console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));



