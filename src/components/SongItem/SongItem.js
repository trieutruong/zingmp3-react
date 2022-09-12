import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faPause, faPlay, faTruckFieldUn } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { memo, useEffect, useReducer, useRef, useState } from 'react';
import Button from '../Button';
import { constants } from '~/redux';
import reducer, { initState } from '~/redux/reducer';
import { actions } from '~/redux';
import logger from '~/redux';
import { playSong, setSrcAudio } from '~/redux/actions';

const cx = classNames.bind(styles);

function SongItem({ data, index, onClick }) {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const [active, setActive] = useState('');

    const { isPlaying } = state;

    const handleTopClass = (index) => {
        if (index === 0) {
            return 'top-1';
        } else if (index === 1) {
            return 'top-2';
        } else if (index === 2) {
            return 'top-3';
        } else {
            return;
        }
    };

    const handlePlaySong = () => {
        if (isPlaying) {
            dispatch(playSong(false));
            setActive('');
        } else {
            dispatch(playSong(true));
            setActive('playing');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-left')}>
                <span className={cx('serial', handleTopClass(index))}>{index + 1}</span>
                <span className={cx('grip-line-icon')}>
                    <FontAwesomeIcon icon={faGripLines} />
                </span>
                <div className={cx('items-wrapper')}>
                    <Button className={cx('img-link', active === 'playing' ? 'playing' : '')} onClick={handlePlaySong}>
                        <Image src={data.thumbnail} alt={data.title} className={cx('img')} />
                        <FontAwesomeIcon icon={faPause} className={cx('pause-icon')} />
                        <FontAwesomeIcon icon={faPlay} className={cx('play-icon')} />
                    </Button>
                    <div className={cx('info')}>
                        <p className={cx('name')}>{data.title}</p>
                        <Link to={data.artists[0].link}>
                            <span className={cx('artist')}>{data.artistsNames}</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('content-center')}>
                <Link to={data.link}>
                    <span className={cx('song-name')}>{data.title}</span>
                </Link>
            </div>
            <div className={cx('content-right')}>
                <span className={cx('time')}>
                    {Math.floor(data.duration / 60) < 10
                        ? '0' + Math.floor(data.duration / 60)
                        : Math.floor(data.duration / 60)}
                    {':'}
                    {Math.floor(data.duration % 60) < 10
                        ? '0' + Math.floor(data.duration % 60)
                        : Math.floor(data.duration % 60)}
                </span>
            </div>
        </div>
    );
}

export default memo(SongItem);
