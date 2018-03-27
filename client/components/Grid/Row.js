'use strict';

import styles from './styles.scss';

const Row = ({ children, className, style }) => {
    return (
        <div className={`${styles.row} ${className ? className : ''}`} style={style ? style : {}}>
            {children}
        </div>
    );
};

Row.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default Row;
