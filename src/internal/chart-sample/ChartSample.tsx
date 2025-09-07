import BarChart, {
    type BarChartDataset,
} from '../../external/components/charts/bar-chart/BarChart';
import LineChart, {
    type LineChartDataset,
} from '../../external/components/charts/line-chart/LineChart';
import CardList, { type CardField } from '../../external/components/lists/card-list/CardList';
import TableGrid, { type GridColumn } from '../../external/components/lists/grid/TableGrid';

export type Student = { name: string; kor: number; eng: number; math: number };

const ChartSample = () => {
    return (
        <>
            <div>
                <h2>학생 점수 카드 (테이블 형식)</h2>
                <TableGrid data={students} columns={tableGridColumns} />
            </div>
            <div>
                <h2>학생 점수 카드 선형 그래프</h2>
                <LineChart
                    data={students}
                    labels={(s) => s.name}
                    title="점수 변화 추이 (선형)"
                    datasets={lineChartDataSets}
                />
            </div>
            <div>
                <h2>학생 점수 카드</h2>
                <CardList data={students} titleKey={(s) => s.name} fields={cardFields} />
            </div>
            <div>
                <h2>점수 변화 추이 (재차트) 막대형 그래프</h2>
                <BarChart
                    data={students}
                    labels={(s) => s.name}
                    datasets={barChartDatasets}
                    title="과목별 점수 비교 (막대형)"
                />
            </div>
        </>
    );
};

const students = [
    { name: '홍길동', kor: 90, eng: 85, math: 95 },
    { name: '김철수', kor: 80, eng: 70, math: 80 },
    { name: '배진주', kor: 70, eng: 80, math: 97 },
    { name: '박상원', kor: 85, eng: 90, math: 88 },
    { name: '이영희', kor: 75, eng: 95, math: 91 },
];

const calcAvg = (s: Student) => {
    return Math.round((s.kor + s.eng + s.math) / 3);
};

// tableGrid
const tableGridColumns: GridColumn<Student>[] = [
    { key: 'name', header: '이름' },
    { key: 'kor', header: '국어' },
    { key: 'eng', header: '영어' },
    { key: 'math', header: '수학' },
    {
        header: '평균',
        render: (s) => calcAvg(s),
    },
];

// lineChart
const lineChartDataSets: LineChartDataset<Student>[] = [
    {
        label: '국어',
        data: (s: Student) => s.kor,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
    },
    {
        label: '영어',
        data: (s: Student) => s.eng,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
    },
    {
        label: '수학',
        data: (s: Student) => s.math,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
    },
];

// cardList
const cardFields: CardField<Student>[] = [
    { label: '국어', value: (s) => s.kor },
    { label: '영어', value: (s) => s.eng },
    { label: '수학', value: (s) => s.math },
    { label: '평균', value: (s) => <strong>{calcAvg(s)}</strong> },
];

// barChart
const barChartDatasets: BarChartDataset<Student>[] = [
    { label: '국어', data: (s) => s.kor, backgroundColor: 'rgba(54, 162, 235, 0.7)' },
    { label: '영어', data: (s) => s.eng, backgroundColor: 'rgba(255, 99, 132, 0.7)' },
    { label: '수학', data: (s) => s.math, backgroundColor: 'rgba(255, 206, 86, 0.7)' },
    { label: '평균', data: (s) => calcAvg(s), backgroundColor: 'rgba(153, 102, 255, 0.7)' },
];

export default ChartSample;
