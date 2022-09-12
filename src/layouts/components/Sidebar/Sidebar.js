import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faCartShopping,
    faArrowDown,
    faCompactDisc,
    faChart,
    faRadio,
    faMusic,
    faIcons,
    faStar,
    faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to="">
                    <img src={images.logo} alt="Mp3" />
                </Link>
            </div>
            <Menu>
                <MenuItem title="Khám phá" to={config.routes.home} icon={<FontAwesomeIcon icon={faCompactDisc} />} />
                <MenuItem
                    title="Bảng xếp hạng"
                    to={config.routes.chart}
                    icon={<FontAwesomeIcon icon={faChartSimple} />}
                />
                <MenuItem title="Radio" to={config.routes.radio} icon={<FontAwesomeIcon icon={faRadio} />} />
                <MenuItem title="Nhạc mới" to={config.routes.newsmusic} icon={<FontAwesomeIcon icon={faMusic} />} />
                <MenuItem title="Thể loại" to={config.routes.category} icon={<FontAwesomeIcon icon={faIcons} />} />
                <MenuItem title="Top 100" to={config.routes.top100} icon={<FontAwesomeIcon icon={faStar} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
