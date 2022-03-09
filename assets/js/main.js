const bill = document.getElementById('billAmount');
const people = document.getElementById('peopleNumber');
const zeroCheck = document.getElementById('zeroCheck');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const reset = document.getElementById('resetBtn');



function calculate() {
    const x = bill.value;
    const y = people.value;

    return (x / y).toFixed(2);
}

bill.addEventListener('input', () =>  {
    const x = calculate();
    

    if(x == Infinity || x == NaN) {
        totalAmount.innerHTML = "$0.00"
    }
    else {
        totalAmount.innerHTML = `${x}`;
    }

})
people.addEventListener('input', () =>  {
    const x = calculate();

    if (people.value == 0) {
        zeroCheck.classList.add('shown');
    }
    else {
        zeroCheck.classList.remove('shown');
    }

    if(x == Infinity || x == NaN) {
        totalAmount.innerHTML = "$0.00"
    }
    else {
        totalAmount.innerHTML = "$" +`${x}`;
    }
})

reset.addEventListener('click', () => {
    totalAmount.innerHTML = "$0.00";
    bill.value = '';
    people.value = '';
})