import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import style from './SuggestedAccounts.module.scss';
import clsx from 'clsx';

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={clsx(style.accountItem)}>
                    <img
                        className={clsx(style.avatar)}
                        src="https://i.pinimg.com/564x/06/ee/50/06ee5067e65ce35f240b0d9688d7103f.jpg"
                        alt=""
                    />
                    <div className={clsx(style.itemInfo)}>
                        <p className={clsx(style.nickname)}>
                            <strong>roronoa.zoro_whois</strong>
                            <FontAwesomeIcon className={clsx(style.check)} icon={faCheckCircle} />
                        </p>
                        <p className={clsx(style.name)}>Bành Viết Hùng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
