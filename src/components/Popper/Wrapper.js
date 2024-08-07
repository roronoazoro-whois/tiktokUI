import clsx from 'clsx';
import style from './Popper.module.scss';

function Wrapper({ children, className }) {
    return <div className={clsx(style.wrapper, className)}>{children}</div>;
}

export default Wrapper;
