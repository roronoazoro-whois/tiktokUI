import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button';
import style from './AccountPreview.module.scss';
import clsx from 'clsx';

function AccountPreview() {
    return (
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.header)}>
                <img
                    className={clsx(style.avatar)}
                    src="https://i.pinimg.com/564x/06/ee/50/06ee5067e65ce35f240b0d9688d7103f.jpg"
                    alt=""
                />
                <Button className={clsx(style.followBtn)} primary>
                    Follow
                </Button>
            </div>
            <div className={clsx(style.body)}>
                <p className={clsx(style.nickname)}>
                    <strong>roronoa.zoro_whois</strong>
                    <FontAwesomeIcon className={clsx(style.check)} icon={faCheckCircle} />
                </p>
                <p className={clsx(style.name)}>Bành VIết Hùng</p>
                <p className={clsx(style.analytics)}>
                    <strong className={clsx(style.value)}>8.2M </strong>
                    <span className={clsx(style.label)}>Followers</span>
                    <strong className={clsx(style.value)}>8.2M </strong>
                    <span className={clsx(style.label)}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
