import React from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { handleColorSquare } from '../../../store/rootReducer';
import { CLASSES } from './constants';
import './styles.less';
import classnames from 'classnames';

interface ISquareProps {
    isActive: boolean;
    columnIndex: number;
    rowIndex: number;
}

export const Square = ({ isActive, columnIndex, rowIndex }: ISquareProps) => {
    const dispatch = useAppDispatch();

    const onMouseEnterHandler = () => {
        dispatch(handleColorSquare(rowIndex, columnIndex));
    };

    return (
        <div
            className={classnames(CLASSES.SQUARE, {
                [CLASSES.ACTIVE]: isActive,
            })}
            onMouseEnter={onMouseEnterHandler}
        ></div>
    );
};
