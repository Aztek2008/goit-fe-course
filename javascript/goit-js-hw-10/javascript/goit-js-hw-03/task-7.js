'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  id: 0,

  /* Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции. */
  createTransaction(amount, type) {
    let id = this.transactions.length + 1;
    return {
      id,
      type,
      amount,
    };
  },

  /* Метод отвечающий за добавление суммы к балансу. Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции после чего добавляет его в историю транзакций */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, 'deposit'));
    return console.log(`Операция прошла успешно. Счет пополнен на ${amount} денег`);
  },

  /* Метод отвечающий за снятие суммы с баланса. Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции, после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение о том, что снятие такой суммы не возможно, недостаточно средств. */
  withdraw(amount) {
    if (amount > this.balance) {
      return console.log(`Снятие суммы в ${amount} денег невозможно - недостаточно средств`);
    } else {
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
      return console.log(`Операция прошла успешно. Счет опустошен на ${amount} денег`);
    }
  },

  getBalance() {
    return this.balance;
  },

  /* Метод ищет и возвращает объект транзации по id */
  getTransactionDetails(id) {
    return this.transactions.find(elem => elem.id === id);
  },

  /* Метод возвращает количество средств определенного типа транзакции из всей истории транзакций */
  getTransactionTotal(type) {
    return this.transactions.filter(elem => elem.type === type);
  },
};

account.deposit(100)
account.deposit(200)
account.withdraw(400)
account.deposit(300)
account.withdraw(100)


console.log(`Current balance:`, account.getBalance());

console.log(`Selected transaction:`, account.getTransactionDetails(2))

console.table(account.getTransactionTotal('deposit'));
console.table(account.getTransactionTotal('withdraw'));