export default function getStudentsByLocation(list, city) {
  const reduced = list.filter((item) => item.location === city);
  return reduced;
}
