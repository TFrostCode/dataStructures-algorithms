// Create an array with 5 students names, after that create a function which takes 2 aparameters (allStudents, studentName) and returns the position of the student in the array. If the student is not in the array, the function should return -1.
// iterate over all students and find that specific user "studentName"

const arrayStudents = ["John", "George", "Jack", "Alain", "Daniel"];

const findStudent = (allStudents, studentName) => {
  if (!Array.isArray(allStudents))
    return "The first parameter should be an array";
  if (typeof studentName !== "string")
    return "The second parameter should be a string";

  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      return `The student ${studentName} is in position ${i}`;
    }
  }

  return `The student ${studentName} isn't in the array`;
};

console.log(findStudent(arrayStudents, "George"));
console.log(findStudent(arrayStudents, "Papu"));
