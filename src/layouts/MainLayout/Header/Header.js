import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUpload,
    faGear,
    faShirt,
    faImage,
    faBan,
    faQuestion,
    faPlay,
    faAngleRight,
    faToggleOn,
    faInfoCircle,
    faInfo,
    faFlag,
    faPhone,
    faAd,
    faFile,
    faShield,
    faCheck,
    faGem,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem/AccountItem';
import Button from '~/components/Button';
import Image from '~/components/Image';

import SearchList from '~/layouts/components/SearchList/SearchList';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        iconLeft: <FontAwesomeIcon icon={faBan} />,
        title: 'Danh sách chặn',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Chất lượng nhạc',
        iconRight: <FontAwesomeIcon icon={faAngleRight} />,
        children: {
            title: 'Chất lượng nhạc',
            data: [
                {
                    type: 'quality',
                    code: 'SQ',
                    title: 'SQ - 128',
                    description: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn.',
                },
                {
                    type: 'quality',
                    code: 'HQ',
                    title: 'HQ - 320',
                    description: 'Kết hợp tốt nhất giữa việc sử dụng dữ liệu và âm thanh.',
                },
            ],
        },
    },
    {
        iconLeft: <FontAwesomeIcon icon={faPlay} />,
        title: 'Giao diện',
        iconRight: <FontAwesomeIcon icon={faAngleRight} />,
        children: {
            title: 'Giao diện',
            data: [
                {
                    title: 'Luôn phát nhạc toàn màn hình',
                    iconRight: <FontAwesomeIcon icon={faToggleOn} />,
                },
                {
                    title: 'Hiệu ứng',
                    iconRight: <FontAwesomeIcon icon={faToggleOn} />,
                },
            ],
        },
    },
    {
        iconLeft: <FontAwesomeIcon icon={faInfo} />,
        title: 'Giới thiệu',
        separate: true,
    },
    {
        iconLeft: <FontAwesomeIcon icon={faFlag} />,
        title: 'Góp ý',
        to: 'gop-y',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faPhone} />,
        title: 'Liên hệ',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faAd} />,
        title: 'Quảng cáo',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faFile} />,
        title: 'Thỏa thuận sử dụng',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faShield} />,
        title: 'Chính sách bảo mật',
    },
];

const USER_ITEMS = [
    {
        iconLeft: <FontAwesomeIcon icon={faGem} />,
        title: 'Nâng cấp VIP',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faGem} />,
        title: 'Mua code VIP',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Đăng xuất',
        separate: true,
    },
];

function Header() {

    const handleChangeMenu = (menuItem) => {
        switch (menuItem.type) {
            case 'quality':
                
                break;
            default:
        }
    };

    const currentUser = true;

    return (
        <div className={cx('wrapper')}>
            <SearchList />

            <div className={cx('actions')}>
                <Tippy content="Chủ đề">
                    <Button primary rounded>
                        <FontAwesomeIcon icon={faShirt} />
                    </Button>
                </Tippy>
                <Tippy content="Nâng cấp vip">
                    <Button primary rounded>
                        <FontAwesomeIcon icon={faUpload} />
                    </Button>
                </Tippy>

                <Tippy content="Tải lên">
                    <Button primary rounded>
                        <FontAwesomeIcon icon={faImage} />
                    </Button>
                </Tippy>

                <Menu items={MENU_ITEMS} onChange={handleChangeMenu}>
                    <Tippy content="Cài đặt">
                        <Button primary rounded>
                            <FontAwesomeIcon icon={faGear} />
                        </Button>
                    </Tippy>
                </Menu>

                {currentUser ? (
                    <Menu items={USER_ITEMS} hideOnClick>
                        <Button>
                            <Image
                                className={cx('user-avatar')}
                                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/9/8/4/d/984de8b3596498462d5f954eadbb1f47.jpg"
                                alt="Amee"
                                // fallback="..."
                            />
                        </Button>
                    </Menu>
                ) : (
                    <Button primary rounded>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Header;
