import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import TippyNormal from '@tippyjs/react/';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import 'tippy.js/dist/tippy.css';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                console.log(menuItem);
                break;
            default:
        }
    };

    return (
        <header className={clsx(style.wrapper)}>
            <div className={clsx(style.inner)}>
                <div className={clsx(style.logo)}>
                    <img
                        src="https://raw.githubusercontent.com/sondnpt00343/tiktok-ui/53635fef3aad1ef411eb74238ee7560bf4fcc49d/src/assets/images/logo.svg"
                        alt="Tiktok Logo"
                    ></img>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={clsx(style.searchResult)} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={style.searchTitle}>Account</h4>

                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={clsx(style.actions)}>
                    {currentUser ? (
                        <>
                            <TippyNormal content="Upload Video" placement="bottom">
                                <button className={clsx(style.actionBtn)}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </TippyNormal>
                            <button className={clsx(style.actionBtn)}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={clsx(style.userAvatar)}
                                src="https://sohanews.sohacdn.com/160588918557773824/2021/4/1/1536305893556010024509220382267462611211035n-16172499837441767381699.jpg"
                                alt="Dao Le Phuong Hoa"
                            />
                        ) : (
                            <button className={clsx(style.moreBtn)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
