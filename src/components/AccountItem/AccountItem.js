import clsx from 'clsx';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(style.wrapper)}>
            <Image src={data.avatar} alt={data.avatar} className={clsx(style.avatar)} />
            <div className={clsx(style.info)}>
                <p className={clsx(style.name)}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={clsx(style.check)} />}
                </p>
                <span className={clsx(style.username)}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
