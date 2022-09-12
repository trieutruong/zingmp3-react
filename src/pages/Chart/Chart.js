import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '~/components/Loading';
import SongItem from '~/components/SongItem';
import * as chartServices from '~/services/chartServices';
import request from '~/utils/request';
import styles from './Chart.module.scss';
import ChartSongs from './ChartSongs/ChartSongs';

const cx = classNames.bind(styles);

function Chart() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFail, setIsFail] = useState(false);

    useEffect(() => {
        request.get('/chart/home').then((res) => {
            setResult(res.data.data);
            setLoading(false);
        });
        document.title = '#zingchart';
    }, []);

    if (loading) {
        return <Loading />;
    } else if (isFail) {
        return <h1>Bị lỗi</h1>;
    } else
        return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>#zingchart</h1>
                    <button className={cx('play-btn')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                </div>
                <ChartSongs data={result} />
            </div>
        );
}

export default Chart;
