const Transaction = require("./myModule");

const prepareFunction = () =>{
    console.log("data has been being prepared right know");
};

prepareFunction();

var oTransaction = new Transaction(100);
Transaction.prototype.add.apply(this,[10]);