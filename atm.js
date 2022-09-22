var balance = 1000
    
function withdraw(){
    var amountEntered = Number(userInput.value)
    if(amountEntered>balance){
        alert("Insufficient fund")
    }else if(amountEntered<0){
        alert("Out of bounds")
    }else if(amountEntered==""){
        alert("Kindly enter an amount")
    }else{
        balance = balance - amountEntered
        alert("Withdrawal Successful and your current balance is $" + balance)
        disp.innerText = balance
    }
    
}
function deposit(){
    var amountEntered = Number(userInput.value)
    if(amountEntered < 0){
        alert("invalid")
    }else{
        balance = amountEntered + balance
        alert("Deposit Successful and your new balance is $" + balance)
    }
  
}
function checkBalance(){
    disp.innerHTML = "Your balance is $" + balance + ""

}