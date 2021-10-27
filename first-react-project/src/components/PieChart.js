import React from 'react';
import { Pie } from 'react-chartjs-2';


//const data = [];
const PieChart = () => {
    return(
        <div>
            <Pie
            data={{
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ],

                datasets: [{
                    label: '# of votes',
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.2)',
                        'rgba(255, 255, 0, 0.2)',
                        'rgba(0, 0, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 0, 255, 1)'
                    ],
                    borderWidth: 2,
                }],
            
                
                
            }}
            width={600}
            height={400}
            options={{maintainAspectRatio: false,}}
            />
        </div>
    )
}

export default PieChart;