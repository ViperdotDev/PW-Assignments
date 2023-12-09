// Q2. Write a program that grades students based on their marks.
// • If greater than 90 then A Grade
// • If between 70 and 90 then a B grade
// • If between 50 and 70 then a C grade
// • Below 50 then an F grade

let marksOfStudent = 7;

switch (true) {
  case marksOfStudent > 90:
    console.log('A grade');
    break;
  case marksOfStudent > 70 && marksOfStudent < 90:
    console.log('B grade');
    break;
  case marksOfStudent > 50 && marksOfStudent < 70:
    console.log('C grade');
    break;
  default:
    console.log('F grade');
    break;
}
