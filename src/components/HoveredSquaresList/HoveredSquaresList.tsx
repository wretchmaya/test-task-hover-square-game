import { useAppSelector } from '../../store/hooks';
import { selectBoard } from '../../store/rootReducer';
import { ListItem } from './ListItem/ListItem';
import './styles.less';
import { CLASSES, TEXT } from './constants';

export const HoveredSquaresList = () => {
    const board = useAppSelector(selectBoard);

    return (
        <div className={CLASSES.HOVERED_LIST}>
            <h1 className={CLASSES.HOVERED_LIST__TITLE}>{TEXT.TITLE}</h1>
            <ul className={CLASSES.HOVERED_LIST__LIST}>
                {board.map((row, rowIndex) =>
                    row.map((el, columnIndex) => {
                        if (el) {
                            return (
                                <ListItem
                                    rowIndex={rowIndex}
                                    columnIndex={columnIndex}
                                    key={`${rowIndex}${columnIndex}`}
                                />
                            );
                        }
                        return null;
                    })
                )}
            </ul>
        </div>
    );
};
