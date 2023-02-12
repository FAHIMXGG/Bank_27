//step 1 call button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('ggwp')
    // step 2 get info from the box
    // for input field value
    const depositField = document.getElementById('deposit-amount')
    const NewDepositAmountString = depositField.value;
    // convert
    const NewDepositAmount = parseFloat(NewDepositAmountString);
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
    depositField.value = '';
})

// withdraw

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    const withdrawTotalElement = document.getElementById('withdraw');
    const prvWithdrawTotalString = withdrawTotalElement.innerText;
    const prvWithdraw = parseFloat(prvWithdrawTotalString);

    const currantWithdrawTotal = prvWithdraw + newWithdraw;
    withdrawTotalElement.innerText = currantWithdrawTotal;

    const balanceTotal = document.getElementById('total');
    const prvBalanceTotalString = balanceTotal.innerText;
    const prvBalanceTotal = parseFloat(prvBalanceTotalString);

    const CurrentBalanceTotal = prvBalanceTotal - newWithdraw;
    balanceTotal.innerText = CurrentBalanceTotal;

    withdrawField.value= '';
})