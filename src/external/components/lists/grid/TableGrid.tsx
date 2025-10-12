import React from 'react';
import './table-grid.css';

export type GridColumn<T> = {
    key?: keyof T;
    header: string;
    render?: (row: T) => React.ReactNode;
};

interface TableGridProps<T> {
    data: T[];
    columns: GridColumn<T>[];
    wrapperClass?: string;
}

const TableGrid = <T,>({ data, columns, wrapperClass = '' }: TableGridProps<T>) => {
    return (
        <table className={`nsc-table ${wrapperClass}`}>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th className="nsc-th" key={String(col.key)}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                        {columns.map((col) => (
                            <td className="nsc-td" key={String(col.key)}>
                                {col.render
                                    ? col.render(row)
                                    : col.key
                                    ? (row[col.key] as React.ReactNode)
                                    : null}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableGrid;
