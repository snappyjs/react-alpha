'use strict';

import styles from './styles.scss';

const Column = ({ className, style, children, size }) => {
    return (
        <div
            className={`${styles.gridColumn} ${className ? className : ''} ${
                size ? sizesToClasses(size) : ''
            }`}
            style={style ? style : {}}>
            {children}
        </div>
    );
};

/**
 * Adds the class-names for the columns
 */
const sizesToClasses = sizes => {
    return sizes
        .trim()
        .split(/\s+/)
        .map(size => styles[size])
        .join(' ');
};

Column.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    size: PropTypes.string
};

export default Column;
