'use strict';

export const types = {
    START_LOADING: 'react-alpha/app/START_LOADING'
};

export const INITIAL_STATE = {
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.state) {
    case types.START_LOADING:
        return { ...state, loading: true };
    default:
        return state;
    }
};

export const actions = {
    startLoading: () => ({ type: types.START_LOADING })
};
