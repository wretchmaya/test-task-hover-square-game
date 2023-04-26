import { Square } from '../Square/Square';
import { CLASSES } from './constants';
import './styles.less';

interface IRowProps {
    row: boolean[];
    rowIndex: number;
}

export const Row = ({ row, rowIndex }: IRowProps) => {
    return (
        <div className={CLASSES.ROW}>
            {row.map((columnValue, columnIndex) => (
                <Square
                    key={`${rowIndex}${columnIndex}`}
                    isActive={columnValue}
                    columnIndex={columnIndex}
                    rowIndex={rowIndex}
                />
            ))}
        </div>
    );
};
