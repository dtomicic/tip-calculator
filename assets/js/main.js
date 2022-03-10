const bill = document.getElementById('billAmount');
const people = document.getElementById('peopleNumber');
const zeroCheck = document.getElementById('zeroCheck');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const reset = document.getElementById('resetBtn');
const fivePercent = document.getElementById('5p');
const btn = document.getElementsByClassName
('main__bigBoxInputSectionTipPresetsItem');
const overlay = document.getElementById('overlay');
const customAmount = document.getElementById('tipInp');



// Selecting the tip
document.querySelectorAll('.main__bigBoxInputSectionTipPresetsItem')
.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        element.classList.toggle('active');
        reset.classList.remove('disabled');
        overlay.classList.remove('overlayHide');
        if(bill.value > 0 && people.value > 0){
            calculate();
            console.log(bill.value);
        }

        if (element.classList.contains('accentedItem')) {
            overlay.classList.toggle('overlayHide');
        }
    })
})



// Getting the bill and people amounts
bill.addEventListener('input', () =>  {
    if (bill.value > 0 && people.value > 0){
        reset.classList.remove('disabled');
        calculate();
    }
})

people.addEventListener('input', () =>  {
    if (bill.value > 0 && people.value > 0){
        reset.classList.remove('disabled');
        calculate();
    }

    if (people.value == 0) {
        zeroCheck.classList.add('shown');
    }
    else {
        zeroCheck.classList.remove('shown');
    }
})

customAmount.addEventListener('input', () => {
    if (customAmount.value > 0 && customAmount.value < 100) {
        calculate();
    }
})

// Reset btn
reset.addEventListener('click', () => {

    totalAmount.innerHTML = "$0.00";
    tipAmount.innerHTML = "$0.00";
    bill.value = '';
    people.value = '';
    document.querySelector('.active').classList.remove('active');
    fivePercent.classList.add('active');
    zeroCheck.classList.remove('shown');
    reset.classList.add('disabled');
    overlay.classList.remove('overlayHide')
})




// Functions

function calculate() {
    const billValue = bill.value;
    const peopleValue = people.value;
    let tipFinal;
    let totalFinal;

    // Calculate tip

    if (btn[0].classList.contains('active')) {
        tipFinal = ((billValue * 0.05) / peopleValue).toFixed(2);
        tipAmount.innerHTML = "$" + `${tipFinal}`;
    }
    else if (btn[1].classList.contains('active')) {
        tipFinal = ((billValue * 0.1) / peopleValue).toFixed(2);
        tipAmount.innerHTML = "$" + `${tipFinal}`;
    }
    else if (btn[2].classList.contains('active')) {
        tipFinal = ((billValue * 0.15) / peopleValue).toFixed(2);
        tipAmount.innerHTML = "$" + `${tipFinal}`;
    }
    else if (btn[3].classList.contains('active')) {
        tipFinal = ((billValue * 0.25) / peopleValue).toFixed(2);
        tipAmount.innerHTML = "$" + `${tipFinal}`;
    }
    else if (btn[4].classList.contains('active')) {
        tipFinal = ((billValue * 0.50) / peopleValue).toFixed(2);
        tipAmount.innerHTML = "$" + `${tipFinal}`;
    }
    else if(btn[5].classList.contains('active')){
        const percentage = customAmount.value / 100;

        tipFinal = ((billValue * percentage) / peopleValue).toFixed(2);
        tipAmount.innerHTML = "$" + `${tipFinal}`;
    }
    // Calculate final

    totalFinal = (billValue / peopleValue) + parseFloat(tipFinal);

    if (totalFinal == Infinity || totalFinal == NaN) {
        totalAmount.innerHTML = "$0.00";
    }
    else {
        totalAmount.innerHTML = "$" + `${parseFloat(totalFinal).toFixed(2)}`;
    }
}

