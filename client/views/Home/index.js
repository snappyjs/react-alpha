'use strict';

import { Container } from 'components/Grid';

import GridSystem from './GridSystem';
import ProjectStructure from './ProjectStructure';

const Home = () => {
    return (
        <Container fluid>
            <ProjectStructure />
            <GridSystem />
        </Container>
    );
};

export default Home;
