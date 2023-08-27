class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string
  readonly numberOfWheels: number = 4

  constructor(theModel: string) {
    this.model = theModel // Несмотря на то, что поле model у нас только для чтения, его можно перезаписать в констукторе;
  }
}

// Далее более лаконичная запись того, что было выше;
// class Car {
//   readonly numberOfWheels: number = 4
//   constructor(readonly model:string) {}
// }

// Модификаторы. Бывают трех видов: protected, public, private. По-умолчанию все public;
// protected - данные поля будут доступны в Animal и во всех классах, которые от него наследуются.
// private - доступны только в том классе, в котором были определены. В Cat go уже недоступен.
// public- доступны для всех инстансов.

class Animal {
  protected voice: string = ''
  public color: string = 'black'

  private go() {
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
// cat.voice; // У cat уже недоступен voice, так как он protected;
cat.setVoice('hello')

// Абстрактные классы. Ни во что не компилируются, нужны на этапе разработки, чтобы от них отнаследоваться.
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('render');
  }

  info(): string {
    return 'This is info';
  }
}