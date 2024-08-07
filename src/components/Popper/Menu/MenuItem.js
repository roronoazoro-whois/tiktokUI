import Button from '../../Button';
import clsx from 'clsx';
import style from './Menu.module.scss';

function MenuItem({ data, onClick }) {
    return (
        <Button
            className={clsx(style.menuItem, {
                [style.separate]: data.separate,
            })}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
