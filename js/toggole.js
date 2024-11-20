document.getElementById('cash-out').addEventListener('click',function(){
     document.getElementById('show-cash-out-form').classList.remove('hidden')
    // hide the add money button
    document.getElementById('show-addMoney-form').classList.add('hidden')
    

})
// Add money btn click
document.getElementById('add-money').addEventListener('click',function(){
    document.getElementById('show-addMoney-form').classList.remove('hidden')
    document.getElementById('show-cash-out-form').classList.add('hidden')
})