import React from 'react';
import { axe } from 'jest-axe';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../../redux/store';
import StationBody from '../../StationBody';

describe('The <StationBody/> component', () => {
  const stations = [
    { station: 'Ray-power FM', frequency: '52,6' },
    { station: 'Rhythm FM', frequency: '93,2' },
    { station: 'Wazobia FM', frequency: '66,4' },
  ];
  const setUpBody = (props = stations) =>
    render(
      <Provider store={store}>
        <StationBody stations={props as any} />
      </Provider>
    );

  it('renders a list of stations tiles for each station passed to it', () => {
    const { getAllByTestId } = setUpBody();

    expect(getAllByTestId('station-tile')).toHaveLength(stations.length);
  });

  it('❌ has no accessibility validation', async () => {
    const { container } = setUpBody();

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
