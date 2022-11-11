let walletBal=0;

function add(){
walletBal = document.getElementById("amount").value;
localStorage.setItem("amount", walletBal);
}

if(localStorage.getItem("amount"==null)){
bal=0;
}else{
    bal=localStorage.getItem("amount");
}
document.querySelector("h1").innerText=bal;