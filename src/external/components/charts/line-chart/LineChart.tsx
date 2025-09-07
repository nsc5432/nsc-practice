import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export type LineChartDataset<T> = {
    label: string;
    data: (row: T) => number;
    borderColor?: string;
    backgroundColor?: string;
};

interface LineChartProps<T> {
    data: T[];
    labels: (row: T) => string;
    datasets: LineChartDataset<T>[];
    title?: string;
}

const LineChart = <T,>({ data, labels, datasets, title }: LineChartProps<T>) => {
    const chartData = {
        labels: data.map(labels),
        datasets: datasets.map((ds) => ({
            label: ds.label,
            data: data.map(ds.data),
            borderColor: ds.borderColor ?? 'rgba(54, 162, 235, 1)',
            backgroundColor: ds.backgroundColor ?? 'rgba(54, 162, 235, 0.1)',
            fill: false,
            tension: 0.3,
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

    return <Line data={chartData} options={options} />;
};

export default LineChart;
