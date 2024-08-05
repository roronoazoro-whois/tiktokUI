import style from './Sidebar.module.scss';
import clsx from 'clsx';

function Sidebar() { 
    return <aside className={clsx(style.wrapper)}>
        <h2>Sidebar</h2>
    </aside>;
}

export default Sidebar;
