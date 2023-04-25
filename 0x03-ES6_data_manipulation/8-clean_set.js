export default function cleanSet(set, str) {
  if (str === undefined || str.length === 0) {
    return '';
  }
  const list = [];
  for (const item of set) {
    if (item.startsWith(str)) {
      list.push(item.substring(str.length));
    }
  }
  return list.join('-');
}
