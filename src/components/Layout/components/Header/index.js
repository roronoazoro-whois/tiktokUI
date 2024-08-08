import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import TippyNormal from '@tippyjs/react/';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, UploadIcon } from '../../../Icons';
import Image from '../../../Image';
import Search from '../../../Search';

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
    const currentUser = true;

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
                {/* Search  */}
                <Search />
                <div className={clsx(style.actions)}>
                    {currentUser ? (
                        <>
                            <TippyNormal content="Upload Video" placement="bottom">
                                <button className={clsx(style.actionBtn)}>
                                    <UploadIcon />
                                </button>
                            </TippyNormal>
                            <button className={clsx(style.actionBtn)}>
                                <InboxIcon />
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
                            <Image
                                className={clsx(style.userAvatar)}
                                src="https://sohanews.sohacdn.com/0160588918557773824/2021/4/1/1536305893556010024509220382267462611211035n-16172499837441767381699.jpg"
                                alt="Dao Le Phuong Hoa"
                                fallback="https://ih1.redbubble.net/image.1046392292.3346/st,large,507x507-pad,600x600,f8f8f8.jpg"
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
