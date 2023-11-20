import axios from 'axios';
import {
    Chart as ChartJS,    CategoryScale,    LinearScale,
    PointElement,    LineElement,    Title,    Tooltip,
    Filler,    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Average Transactions Day',
        },
    },
    scales: {
        y: {
            min: 0,
        },
    },
};

const initialChartData = {
    labels: [],
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: [],
            borderColor: 'rgb(255, 121, 64)',
            backgroundColor: 'rgb(239, 163, 130, 0.5)',
        },
    ],
};

export const AreaChart = () => {
    const [chartData, setChartData] = useState(initialChartData);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/report/');
            const responseData = response?.data?.data;

            if (!responseData) {
                console.error('Invalid response data');
                return;
            }

            const dataPoints = responseData.map((data) => {
                const timestamp = data.date;
                const dateObject = new Date(timestamp);
                const label = dateObject.getDate();

                return {
                    label,
                    price: data?._avg_totalPrice,
                };
            });

            const last3DataPoints = dataPoints.slice(-7);

            const labels = last3DataPoints.map((dataPoint) => dataPoint.label);
            const prices = last3DataPoints.map((dataPoint) => dataPoint.price);

            const newData = {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Avarage Day',
                        data: prices,
                        borderColor: 'rgb(255, 121, 64)',
                        backgroundColor: 'rgb(239, 163, 130, 0.5)',
                    },
                ],
            };
            setChartData(newData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <Line options={options} data={chartData} width='500px' height='250px' />;
};
