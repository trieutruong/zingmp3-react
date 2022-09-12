import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button(
    {
        className,
        to,
        href,
        children,
        primary = false,
        rounded = false,
        secondary = false,
        outline = false,
        small = false,
        large = false,
        leftIcon,
        rightIcon,
        disabled,
        onClick,
        ...passProps
    },
    ref,
) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof (props[key] === 'function')) {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        rounded,
        secondary,
        small,
        large,
        outline
    });

    return (
        <Comp className={classes} {...props} ref={ref}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
        </Comp>
    );
}

// Button.propTypes = {
// to: PropTypes.string,
// href: PropTypes.string,
// primary: PropTypes.bool,
// secondary: PropTypes.bool,
// rounded: PropTypes.bool,
// disabled: PropTypes.bool,
// children: PropTypes.node.isRequired,
// className: PropTypes.string,
// leftIcon: PropTypes.node,
// rightIcon: PropTypes.node,
// onClick: PropTypes.func,
// };

export default forwardRef(Button);
