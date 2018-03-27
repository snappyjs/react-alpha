'use strict';

import Container from './Container';
import Row from './Row';
import Column from './Column';

describe('<Grid />', () => {
    describe('<Container />', () => {
        it('Should render successfully.', () => {
            itRenders(<Container />);
        });

        it('Should add className.', () => {
            const wrapper = itRenders(<Container className="cln" />);
            expect(wrapper.find('.cln').length).to.eql(1);
        });

        it('Should add style.', () => {
            const wrapper = itRenders(<Container style={{ color: 'red' }} />);
            expect(wrapper.props().style.color).to.eql('red');
        });

        it('Should render fluid.', () => {
            expect(itRenders(<Container fluid />));
        });
    });

    describe('<Row />', () => {
        it('Should render successfully.', () => {
            itRenders(<Row />);
        });

        it('Should render with className.', () => {
            expect(itRenders(<Row className="cln" />).find('.cln').length).to.eql(1);
        });

        it('Should render with style.', () => {
            expect(itRenders(<Row style={{ color: 'red' }} />).props().style.color).to.eql('red');
        });
    });

    describe('<Column />', () => {
        it('Should successfully render.', () => {
            itRenders(<Column />);
        });

        it('Should render with className', () => {
            expect(itRenders(<Column className="cln" />).find('.cln').length).to.eql(1);
        });

        it('Should render with style.', () => {
            expect(itRenders(<Column style={{ color: 'red' }} />).props().style.color).to.eql(
                'red'
            );
        });

        it('Should render with size.', () => {
            expect(itRenders(<Column size="sm-12" />));
        });
    });
});
