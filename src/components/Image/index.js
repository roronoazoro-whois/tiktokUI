import { useState, forwardRef } from 'react';
import style from './Image.module.scss';
import clsx from 'clsx';
import images from '../../assets/images';
import PropTypes from 'prop-types';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={clsx(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
