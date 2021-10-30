import React from 'react';
import { Pie } from 'react-chartjs-2';


//const data = [];
const PieChart = () => {

    const  data={
        labels: [
            'Red',
            'Yellow',
            'Blue',
            'Purple',
            'Green'
        ],
        datasets: [{
            label: '# of votes',
            data: [10, 20, 30, 16, 23],
            backgroundColor: [
                'rgba(255, 0, 0, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(128, 0, 128, 0.2)',
                'rgba(0, 255, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(128, 0, 128, 1)',
                'rgba(0, 255, 0, 1)'
            ],
            borderWidth: 2,
        }],   
    }

    return(
        <div>
            <Pie
            data={data}
            />
        </div>
    )
}

export default PieChart;