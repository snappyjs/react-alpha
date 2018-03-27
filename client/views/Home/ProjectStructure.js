'use strict';

import { Container, Row, Column } from 'components/Grid';

import styles from './styles.scss';

import projectStructureImg from './project_structure.png';

const ProjectStructure = () => {
    return (
        <Container>
            <Row>
                <Column size="sm-12">
                    <h1>The Project Structure</h1>
                    <p className={styles.info}>
                        The project structure is layed out to reduce the amount of jumping between
                        folders, this is done by including the <code>action creators</code>,{' '}
                        <code>constants</code> and the <code>reducer</code> in the same file for the
                        features. I've written a detailed blog post about the folder structure that
                        you can find at <a href="https://www.snappyjs.com">SnappyJS.com</a>
                        <br />
                        <br />
                        All folders are using Webpack Aliases to enable easier imports (and safer,
                        less room for mistakes). The aliases removes the need of keeping track of
                        your current folder. Below are a couple of examples of how the imports work
                        with aliases.
                        <br />
                        <br />
                        <code>
                            import {'{ Container, Row, Column }'} from '<b>components</b>/Grid'
                        </code>
                        <br />
                        <br />
                        If you want feature you can just do
                        <br />
                        <br />
                        <code>
                            import App from '<b>features</b>/App
                        </code>
                        <br />
                        <br />
                        or something from the vendor folder?
                        <br />
                        <br />
                        <code>
                            import axios from '<b>vendor</b>/axios'
                        </code>
                    </p>
                    <p className={styles.info} style={{ textAlign: 'center' }}>
                        <img src={projectStructureImg} />
                        <p>Image of the project structure used.</p>
                    </p>
                </Column>
            </Row>
        </Container>
    );
};

export default ProjectStructure;
