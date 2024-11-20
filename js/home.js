// step 01 btn a eventlisterner add korte hbe

// step 02: get the added money
// step 03:get the pin number




// step 01 added event-listerner into the button 
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    // get the added money
    const addMoney = document.getElementById('added-money').value;
    console.log(addMoney);
    // step 03:get the pin number
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)

    
})