import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses}) => {
    return (
        <>
            <h1 className='text-3xl'>Transaction list</h1>
            <ul className='w-2/12'>
                {expenses.map((expense) => {
                    return (
                        <ExpenseItem key={expense.id} expense={expense} />
                    )
                })}
            </ul>
        </>
    )
}

export default ExpenseList