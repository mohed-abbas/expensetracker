import React from 'react'

const ExpenseHeader = ({ toggleForm, income }) => {
    return (
        <>

            <div className='flex items-center p-4 justify-between'>
                <div>
                    <h2 className='text-2xl font-bold'>
                        YOUR BALANCE : <span>{income}</span>
                    </h2>
                </div>
                <button
                    className='button button-cta'
                    onClick={e => toggleForm()}
                >
                    Add expense
                </button>
            </div>
            {/* <hr className='my-4' /> */}
        </>
    )
}

export default ExpenseHeader