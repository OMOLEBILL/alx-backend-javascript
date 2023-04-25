export default function groceriesList() {
  const map = new Map();
  const objs = {
    Apples: 10, Tomatoes: 10, Pasta: 1, Rice: 1, Banana: 5,
  };
  const keys = Object.keys(objs);
  keys.map((item) => map.set(item, objs[item]));
  return map;
}
