import styles from './CarouselItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CarouselItem({ data }) {
    return (
        <div className={cx('carousel-item')}>
            <img
                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/9/8/4/d/984de8b3596498462d5f954eadbb1f47.jpg"
                alt=""
                className={cx('carousel-img')}
            />
        </div>
    );
}

export default CarouselItem;
