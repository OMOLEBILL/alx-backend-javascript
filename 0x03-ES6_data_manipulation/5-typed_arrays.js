export default function createInt8TypedArray(len, pos, val) {
  if (pos < 0 || pos >= len) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(len);
  const int8 = new Int8Array(buffer);
  int8[pos] = val;
  const view = new DataView(buffer);
  return view;
}
