class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try{
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    }
    this.#amount += amount;
  }
  catch(err){
    console.log("")
  }
  }

  withdraw(amount) {
    try{
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    }

    if (this.#amount < amount) {
      throw new Error('You cannot withdraw more than account balance');
    }
  

    this.#amount -= amount;
  }
  catch(err){
    if (amount < 0) {
      console.log("hai inserito un importo negativo! Sbadatino")
    }
    if (this.#amount < amount) {
      console.log("Hai inserito un importo maggiore ai tuoi risparmi!! Monellino")
    }
  }
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();