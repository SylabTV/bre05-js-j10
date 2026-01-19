class BankAccount {
    accountNb;
    balance;
    operations;

    constructor(accountNb, balance) {
        this.accountNb = accountNb;
        this.balance = balance;
        this.operations = [];
    }

    // methode ajouter
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.operations.push(`deposit + ${amount}`);
        }
    }

    // methode retirer
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.operations.push(`withdraw - ${amount}`);
        }
        else{
            return "solde insuffisant"
        }
    }

    // methode des operations
    getOperations() {
        return this.operations;
    }
}

