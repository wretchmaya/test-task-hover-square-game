import { CLASSES } from './constants';
import './styles.less';

export const Preloader = () => {
    return (
        <div className={CLASSES.PRELOADER}>
            <div className={CLASSES.PRELOADER__SPINNER}></div>
        </div>
    );
};
