export const range = (start, end, step = start - end <= 0 ? 1 : -1) => {
  const result = [];
  // if ((start - end > 0 && step > 0) || (start - end < 0 && step < 0))
  if ((start - end) * step > 0) return result;
  if (step === 0 || start === end || (start === 0 && end === undefined))
    return [start];
  for (let i = start; start <= end ? i <= end : i >= end; i += step)
    result.push(i);
  if (end === undefined)
    for (let i = start > 0 ? 1 : start; start > 0 ? i <= start : i < 0; i += 1)
      result.push(i);
  return result;
};
