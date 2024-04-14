class BannkAccount{
    constructor(accountNumber, ownerName,balance){
        this.accountNumber = accountNumber;
        this.owenerName = ownerName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount){
        if(amount>this.balance){
            console.log("Insufficient funds");
        }
        else{
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owener Name: ${this.owenerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

const account1 = new BannkAccount(1001, "Mariom", 1500);
const account2 = new BannkAccount(1002, "Maria", 1500);
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(100);
