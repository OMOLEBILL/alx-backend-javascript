import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(obj) {
  const arr = getListStudentIds(obj);
  return arr.reduce((acc, constv) => acc + constv);
}
