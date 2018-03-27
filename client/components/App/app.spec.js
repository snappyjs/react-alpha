'use strict';

import App from './index.js';

describe('<App />', () => {
    it('Should successfully render.', () => {
        expect(shallow(<App />).length).to.eql(1);
    });
});
