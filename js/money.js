//step 1 call button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('ggwp')
    // step 2 get info from the box
    // for input field value
    const depositField = document.getElementById('deposit-amount')
    const NewDepositAmountString = depositField.value;
    // convert
    const NewDepositAmount = parseFloat(NewDepositAmountString);
// up for clear
    depositField.value = '';
// VALIDATOR nan
    if(isNaN(NewDepositAmount)){
        alert('aise pola you are a bot')
        return;
    }
    //console.log(depositAmount);
    // step 3 push to deposit
        //for non input
    const depositTotal = document.getElementById('deposit')
    const prvDepositString = depositTotal.innerText;
    //convert to numb
    const prvDeposit = parseFloat(prvDepositString);

    const CurrentDepositTotal = prvDeposit + NewDepositAmount;

    depositTotal.innerText = CurrentDepositTotal;

    //step 4
    const balanceTotal = document.getElementById('total');
    const prvBalanceTotalString = balanceTotal.innerText;
    const prvBalanceTotal = parseFloat(prvBalanceTotalString);

    const CurrentBalanceTotal = prvBalanceTotal + NewDepositAmount;
    balanceTotal.innerText = CurrentBalanceTotal;

    // clear input
    
})

// withdraw

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    withdrawField.value= '';
    if(isNaN(newWithdraw)){
        alert('aise pola you are a bot')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw');
    const prvWithdrawTotalString = withdrawTotalElement.innerText;
    const prvWithdraw = parseFloat(prvWithdrawTotalString);



    const balanceTotal = document.getElementById('total');
    const prvBalanceTotalString = balanceTotal.innerText;
    const prvBalanceTotal = parseFloat(prvBalanceTotalString);
    
    if (newWithdraw > prvBalanceTotal) {
        alert('Hoga mara khau butper :)))')
        return;
    }

    const currantWithdrawTotal = prvWithdraw + newWithdraw;
    withdrawTotalElement.innerText = currantWithdrawTotal;

    const CurrentBalanceTotal = prvBalanceTotal - newWithdraw;
    balanceTotal.innerText = CurrentBalanceTotal;

    
})

// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // Get the value from the deposit amount input field
//     const depositField = document.getElementById('deposit-amount');
//     const NewDepositAmountString = depositField.value;

//     // Check if the entered value is a number
//     if (!isNaN(NewDepositAmountString)) {
//         // Convert the entered value to a number
//         const NewDepositAmount = parseFloat(NewDepositAmountString);

//         // Get the previous deposit total and add the new deposit amount to it
//         const depositTotal = document.getElementById('deposit');
//         const prvDepositString = depositTotal.innerText;

//         // Check if the previous deposit amount is a number
//         if (!isNaN(prvDepositString)) {
//             const prvDeposit = parseFloat(prvDepositString);
//             const CurrentDepositTotal = prvDeposit + NewDepositAmount;
//             depositTotal.innerText = CurrentDepositTotal;
//         } else {
//             // If the previous deposit amount is not a number, set the current amount to the entered value
//             depositTotal.innerText = NewDepositAmount;
//         }

//         // Get the previous balance total and add the new deposit amount to it
//         const balanceTotal = document.getElementById('total');
//         const prvBalanceTotalString = balanceTotal.innerText;

//         // Check if the previous balance amount is a number
//         if (!isNaN(prvBalanceTotalString)) {
//             const prvBalanceTotal = parseFloat(prvBalanceTotalString);
//             const CurrentBalanceTotal = prvBalanceTotal + NewDepositAmount;
//             balanceTotal.innerText = CurrentBalanceTotal;
//         } else {
//             // If the previous balance amount is not a number, set the current amount to the entered value
//             balanceTotal.innerText = NewDepositAmount;
//         }

//         // Clear the deposit amount input field
//         depositField.value = '';
//     } else {
//         // If the entered value is not a number, display an error message
//         alert('Please enter a valid number');
//     }
// });



// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdraw-amount');
//     const newWithdrawString = withdrawField.value;

//     // Check if the entered value is a number
//     if (!isNaN(newWithdrawString)) {
//         const newWithdraw = parseFloat(newWithdrawString);

//         const withdrawTotalElement = document.getElementById('withdraw');
//         const prvWithdrawTotalString = withdrawTotalElement.innerText;

//         // Check if the previous withdraw amount is a number
//         if (!isNaN(prvWithdrawTotalString)) {
//             const prvWithdraw = parseFloat(prvWithdrawTotalString);
//             const currantWithdrawTotal = prvWithdraw + newWithdraw;
//             withdrawTotalElement.innerText = currantWithdrawTotal;
//         } else {
//             // If the previous withdraw amount is not a number, set the current amount to the entered value
//             withdrawTotalElement.innerText = newWithdraw;
//         }

//         const balanceTotal = document.getElementById('total');
//         const prvBalanceTotalString = balanceTotal.innerText;

//         // Check if the previous balance amount is a number
//         if (!isNaN(prvBalanceTotalString)) {
//             const prvBalanceTotal = parseFloat(prvBalanceTotalString);
//             const CurrentBalanceTotal = prvBalanceTotal - newWithdraw;
//             balanceTotal.innerText = CurrentBalanceTotal;
//         } else {
//             // If the previous balance amount is not a number, set the current amount to zero
//             balanceTotal.innerText = 0;
//         }

//         withdrawField.value= '';
//     } else {
//         // If the entered value is not a number, display an error message
//         alert('Please enter a valid number');
//     }
// })


// Check if the entered value is a number
// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdraw-amount');
//     const newWithdrawString = withdrawField.value;

// if (!isNaN(newWithdrawString)) {
//     const newWithdraw = parseFloat(newWithdrawString);

//     const withdrawTotalElement = document.getElementById('withdraw');
//     const prvWithdrawTotalString = withdrawTotalElement.innerText;

//     // Check if the previous withdraw amount is a number
//     if (!isNaN(prvWithdrawTotalString)) {
//         const prvWithdraw = parseFloat(prvWithdrawTotalString);
//         const currantWithdrawTotal = prvWithdraw + newWithdraw;
//         withdrawTotalElement.innerText = currantWithdrawTotal;
//     } else {
//         // If the previous withdraw amount is not a number, set the current amount to the entered value
//         withdrawTotalElement.innerText = newWithdraw;
//     }

//     const balanceTotal = document.getElementById('total');
//     const prvBalanceTotalString = balanceTotal.innerText;

//     // Check if the previous balance amount is a number
//     if (!isNaN(prvBalanceTotalString)) {
//         const prvBalanceTotal = parseFloat(prvBalanceTotalString);
//         const CurrentBalanceTotal = prvBalanceTotal - newWithdraw;

//         // Check if the balance is negative
//         if (CurrentBalanceTotal < 0) {
//             alert("Balance can't be negative");
//         } else {
//             balanceTotal.innerText = CurrentBalanceTotal;
//         }
//     } else {
//         // If the previous balance amount is not a number, set the current amount to zero
//         balanceTotal.innerText = 0;
//     }

//     withdrawField.value= '';
// } else {
//     // If the entered value is not a number, display an error message
//     alert('Please enter a valid number');
// }

// })
