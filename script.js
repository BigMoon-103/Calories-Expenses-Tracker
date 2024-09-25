
function switchToCalories() {
    document.getElementById('caloriesTabContent').style.display = 'block';
    document.getElementById('expensesTabContent').style.display = 'none';
    document.getElementById('caloriesTab').classList.add('active');
    document.getElementById('expensesTab').classList.remove('active');
}

function switchToExpenses() {
    document.getElementById('caloriesTabContent').style.display = 'none';
    document.getElementById('expensesTabContent').style.display = 'block';
    document.getElementById('expensesTab').classList.add('active');
    document.getElementById('caloriesTab').classList.remove('active');
}

function calculateCalories(){
    const foodItem = document.getElementById('foodItem').value;
    const caloriesPerUnit = document.getElementById('caloriesPerUnit').value;
    const quantity = document.getElementById('quantity').value;

    if (!foodItem || !caloriesPerUnit || !quantity) {
        alert('Please fill in all the tabs \n arigatoes gosaimuch.');
        return;
    }

    const totalCalories = document.getElementById('totalCalories');
    const currentTotal = parseFloat(totalCalories.textContent);
    const newCalories = parseFloat(caloriesPerUnit) * parseFloat(quantity);
    totalCalories.textContent = currentTotal + newCalories;

    const itemsList = document.getElementById('itemslist');
    const newItem = document.createElement('li');
    newItem.textContent = `${foodItem}: ${newCalories} calories`;
    itemsList.appendChild(newItem);

    resetInputFields();
}

function resetInputFields() {
    document.getElementById('foodItem').value = '';
    document.getElementById('caloriesPerUnit').value = '';
    document.getElementById('quantity').value = '';
}

function resetCalories(){
    document.getElementById('totalCalories').textContent = '0';
    document.getElementById('itemslist').innerHTML = '';
}

function calculateExpenses() {
    const expenseItem = document.getElementById('ExpenseItem').value;
    const pricePerUnit = document.getElementById('pricePerUnit').value;
    const quantityExpense = document.getElementById('quantityExpense').value;

    if (!expenseItem || !pricePerUnit || !quantityExpense) {
        alert('Please fill in all the tabs \n arigatoes gosaimuch.');
        return;
    }

    const totalExpenses = document.getElementById('totalExpenses');
    const currentTotal = parseFloat(totalExpenses.textContent);
    const newExpense = parseFloat(pricePerUnit) * parseFloat(quantityExpense);
    totalExpenses.textContent = currentTotal + newExpense;

    const expensesList = document.getElementById('expenseslist');
    const newItem = document.createElement('li');
    newItem.textContent = `${expenseItem}: $${newExpense}`;
    expensesList.appendChild(newItem);

    resetExpenseFields();
}
function resetExpenseFields() {
    document.getElementById('ExpenseItem').value = '';
    document.getElementById('pricePerUnit').value = '';
    document.getElementById('quantityExpense').value = '';
}
function resetExpenses(){
    document.getElementById('totalExpenses').textContent = '0';
    document.getElementById('expenseslist').innerHTML = '';
}

document.getElementById('calculateCalories').addEventListener('click', calculateCalories);
document.getElementById('resetCalories').addEventListener('click', resetCalories);
document.getElementById('calculateExpenses').addEventListener('click', calculateExpenses);
document.getElementById('resetExpenses').addEventListener('click', resetExpenses);
