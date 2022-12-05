import React, { FC } from 'react';
import cl from './ColumnTitleText.module.scss';

interface IColumnTitleTextProps {
  title: string;
  callback: () => void;
}

const ColumnTitleText: FC<IColumnTitleTextProps> = ({ title, callback }) => {
  return (
    <h2 className={cl.container} onClick={callback}>
      {title}
    </h2>
  );
};

export default ColumnTitleText;
