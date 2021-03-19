import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import StationTile from '../../StationTile';

describe('The <StationTile/> component', () => {
  const defaultProps = { station: 'Power FM', frequency: '93,7', index: 4 };
  const setUpTile = (props = defaultProps) =>
    render(
      <Provider store={store}>
        <StationTile {...(props as any)}></StationTile>
      </Provider>
    );

  it('renders correctly', () => {
    const { asFragment } = setUpTile();
    expect(asFragment).toMatchSnapshot();
  });

  it('should display station name and frequency', () => {
    const { getByText } = setUpTile();

    expect(getByText('Power FM')).toBeInTheDocument();

    expect(getByText('93,7')).toBeInTheDocument();
  });

  it('❌ has no accessibility validation', async () => {
    const { container } = setUpTile();

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
