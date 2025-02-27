import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses , deleteExpense}) => {
    return (
        <>
            <h1 className='text-3xl'>Transaction list</h1>
            <ul className='w-2/12'>
                {expenses.map((expense) => {
                    return (
                        <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
                    )
                })}
            </ul>
        </>
    )
}

export default ExpenseList