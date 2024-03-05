import { shuffle } from "./arrayShuffle";

describe('Utils tests', () => {
  test('Test for function returning an array', () => {
    const arr = ['a', 'b']
    const shuffleArr = shuffle(arr);
    expect(Array.isArray(shuffleArr)).toEqual(true);
  })

  test('Test argument is not an array', () => {
    const argument = 'a';
    // @ts-ignore
    expect(() => shuffle(argument)).toThrow(new Error('An argument should be an array'))
  })
})