import React, { useEffect, useState } from 'react'

const ExpenseItem = ({ expense }) => {
 
  const symbol = expense.type === 'expense' ? '-$' : '+$';
  const textColor = expense.type === 'expense' ? 'text-red-700' : 'text-green-700';
  const borderColor = expense.type === 'expense' ? 'border-r-red-700' : 'border-r-green-700';

  // setsymbol(expense.type === 'expense' ? ('-$') : ('+$'));
  
  return (
    <>
      <div 
      className=
      {`flex justify-between items-center bg-white border-white ${borderColor} border-r-4 p-4 my-2 rounded-lg shadow-md w-full`}>
        <div>
          <h3 className='text-lg font-semibold'>{expense.description}</h3>
          <p className={`text-sm`}>{expense.date}</p>
        </div>
        <div>
          <p className={`text-lg ${textColor}`}>{symbol} {expense.amount}</p>
          <p className='text-sm text-gray-500'>{expense.paymentMethod}</p>
        </div> 
      </div>
    </>
  )
}

export default ExpenseItem