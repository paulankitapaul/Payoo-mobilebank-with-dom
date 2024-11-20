// step 01 btn a eventlisterner add korte hbe

// step 02: get the added money
// step 03:get the pin number

// step 04 : get the total ammout and add this to addMoney
// step 05: update the value with total ammount




// step 01 added event-listerner into the button 
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    // get the added money
    const addMoney = document.getElementById('added-money').value;
    console.log(addMoney);
    // step 03:get the pin number
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)
    if(pinNumber==='1234'){
        console.log('money is added');
        //  step 04 if pin is correct then get the total ammount
        const totalAmmount = document.getElementById('total-ammout').innerText;
    console.log(totalAmmount);
    // convert it in number
    const addMoneyNumber = parseFloat(addMoney);
    const totalAmmountNumber = parseFloat(totalAmmount)
    // update the value with toal ammount
    const updateValue =addMoneyNumber +totalAmmountNumber ;
    console.log(updateValue);
    document.getElementById('total-ammout').innerText = updateValue;

    }
    else{
        console.log("oopssss!!!!!! try agin")
    }
    
    
})