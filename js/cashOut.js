document.getElementById('cashOut-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmmount = document.getElementById('cashOut-money').value
    const cashOutAmmountNumber = parseFloat(cashOutAmmount)
    console.log(cashOutAmmount)
    const pin = document.getElementById('cashOut-pin').value
    console.log(pin);
    // it is a wrong process..
    if(pin==='1234'){
        console.log('money is reducing')
        const total = document.getElementById('total-ammout').innerText
        console.log(total)
        const totalNumber = parseFloat(total);
        const updateValue = totalNumber - cashOutAmmountNumber;
        console.log(updateValue);
        document.getElementById('total-ammout').innerText = updateValue


    }
    else{
        alert("oopsssss!!!!!! Try again this")
    }
})