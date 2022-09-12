import classNames from 'classnames/bind';
import Footer from './Footer';
import Header from './Header';
import styles from './MainLayout.module.scss';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>
                    <Header />
                    <div className={cx('page')}>{children}</div>
                </div>
            </div>
            <Player />
        </div>
    );
}

export default MainLayout;
