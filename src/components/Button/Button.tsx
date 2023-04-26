import classnames from 'classnames';
import './styles.less';
import { CLASSES } from './constants';

interface IButtonProps {
    clickHandler: () => void;
    className: string;
    text: string;
    isDisabled: boolean;
}

export const Button = ({ clickHandler, className, text, isDisabled }: IButtonProps) => {
    return (
        <button
            onClick={clickHandler}
            className={classnames(CLASSES.BUTTON, className)}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};
