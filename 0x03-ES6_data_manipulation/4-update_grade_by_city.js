/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, Grades) {
  return students.filter((item) => item.location === city)
    .map((student) => {
      Grades.map(((grades) => {
        if (grades.studentId === student.id) {
          student.grade = grades.grade;
        }
        if (student.grade === undefined) {
          student.grade = 'N/A';
        }
        return student;
      }));
      return student;
    });
}
