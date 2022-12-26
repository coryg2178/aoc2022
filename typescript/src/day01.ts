const makeArr = (data: string) => {
  return data.split("\n\n").map((i) =>
    i
      .split("\n")
      .map(Number)
      .reduce((total, i) => total + i, 0)
  );
};

export const d1p1 = (data: string) => {
  const arr = makeArr(data);
  return Math.max(...arr);
};

export const d1p2 = (data: string) => {
  const arr = makeArr(data);
  return arr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((current, i) => current + i, 0);
};

export const dayOne = (data: string) => {
  console.log(`Part 1 solution: ${d1p1(data)}`);
  console.log(`Part 2 solution: ${d1p2(data)}`);
};
