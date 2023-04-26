import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { handleCreateBoard, selectModes } from '../../store/rootReducer';
import './styles.less';
import { CLASSES, TEXT } from './constants';
import { Button } from '../Button/Button';

interface ModePickerProps {
    setIsGameStarted: (x: boolean) => void;
    isGameStarted: boolean;
}

export const ModePicker = ({ setIsGameStarted, isGameStarted }: ModePickerProps) => {
    const dispatch = useAppDispatch();
    const modes = useAppSelector(selectModes);
    const [activeMode, setActiveMode] = useState(0);
    const [isModeSelected, setIsModeSelected] = useState(false);

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const mode = +e.target.value;
        setActiveMode(mode);
        dispatch(handleCreateBoard(mode));
        setIsModeSelected(true);
    };

    const test = () => {
        isGameStarted ? dispatch(handleCreateBoard(activeMode)) : setIsGameStarted(true);
    };

    return (
        <div className={CLASSES.MODE_PICKER}>
            <select
                className={CLASSES.MODE_PICKER__SELECT}
                value={activeMode}
                onChange={selectHandler}
            >
                <option value={0} disabled className={CLASSES.MODE_PICKER__SELECT_OPTION}>
                    {TEXT.SELECT.PICK_MODE}
                </option>

                {modes.map(mode => (
                    <option
                        value={mode.field}
                        key={mode.field}
                        className={CLASSES.MODE_PICKER__SELECT_OPTION}
                    >
                        {mode.name}
                    </option>
                ))}
            </select>

            <Button
                clickHandler={test}
                isDisabled={!isModeSelected}
                className={CLASSES.MODE_PICKER__BUTTON}
                text={isGameStarted ? TEXT.BUTTON.RESET : TEXT.BUTTON.START}
            />
        </div>
    );
};
