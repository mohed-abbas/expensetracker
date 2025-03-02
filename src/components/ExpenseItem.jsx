import React, { useEffect, useState } from 'react'

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {

  const symbol = expense.type === 'expense' ? '-$' : '+$';
  const textColor = expense.type === 'expense' ? 'text-red-700' : 'text-green-700';
  const borderColor = expense.type === 'expense' ? 'border-r-red-700' : 'border-r-green-700';

  const handleEditExpense = (e, expenseid) => {
    e.preventDefault();
    editExpense(expenseid)
  }

  return (
    <>
      <div className={`expense_item bg-white border-white border-r-4 ${borderColor} p-4 m-2 rounded-lg shadow-md w-2/12`} id='expense_item'>
        <div className={`flex justify-between items-center `}>
          <div>
            <h3 className='text-lg font-semibold' onClick={(e) => handleEditExpense(e, expense.id)}>
              <a href="#" className=' hover:underline' >
                {expense.description}
              </a>
            </h3>
            <p className='text-sm'>{expense.date}</p>
          </div>
          <div className='relative text-right'>
            <p className={`text-lg ${textColor}`}>{symbol} {expense.amount}</p>
            <p className='text-sm text-gray-500'>{expense.paymentMethod}</p>
          </div>
        </div>
        <div className="relative bottom-0 min-h-8" id='expense_footer'>
          {/* <p>Expense footer</p> */}
          <button
            onClick={() => deleteExpense(expense.id)}
            className="
            absolute bottom-0 right-0 mt-2 cursor-pointer
          "
          >
            <img src="/src/assets/images/icons/delete.svg" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ExpenseItem
