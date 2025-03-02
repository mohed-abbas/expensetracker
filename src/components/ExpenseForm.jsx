import React, { useEffect, useState } from 'react'
import Input from './core/Input'

const ExpenseForm = ({
    addExpense,
    closeForm,
    expensetoEdit,
    updateExpense
}) => {

    const [formData, setformData] = useState({
        description: '',
        amount: 0,
        type: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
        notes: '',
        paymentMethod: ''
    })


    const buttonText = expensetoEdit ? 'Update Expense' : 'Add Expense'


    const handleSubmit = (e) => {
        e.preventDefault()
        const expense = {
            description: formData.description,
            amount: formData.amount,
            type: formData.type,
            date: new Date().toISOString().split('T')[0],
            category: formData.category,
            notes: formData.notes,
            paymentMethod: formData.paymentMethod
        }
        if (expensetoEdit) {
            updateExpense(expensetoEdit.id, expense)
        } else {
            addExpense(expense)
        }
        resetInputs()
    }


    const resetInputs = () => {
        setformData({
            description: '',
        })
    }


    useEffect(() => {
        if (expensetoEdit) {
            setformData({
                description: expensetoEdit.description || '',
                amount: expensetoEdit.amount,
                type: expensetoEdit.type,
                date: expensetoEdit.date,
                category: expensetoEdit.category,
                notes: expensetoEdit.notes,
                paymentMethod: expensetoEdit.paymentMethod
            });
        }

    }, [expensetoEdit, setformData])


    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center z-50' id='blurred' onClick={() => closeForm()}>
                <div onClick={e => e.stopPropagation()}>
                    <form id="expense__form" className='w-10/12 mx-auto p-6 bg-white shadow-md rounded-lg' onSubmit={handleSubmit}>
                        <h1 className='text-3xl mb-2'>Add Expense</h1>
                        <label htmlFor='Description'>Description</label>
                        <Input
                            type='text'
                            id='description'
                            name='description'
                            placeholder='e.g rent'
                            value={formData.description}
                            onChange={(e) => setformData({ ...formData, description: e.target.value })
                            }
                            className='w-full px-3 py-2 my-2 border border-gray-400 rounded focus:outline-none focus:border-b-2 sm:text-sm/6'
                        />
                        <Input
                            type='text'
                            id='description'
                            name='amount'
                            placeholder='e.g rent'
                            value={formData.amount}
                            onChange={(e) => setformData({ ...formData, amount: e.target.value })
                            }
                            className='w-full px-3 py-2 my-2 border border-gray-400 rounded focus:outline-none focus:border-b-2 sm:text-sm/6'
                        />
                        <select
                            type="select"
                            id='type'
                            name='type'
                            value={formData.type}
                            onChange={(e) => setformData({ ...formData, type: e.target.value })}
                            className='w-full px-3 py-2 my-2 border border-gray-400 rounded focus:outline-none focus:border-b-2 sm:text-sm/6'
                        >
                            <option value=''>Select Type</option>
                            <option value='expense'>Expense</option>
                            <option value='income'>Income</option>
                        </select>
                        <Input
                            type='text'
                            id='description'
                            name='category'
                            placeholder='e.g household...'
                            value={formData.category}
                            onChange={(e) => setformData({ ...formData, category: e.target.value })
                            }
                            className='w-full px-3 py-2 my-2 border border-gray-400 rounded focus:outline-none focus:border-b-2 sm:text-sm/6'
                        />
                        <Input
                            type='text'
                            id='description'
                            name='notes'
                            placeholder='e.g Rent for the month of October'
                            value={formData.notes}
                            onChange={(e) => setformData({ ...formData, notes: e.target.value })
                            }
                            className='w-full px-3 py-2 my-2 border border-gray-400 rounded focus:outline-none focus:border-b-2 sm:text-sm/6'
                        />
                        <Input
                            type='text'
                            id='description'
                            name='paymentMethod'
                            placeholder='e.g Credit Card'
                            value={formData.paymentMethod}
                            onChange={(e) => setformData({ ...formData, paymentMethod: e.target.value })
                            }
                            className='w-full px-3 py-2 my-2 border border-gray-400 rounded focus:outline-none focus:border-b-2 sm:text-sm/6'
                        />

                        <button
                            type='submit'
                            className='w-full button button-cta  font-bold py-2 px-4 rounded focus:outline-none focus:ring cursor-pointer'
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ExpenseForm