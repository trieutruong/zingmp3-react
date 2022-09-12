import classNames from 'classnames/bind';
import styles from './Section.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Section({ children, title }) {
    return (
        <section className={cx('wrapper')}>
            <h1 className={cx('header')}>{title || 'PLaylist/Album'}</h1>
            <div className={cx('list') + ' row'}>{children}</div>
        </section>
    );
}

export default Section;
