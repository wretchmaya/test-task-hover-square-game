import './styles.less';
import { CLASSES, TEXT } from './constants';

interface IListItemProps {
    rowIndex: number;
    columnIndex: number;
}

export const ListItem = ({ rowIndex, columnIndex }: IListItemProps) => {
    const itemText = `${TEXT.ROW} ${rowIndex + 1} ${TEXT.COLUMN} ${columnIndex + 1}`;
    return (
        <li key={`${rowIndex}${columnIndex}`} className={CLASSES.LIST_ITEM}>
            <span>{itemText}</span>
        </li>
    );
};
