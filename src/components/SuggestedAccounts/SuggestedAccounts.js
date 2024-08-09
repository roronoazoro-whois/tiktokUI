import PropTypes from 'prop-types';
import style from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import clsx from 'clsx';

function SuggestedAccounts({ label }) {
    return (
        <div className={clsx(style.wrapper)}>
            <p className={clsx(style.label)}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={clsx(style.moreBtn)}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
