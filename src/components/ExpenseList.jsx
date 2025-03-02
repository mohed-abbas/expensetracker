import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
    return (
        <>
            <ul className='w-full flex gap-2 flex-wrap'>
                {expenses.map((expense) => {
                    return (
                        <ExpenseItem key={expense.id} editExpense={editExpense} expense={expense} deleteExpense={deleteExpense} />
                    )
                })}
            </ul>
        </>
    )
}

export default ExpenseList