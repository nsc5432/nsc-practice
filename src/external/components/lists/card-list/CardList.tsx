import React from 'react';
import './card-list.css';

export interface CardField<T> {
    label: string; // 화면에 보여줄 제목
    value: (item: T) => React.ReactNode; // 값 추출 함수
}

interface CardListProps<T> {
    data: T[];
    titleKey: (item: T) => string; // 카드 제목을 뽑아낼 함수
    fields: CardField<T>[]; // 카드에 표시할 필드들
    wrapperClass?: string;
}

const CardList = <T,>({ data, titleKey, fields, wrapperClass = '' }: CardListProps<T>) => {
    return (
        <div className={`${wrapperClass}`}>
            {data.map((item, idx) => (
                <div key={idx} className="nsc-card">
                    <h3>{titleKey(item)}</h3>
                    {fields.map((f, i) => (
                        <p key={i}>
                            {f.label}: {f.value(item)}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CardList;
