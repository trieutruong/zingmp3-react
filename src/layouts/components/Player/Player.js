import classNames from 'classnames/bind';
import styles from './Player.module.scss';
import Image from 'components/Image';
import Button from '~/components/Button';
import randomIcon, { PlayIcon } from '~/components/Icons';
import {
    faBackwardStep,
    faCompress,
    faForwardStep,
    faPause,
    faPauseCircle,
    faPlayCircle,
    faRandom,
    faRepeat,
    faVolumeHigh,
    faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useReducer, useRef, useState } from 'react';
import { initState } from '~/redux/reducer';
import reducer from '~/redux/reducer';
import { actions } from '~/redux';
import logger from '~/redux';
import { constants } from '~/redux';
import request from '~/utils/request';
import * as getSongServices from '~/services/getSongServices';
import { playSong } from '~/redux/actions';

const cx = classNames.bind(styles);

function Player() {
    const [state, dispatch] = useReducer(reducer, initState);
    const [result, setResult] = useState([]);
    const [active, setActive] = useState('');
    
    const audioRef = useRef();

    const { currentIndexSong } = state;
    const { isPlaying } = state;

    useEffect(() => {
        
    }, []);

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
            <div className={cx('info')}>
                <Image src="" className={cx('image')} />
                <div className={cx('name')}>
                    <h3 className={cx('title')}>Cứu vãn kịp không</h3>
                    <p className={cx('artist')}>Vương Anh Tú</p>
                </div>
            </div>
            <div className={cx('control')}>
                <div className={cx('handler')}>
                    <Button className={cx('btn')} secondary rounded>
                        <FontAwesomeIcon className={cx('icon')} icon={faRandom} />
                    </Button>
                    <Button className={cx('btn')} secondary rounded>
                        <FontAwesomeIcon className={cx('icon')} icon={faBackwardStep} />
                    </Button>
                    <Button
                        className={cx('btn', active === 'playing' ? 'playing' : '')}
                        secondary
                        rounded
                        onClick={handlePlaySong}
                    >
                        <FontAwesomeIcon icon={faPlayCircle} className={cx('play-icon')} />
                        <FontAwesomeIcon icon={faPauseCircle} className={cx('pause-icon')} />
                    </Button>
                    <Button className={cx('btn')} secondary rounded>
                        <FontAwesomeIcon className={cx('icon')} icon={faForwardStep} />
                    </Button>
                    <Button className={cx('btn')} secondary rounded>
                        <FontAwesomeIcon className={cx('icon')} icon={faRepeat} />
                    </Button>
                </div>
                <div className={cx('range')}>
                    <span className={cx('time')}>00:00</span>
                    <input className={cx('song-progress')} type="range" min="0" max="280" value="0" />
                    <span className={cx('time')}>04:40</span>
                </div>
            </div>
            <div className={cx('volume')}>
                <Button className={cx('option-btn')} secondary>
                    <FontAwesomeIcon icon={faVolumeMute} className={cx('icon-mute')} />
                    <FontAwesomeIcon icon={faVolumeHigh} className={cx('icon-high')} />
                </Button>
                <input className={cx('volume-progress')} type="range" min="0" max="280" value="0" />
                <Button secondary>
                    <FontAwesomeIcon icon={faCompress} className={cx('icon')} />
                </Button>
            </div>
            <audio src="" ref={audioRef} />
        </div>
    );
}

export default Player;
