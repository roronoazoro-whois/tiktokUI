import clsx from 'clsx';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    return (
        <div className={clsx(style.wrapper)}>
            <img
                src="https://sohanews.sohacdn.com/160588918557773824/2021/4/1/1536305893556010024509220382267462611211035n-16172499837441767381699.jpg"
                alt="Hoa"
                className={clsx(style.avatar)}
            />
            <div className={clsx(style.info)}>
                <p className={clsx(style.name)}>
                    <span>Đào Lê Phương Hoa</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={clsx(style.check)} />
                </p>
                <span className={clsx(style.username)}>daolephuonghoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
