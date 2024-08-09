import clsx from 'clsx';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import style from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(style.wrapper)}>
            <Header />
            <div className={clsx(style.container)}>
                <Sidebar />
                <div className={clsx(style.content)}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
