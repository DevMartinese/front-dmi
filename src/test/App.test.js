import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ShowsState from '../context/showsState';
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