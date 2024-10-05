function Swap(a, b) {
  [a, b] = [b, a];
  return {
    a: a,
    b: b,
  };
}
