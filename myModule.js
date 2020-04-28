// Author Alper Dedeoglu

var Transaction  = function(balance){
     this.balance = balance;
     this.constructor.prototype = Object.create({
        add: (value) => {
          this.balance = this.balance + value;
          console.log(this.balance);
        }
    })
};


module.exports = Transaction;