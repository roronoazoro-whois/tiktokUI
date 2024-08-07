import Button from '../../Button';
import clsx from 'clsx';
function MenuItem({ data, onClick }) {
    return (
        <Button className={clsx('menuItem')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
