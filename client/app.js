'use strict';

import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'features/store';

import 'styles/defaults.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);