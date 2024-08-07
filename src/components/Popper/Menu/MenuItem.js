import Button from '../../Button';
import clsx from 'clsx';
function MenuItem({ data }) {
    return (
        <Button className={clsx('menuItem')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
