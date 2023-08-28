const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
const arrayOfStrings: Array<string> = ['hello', 'typescript'];

// Тип T будет динамически подстраиваться под переданные аргументы;
function reverce<T>(array: T[]): T[] {
  return array.reverse();
}
