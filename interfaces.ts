// Это некоторый тип, который служит для объектов или классов, где указываем,
// какие поля, функции, элементы должны присутствовать у этих объектов;
// Интерфейсы ни во что не компилируются.

interface Rect {
  readonly id: string, // readonly- только для чтения;
  color?: string, // Знак ? обозначает необязательное поле;
  size: {
    width: number,
    height: number,
  }
};

const newRect: Rect = {
  id: '123',
  size: {
    width: 24,
    height: 14,
  }
};

const newRect2: Rect = {
  id: 'e4bg14j',
  size: {
    width: 100,
    height: 60,
  }
};

newRect2.color = 'red';

// Так тоже можно указывать, к какому типу будет относиться объект;
const rect3 = {} as Rect;
// Это альтернативная старая запись;
const rect4 = <Rect>{};

// Наследование интерфейсов;
interface RectWithArea extends Rect {
  getArea: () => number; // так обозначается тип "функция" и тип возвращаемых данных;
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 40,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// Интерфейсы могут взаимодействовать с классами;
// Интерфейсы часто называют с буквы I, чтобы было понятно, что это именно интерфейс;
interface IClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date;
  }
}

// Объект с большим количеством динамических ключей;
interface Styles {
  [key: string]: string,
}


const css: Styles = {
  border: '1px solid red',
  marginTop: '2px',
}