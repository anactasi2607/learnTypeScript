// boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// number
const int: number = 42;
const float: number = 4.2;
const num: number = 2e10;

// string
const message: string = 'Hello';

// array
const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7]; // это жденерик тип;
const stringArray: Array<string> = ['Hello', 'TypeScript'];

// tuple
const contact: [string, number] = ['Helen', 123456];

// any
let variable: any = 42;
variable = 'String';

// function
// void - Значит функция ничего не вернет;
function sayName(name: string): void {
  console.log(name);
};

sayName('Настя');

// never - когда функция либо возвращает ошибку и никогда не заканчивает свое выполнение, либо когда она постоянно что-либо делает;

function throwError(message: string): never {
  // всегда выбросит ошибку;
  throw new Error(message);
}

function infinite(): never {
  while (true) {
    // никогда не завершится;
  }
}

// type - позволяет создавать собственные типы. Можно алиасы для примитивов.
// И позволяет указывать различные типы данных для одной переменной;
type Login = string;
const login: Login = 'admin';

type id = string | number;
const numberId: id = 123;
const stringId: id = '123';

type SomeType = string | null | undefined;