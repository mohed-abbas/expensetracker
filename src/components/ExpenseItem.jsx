import React, { useEffect, useState } from 'react'

const ExpenseItem = ({ expense, deleteExpense }) => {

  const symbol = expense.type === 'expense' ? '-$' : '+$';
  const textColor = expense.type === 'expense' ? 'text-red-700' : 'text-green-700';
  const borderColor = expense.type === 'expense' ? 'border-r-red-700' : 'border-r-green-700';

  // setsymbol(expense.type === 'expense' ? ('-$') : ('+$'));

  return (
    <>
      <div className={`expense_item bg-white border-white border-r-4 ${borderColor} p-4 my-2 rounded-lg shadow-md w-full`} id='expense_item'>
        <div className={`flex justify-between items-center `}>
          <div>
            <h3 className='text-lg font-semibold'>{expense.description}</h3>
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

{/* <div className="relative bottom-0" id='expense_footer'>
          <button
            onClick={() => deleteExpense(expense.id)}
            className="
            absolute bottom-0 right-0 mt-2 
          "
          >
            <img src="/src/assets/images/icons/delete.svg" />
          </button>
        </div> 
        </div >
      <div className={`flex justify-between items-center bg-white border-white ${borderColor} border-r-4 p-4 my-2 rounded-lg shadow-md w-full`}>
        <div>
          <h3 className='text-lg font-semibold'>{expense.description}</h3>
          <p className={`text-sm`}>{expense.date}</p>
        </div>
        <div className='relative text-right'>
          <p className={`text-lg ${textColor}`}>{symbol} {expense.amount}</p>
          <p className='text-sm text-gray-500'>{expense.paymentMethod}</p>
        </div>
      </div>
        
        */}