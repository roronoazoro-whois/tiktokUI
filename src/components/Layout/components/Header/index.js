import React from 'react';
import clsx from 'clsx';
import style from './Header.module.scss';

function Header() {
    return <header className={clsx(style.wrapper)}>
        <div className={clsx(style.inner)}></div>
    </header>;
}

export default Header;
