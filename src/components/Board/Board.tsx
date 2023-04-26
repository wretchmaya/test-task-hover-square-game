import { useAppSelector } from '../../store/hooks';
import { selectBoard } from '../../store/rootReducer';
import { CLASSES } from './constants';
import './styles.less';
import { Row } from './Row/Row';

export const Board = () => {
    const board = useAppSelector(selectBoard);

    return (
        <div className={CLASSES.BOARD}>
            {board.map((row, rowIndex) => {
                return <Row row={row} rowIndex={rowIndex} key={rowIndex} />;
            })}
        </div>
    );
};
