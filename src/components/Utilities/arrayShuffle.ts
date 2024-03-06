export const shuffle = (arr: string[]): string[] => {
  if (!Array.isArray(arr)) {
    throw new Error('An argument should be an array');
  }
  
  return arr.sort(() => Math.random() - 0.5)
}