import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem/';

const cx = classNames.bind(styles);

function Carousel({ data }) {
    // const sliderItems = data.items;

    const settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
    };

    return (
        <div className={cx('container')}>
            <Slider className={cx('carousel-list')}>
                {/* {sliderItems.map((sliderItem) => {
                    console.log(sliderItem)
   
                })} */}
                <CarouselItem />

            </Slider>
        </div>
    );
}

export default Carousel;
