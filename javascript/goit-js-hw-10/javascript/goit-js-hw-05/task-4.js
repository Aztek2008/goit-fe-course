'use strict';

class StringBuilder {
  constructor(str) {
    this._value = str;
  }

  // Геттер value - возвращает текущее значение поля _value
  get value() {
    return this._value;
  }

  //  - получает парметр str (строку) и добавляет ее в конец _value
  append(str) {
    this._value = this._value + str;
  }

  // Метод - получает парметр str (строку) и добавляет ее в начало value
  prepend(str) {
    this._value = str + this._value;
  }

  // Метод  - получает парметр str (строку) и добавляет ее в начало и в конец _value
  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.value); // '.^'

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='