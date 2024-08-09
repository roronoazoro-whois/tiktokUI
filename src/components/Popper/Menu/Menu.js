import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import style from './Menu.module.scss';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={clsx(style.menuList)} tabIndex="-1" {...attrs}>
            <PopperWrapper className={clsx(style.menuPopper)}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={clsx(style.menuBody)}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetMenu = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
