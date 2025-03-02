import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = ({income, expense}) => {

    // const checkIncome = income === 0 ? 1 : income;

    // If income is less than 0, set it to 1

    const checkIncome = income <= 0 ? 0 : income;

    const checkExpense = expense === 0 ? 1 : expense;
    
    const data = {
        labels: ['Total income', 'Total expense'],
        datasets: [
            {
                // label: 'Income vs Expeznse',
                data: [checkIncome, expense],
                backgroundColor: [
                    '#ff9161',
                    '#3F3F46',
                    // 'oklch(0.505 0.213 27.518)',
                ],
                borderColor: [
                    '#ff9161',
                    'rgba(0, 0, 0, 0.1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    return (
        <>
            <Doughnut data={data} />
        </>
    )
}

export default Chart