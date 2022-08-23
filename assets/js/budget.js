document.getElementById('btn-calculate').addEventListener('click', function() {
    const getPerPlayerField = document.getElementById('get-per-player');
    const getPerPlayerString = getPerPlayerField.value;
    const getPerPlayer = parseFloat(getPerPlayerString);

    const calcPlayerExpenses = getPerPlayer * cart.length;

    const playerExpensesField = document.getElementById('set-player-expenses');
    playerExpensesField.innerText = calcPlayerExpenses;
});

document.getElementById('btn-calculate-total').addEventListener('click', function() {
    const currentPlayerExpense = document.getElementById('set-player-expenses').innerText;
    const currentPlayerExpenseNumber = parseFloat(currentPlayerExpense);

    const getManagerValueField = document.getElementById('get-manager-value');
    const getManagerValueString = getManagerValueField.value;
    const getManagerValue = parseFloat(getManagerValueString);

    const getCoachValueField = document.getElementById('get-coach-value');
    const getCoachValueString = getCoachValueField.value;
    const getCoachValue = parseFloat(getCoachValueString);

    const calcTotalExpenses = currentPlayerExpenseNumber + getManagerValue + getCoachValue;
    
    const totalExpensesField = document.getElementById('set-total-expenses');
    totalExpensesField.innerText = calcTotalExpenses;
});