import classNames from 'classnames/bind';
import Carousel from '~/layouts/components/Carousel';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import request from '~/utils/request';
import Section from '~/layouts/MainLayout/Section';
import Item from '~/components/Item';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function Home() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isfail, setIsFail] = useState(false);

    useEffect(() => {
        request.get('/home').then((res) => {
            setResult(res.data.data.items);
            setLoading(false);
        });
        document.title = 'Trang chủ';
    }, []);

    if (loading) {
        return <Loading />;
    } else if (isfail) {
        return <h1>Bị lỗi</h1>;
    } else
        return (
            <div className={cx('wrapper')}>
                {/* /* <Carousel data={result[0]} /> */}

                {result.map(
                    (sectionItem, index) =>
                        sectionItem.sectionType === 'playlist' && (
                            <Section key={index} title={sectionItem.title}>
                                {sectionItem.items.map((item, encodeId) => (
                                    <Item data={item} key={encodeId} />
                                ))}
                            </Section>
                        ),
                )}
            </div>
        );
}

export default Home;
