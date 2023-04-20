import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [19, 20, 34];
  const objs = [];
  for (const i of arr) {
    objs.push(new ClassRoom(i));
  }
  return objs;
}
