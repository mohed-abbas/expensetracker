const totalExpense = (expenses) => {
    return expenses
    .filter(expense => expense.type === 'expense')
    .reduce((acc, curr) => acc + parseInt(curr.amount), 0)
}

const totalIncome = (expenses) => {
    return (expenses
    .filter(expense => expense.type === 'income')
    .reduce((acc, curr) => acc + parseInt(curr.amount), 0)) - totalExpense(expenses)
}


export { totalExpense, totalIncome }
