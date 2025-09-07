import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export type BarChartDataset<T> = {
    label: string;
    data: (item: T) => number;
    backgroundColor?: string;
};

interface BarChartProps<T> {
    data: T[];
    labels: (item: T) => string;
    datasets: BarChartDataset<T>[];
    title?: string;
}

const BarChart = <T,>({ data, labels, datasets, title }: BarChartProps<T>) => {
    const chartData = {
        labels: data.map(labels),
        datasets: datasets.map((ds) => ({
            label: ds.label,
            data: data.map(ds.data),
            backgroundColor: ds.backgroundColor ?? 'rgba(75,192,192,0.6)',
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: !!title,
                text: title,
            },
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 100,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarChart;
