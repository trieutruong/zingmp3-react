import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, className }) {
    
    const classes = cx('menu-item', {
        [className]: className,
        separate: data.separate,
        active: true
    });

    return (
        <Button
            className={classes}
            leftIcon={data.iconLeft}
            rightIcon={data.iconRight}
            onClick={onClick}
            secondary
            to={data.to}
        >
            {data.title}
            {/* {data.active && data.iconRight === <FontAwesomeIcon icon={faCheck} />} */}
        </Button>
    );
}

export default MenuItem;
