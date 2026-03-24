
// Closure and Encapsu;lation
function BankAccount(){
    let balance=0;
    return{
        deposit:function(amount){
            balance+=amount;
            console.log("Your Balance is "+balance+" "+"rupees");
        },
        withdraw:function(amount){
            balance-=amount;
            console.log("Your balance is "+balance+" "+"rupees");
        },
        total:function(){
            console.log("Your total Bank balance is "+balance+" "+"rupees");
        }
    }
}
let account=BankAccount()
account.deposit(1000);
account.withdraw(450);
account.total();