import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBan,
    faQuestion,
    faPlay,
    faArrowRight,
    faAngleRight,
    faInfo,
    faFlag,
    faPhone,
    faAd,
    faFile,
    faShield,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, width = '240px', items = [], useritems = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderMenuItemTop = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            const handleNextPage = () => {
                if (isParent) {
                    // console.log(item.children)
                    setHistory((prev) => [...prev, item.children]);
                } else {
                    onChange(item)
                }
            };

            return <MenuItem data={item} key={index} onClick={handleNextPage} />;
        });
    };

    const classes = cx('content', {
        width,
    });

    return (
        <div>
            <HeadlessTippy
                trigger="click"
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={classes} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('popper-wrapper')}>
                            {history.length > 1 && (
                                <Header
                                    title={current.title}
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            <div className={cx('menu-list')}>{renderMenuItemTop()}</div>{' '}
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

export default Menu;
