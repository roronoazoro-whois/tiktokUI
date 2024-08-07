import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import style from './Search.module.scss';
import * as searchServices from '../../services/searchServices';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '../Icons';
import { useDebounce } from '../hooks';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={clsx(style.searchResult)} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={style.searchTitle}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={clsx(style.search)}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={clsx(style.clear)} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={clsx(style.loading)} icon={faSpinner} />}
                    <button className={clsx(style.searchBtn)} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
