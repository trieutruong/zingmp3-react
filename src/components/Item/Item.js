import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { Link } from 'react-router-dom';
import { PlayIcon, SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <div className={cx('item') + ' col l-2-4 m-4 c-6'}>
            <Link to={data.link} className={cx('link')}>
                <div className={cx('img-wrapper')}>
                    <div
                        className={cx('img-item')}
                        style={{
                            backgroundImage: `url(${data.thumbnail || data.thumbnailM})`,
                        }}
                    ></div>
                </div>
                <FontAwesomeIcon icon={faCirclePlay} className={cx('play-icon')} />
            </Link>
            <div className={cx('info')}>
                <Link to={data.link}>
                    <h4 className={cx('title')}>{data.title}</h4>
                </Link>
            </div>

            <p className={cx('description')}>{data.sortDescription}</p>
        </div>
    );
}

export default Item;
