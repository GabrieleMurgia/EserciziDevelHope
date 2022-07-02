class BankAccount{

    constructor(number){
        this.number = number; 
    }

    deposit(number){
        this.number += number;
    }
    withdraw(number){
        this.number -=number;
    }
    view(){
        console.log(`${this.number}`);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();