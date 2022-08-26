import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ShowsContext from '../context/showsContext';

import App from '../App';
import AlertComponent from '../components/Alert';
import View from '../components/View';
import FormSearch from '../components/FormSearch';
import Show from '../components/Show';
import ShowInfo from '../components/ShowInfo';

describe('App', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('AlertComponent', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<AlertComponent />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('FormSearch', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<ShowsContext.Provider value={false}><FormSearch /></ShowsContext.Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Show', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<ShowsContext.Provider value={false}><Show /></ShowsContext.Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('ShowInfo', () => {
    it.skip('should render correctly', () => {
        const { asFragment } = render(<ShowsContext.Provider value={false}><ShowInfo /></ShowsContext.Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});