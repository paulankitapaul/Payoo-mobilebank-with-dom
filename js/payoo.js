document.getElementById('button-id').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('clickeed')
    const phoneNumber = document.getElementById('phone-id').value
    const pinNumber = document.getElementById('pinNumber').value
    console.log(phoneNumber,pinNumber)
    if(phoneNumber ==='0182'&& pinNumber ==='1234'){
        console.log('yay suceessful')
        window.location.href = '/home.html'
    }
    else{
        alert('ooppsssss!!!!!!!!!!!!!')
    }
})