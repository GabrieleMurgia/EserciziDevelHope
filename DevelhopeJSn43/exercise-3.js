class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative'); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error{
  constructor(message) {
    super(message); // (1)
    this.name = "NegativeAmountError";
    this.message = "Hai inserito un importo negativo!"
  }
}
class WithdrawNotPermittedError extends Error{
  constructor(message) {
    super(message); // (1)
    this.name = "WithDrawNotPermittedError";
    this.message = "Hai inserito un importo maggiore al tuo conto!"
  }

}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log(e.message);
}