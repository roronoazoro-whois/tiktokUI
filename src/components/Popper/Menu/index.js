import Tippy from '@tippyjs/react/headless';
import style from './Menu.module.scss';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={clsx(style.menuList)} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={clsx(style.menuPopper)}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
