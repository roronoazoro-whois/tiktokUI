import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';

function Header() {
    return (
        <header className={clsx(style.wrapper)}>
            <div className={clsx(style.inner)}>
                <div className={clsx(style.logo)}>
                    <img
                        src="https://raw.githubusercontent.com/sondnpt00343/tiktok-ui/53635fef3aad1ef411eb74238ee7560bf4fcc49d/src/assets/images/logo.svg"
                        alt="Tiktok Logo"
                    ></img>
                </div>
                <div className={clsx(style.search)}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={clsx(style.clear)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={clsx(style.loading)} icon={faSpinner} />
                    <button className={clsx(style.searchBtn)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={clsx(style.actions)}></div>
            </div>
        </header>
    );
}

export default Header;
