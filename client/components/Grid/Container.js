'use strict';
import styles from './styles.scss';

const Container = ({ className, style, fluid, children }) => {
    return (
        <div
            className={`${styles.container} ${fluid ? styles.fluid : ''} ${
                className ? className : ''
            }`}
            style={style ? style : null}>
            {children}
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    fluid: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default Container;
