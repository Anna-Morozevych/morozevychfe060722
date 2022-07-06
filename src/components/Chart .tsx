import React from 'react';
import classNames from 'classnames';
import './Chart.scss';

type Props = {
  input: Data[],
  totalTime: number,
};

export const Chart: React.FC<Props> = ({ input, totalTime }) => {
  const calculateWidth = (value: number) => {
    // eslint-disable-next-line no-mixed-operators
    return `${value * 100 / totalTime}%`;
  };

  const calculateTransform = (index: number) => {
    let result = 0;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < index; i++) {
      result += input[i].time;
    }

    return calculateWidth(result);
  };

  return (
    <div className="Chart">
      {input.map((el, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classNames('Chart__item', `Chart__item--${index}`)}
        >
          <div
            className="Chart__time"
            style={{
              width: calculateWidth(el.time),
              left: calculateTransform(index),
            }}
          >
            <span>
              {el.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
