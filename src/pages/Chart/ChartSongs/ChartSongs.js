import classNames from 'classnames/bind';
import styles from './ChartSongs.module.scss';
import PropTypes from 'prop-types';
import { memo, useRef, useState } from 'react';
import SongItem from '~/components/SongItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ChartSongs({ data }) {
    const [topSongs, setTopSongs] = useState(data.RTChart.items.slice(0, 10));
    const [viewMore, setViewMore] = useState('Xem Tất Cả');
    const [isFullList, setIsFullList] = useState(false);

    const audioRef = useRef();

    const handleViewMore = () => {
        if (isFullList) {
            setIsFullList(!isFullList);
            setTopSongs(data.RTChart.items);
            setViewMore('Thu gọn');
        } else {
            setIsFullList(!isFullList);
            setTopSongs(data.RTChart.items.slice(0, 10));
            setViewMore('Xem Tất Cả');
        }
    };

    return (
        <div className={cx('wrapper')}>
            {topSongs.map((topSong, index) => (
                <SongItem data={topSong} index={index} key={index} />
            ))}
            <audio src="" ref={audioRef} />
            <div className={cx('option-btn')}>
                <Button className={cx('view-more-btn')} rounded primary outline onClick={handleViewMore}>
                    <span className={cx('view-more')}>{viewMore}</span>
                </Button>
            </div>
        </div>
    );
}

ChartSongs.propTypes = {};

export default memo(ChartSongs);
