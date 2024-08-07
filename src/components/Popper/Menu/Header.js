import style from './Menu.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Header({ title, onBack }) {
    return (
        <header className={clsx(style.header)}>
            <button className={clsx(style.backBtn)} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={clsx(style.headerTitle)}>{title}</h4>
        </header>
    );
}

export default Header;
