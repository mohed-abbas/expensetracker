import React, { useEffect, useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import { expensesTemp } from '../tempData';
import ExpenseHeader from './ExpenseHeader';
import { totalIncome, totalExpense } from '../utils';
import Chart from './core/Chart';

const ExpenseWrapper = () => {
    const [showForm, setShowForm] = useState(false);
    const [expenses, setExpenses] = useState([...expensesTemp]);
    const [totalIncomeValue, setTotalIncomeValue] = useState(0);
    const [totalExpenseValue, setTotalExpenseValue] = useState(0);
    const [expensetoEdit, setexpensetoEdit] = useState(null);

    const addExpense = (newExpense) => {
        console.log(newExpense);
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        toggleForm();
    };

    const deleteExpense = (id) => {
        setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
    };

    const toggleForm = () => {
        setShowForm((prev) => !prev);
    };

    // function to handle update expense.
    const updateExpense = (id, updatedExpense) => {
        setExpenses((prevExpenses) =>
            prevExpenses.map((expense) => (expense.id === id ? updatedExpense : expense))
        );
        // Reset the expensetoEdit state back to null, if not the form will still be populated with the previous expense
        setexpensetoEdit(null);
        toggleForm();
    }

    // Function to get the expense to edit, on the expense item component.
    const editExpense = (id) => {
        const expense = expenses.find((expense) => expense.id === id);
        setexpensetoEdit(expense);
        toggleForm();
    }

    const closeForm = () => {
        setexpensetoEdit(null);
        setShowForm(false);
    }

    useEffect(() => {
        setTotalIncomeValue(totalIncome(expenses));
        setTotalExpenseValue(totalExpense(expenses));
    }, [expenses]);

    return (
        <main className="w-full mx-auto">
            <ExpenseHeader toggleForm={toggleForm} income={totalIncomeValue} />
            {showForm && (
                <ExpenseForm  expensetoEdit={expensetoEdit} updateExpense={updateExpense} addExpense={addExpense} closeForm={closeForm} />
            )}

            <h1 className='text-3xl'>Transaction list</h1>
                <div className='w-1/6 h-2/3 rounded-2xl drop-shadow-2xl  p-4 ml-4'>
                    <Chart income={totalIncomeValue} expense={totalExpenseValue} />
                </div>
            <div className='flex justify-start items-start'>
                <ExpenseList editExpense={editExpense} expenses={expenses} deleteExpense={deleteExpense} />
            </div>
        </main>
    );
};

export default ExpenseWrapper;
