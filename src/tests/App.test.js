import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

const store = createStore(rootReducer, (applyMiddleware(thunk)))

/**
 * Test with Snapshot
 */
describe('App index', () => {
    it('matches the snapshot with Redux', () => {
        var component = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });

});