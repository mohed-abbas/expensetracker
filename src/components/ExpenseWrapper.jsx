import React, { useEffect, useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import { expensesTemp } from '../tempData';
import ExpenseHeader from './ExpenseHeader';
import { totalIncome, totalExpense } from '../utils';

const ExpenseWrapper = () => {
    const [showForm, setShowForm] = useState(false);
    const [expenses, setExpenses] = useState([...expensesTemp]);
    const [totalIncomeValue, setTotalIncomeValue] = useState(0);
    const [totalExpenseValue, setTotalExpenseValue] = useState(0);

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

    useEffect(() => {
        setTotalIncomeValue(totalIncome(expenses));
        setTotalExpenseValue(totalExpense(expenses));
    }, [expenses]);

    return (
        <main className="w-full mx-auto">
            <ExpenseHeader toggleForm={toggleForm} income={totalIncomeValue} />
            {showForm && (
                <ExpenseForm addExpense={addExpense} toggleForm={toggleForm} />
            )}
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </main>
    );
};

export default ExpenseWrapper;
