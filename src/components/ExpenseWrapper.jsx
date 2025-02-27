import React, { useEffect, useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import { expensesTemp } from '../tempData'
import ExpenseHeader from './ExpenseHeader'
import { totalIncome, totalExpense } from '../utils'

const ExpenseWrapper = () => {
    const [showform, setshowform] = useState(false)
    const [expenses, setexpenses] = useState([...expensesTemp])
    const [income, setincome] = useState(0)
    const [expense, setexpense] = useState(0)
    const addExpense = (expense) => {
        console.log(expense)
        setexpenses([...expenses, expense])
        toggleForm()
    }

    const toggleForm = () => {
        setshowform(!showform)
    }
useEffect(() => {
    setincome(totalIncome(expenses))
    setexpense(totalExpense(expenses))
}
, [expenses])

    return (
        <main className='w-full mx-auto'>
            <ExpenseHeader toggleForm={toggleForm} income={income} />
            {showform && <ExpenseForm addExpense={addExpense} toggleForm={toggleForm} />}
            <ExpenseList expenses={expenses} />
        </main>
    )
}

export default ExpenseWrapper