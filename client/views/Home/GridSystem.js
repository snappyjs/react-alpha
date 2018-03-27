'use strict';

import { Container, Row, Column } from 'components/Grid';
import styles from './styles.scss';

class GridSystem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => this.forceUpdate(), 5000);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Column size="sm-12">
                        <h1>Responsive Grid-System</h1>
                        <p className={styles.info}>
                            The built-in grid-system is a standard 12 columns. Three sizes are
                            avaialble (sm-*, md-*, lg-*) depending on the screen size. Margins and
                            Padding and even the number of columns is customizable via the
                            <i>'styles/variables.scss'</i> file.
                        </p>
                        <p className={styles.info}>
                            Usage Examples:
                            <pre>
                                {`<Container fluid>
    <Row>
        <Column size='sm-12 md-6 lg-3'></Column>
        <Column size='sm-12 md-6 lg-3'></Column>
    </Row>
</Container>`}
                            </pre>
                        </p>
                    </Column>
                </Row>
                {renderGrid()}
            </Container>
        );
    }
}

const renderGrid = () => {
    let rows = [];

    let colors = [
        'red',
        'green',
        'blue',
        'navy',
        'lime',
        'pink',
        'salmon',
        'crimson',
        'mediumvioletred',
        'darkred'
    ];

    for (let i = 1; i <= 12; i++) {
        if (12 % i === 0) {
            // no rest so we have an even amount of columns
            let cols = [];
            for (let j = 1; j <= i; j++) {
                cols.push(
                    <Column
                        size={`sm-${12 / i}`}
                        key={i * j}
                        style={{ backgroundColor: colors[Math.floor(Math.random() * 10)] }}
                        className={styles.spacedColumn}
                    >
                        <h2
                            style={{
                                textAlign: 'center',
                                color: '#fff',
                                padding: '0',
                                margin: '0'
                            }}
                        >{`sm-${12 / i}`}</h2>
                    </Column>
                );
            }
            rows.push(cols);
        }
    }
    return rows.map((row, i) => {
        return <Row key={i}>{row}</Row>;
    });
};

export default GridSystem;
