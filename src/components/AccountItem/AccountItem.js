import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {

    return (
        <Link to={data.link}>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data.thumbnail}/>
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{data.title}</span>
                    </p>
                    <span className={cx('job')}>{data.artistsNames}</span>
                </div>
            </div>
        </Link>
    )
}

export default AccountItem;
