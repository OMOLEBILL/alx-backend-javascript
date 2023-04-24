export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const list = arr.map((item) => item.id);
  return list;
}
