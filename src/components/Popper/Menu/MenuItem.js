import Button from '../../Button';
import clsx from 'clsx';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';

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

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
