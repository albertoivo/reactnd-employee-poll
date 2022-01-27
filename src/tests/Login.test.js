import * as React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

const store = createStore(rootReducer, (applyMiddleware(thunk)))

describe('Login', () => {
    it('will display an error if no user is submitted', () => {
        var component = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        var select = component.getByTestId('user-select');
        fireEvent.change(select, { target: { value: '' } });

        var submitButton = component.getByTestId('submit-button');
        fireEvent.click(submitButton);

        expect(component.getByTestId('error-header')).toBeInTheDocument();

    });

    it('will display an error if all fields except the question are submitted', () => {
        var component = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        var submitButton = component.getByTestId('submit-button');
        fireEvent.click(submitButton);

        expect(component.getByTestId('error-header')).toBeInTheDocument();
    });

});