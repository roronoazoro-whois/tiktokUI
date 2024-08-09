import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.scss';
import clsx from 'clsx';

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            className={(nav) =>
                clsx(style.menuItem, {
                    [style.active]: nav.isActive,
                })
            }
            to={to}
        >
            <span className={clsx(style.icon)}>{icon}</span>
            <span className={clsx(style.activeIcon)}>{activeIcon}</span>
            <span className={clsx(style.title)}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
