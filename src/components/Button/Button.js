import clsx from 'clsx';
import React from 'react';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({
    to,
    href,
    outline = false,
    children,
    onClick,
    small = false,
    text = false,
    large = false,
    primary = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    ...more
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...more,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = clsx(style.wrapper, {
        [style.primary]: primary,
        [style.outline]: outline,
        [style.small]: small,
        [style.large]: large,
        [style.text]: text,
        [style.disabled]: disabled,
        [style.rounded]: rounded,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(style.icon)}>{leftIcon}</span>}
            <span className={clsx(style.title)}>{children}</span>
            {rightIcon && <span className={clsx(style.icon)}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
