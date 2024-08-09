import clsx from 'clsx';
import style from './Popper.module.scss';
import PropTypes from 'prop-types';

function Wrapper({ children, className }) {
    return <div className={clsx(style.wrapper, className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
