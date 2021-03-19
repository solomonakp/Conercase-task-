import React from 'react';
import { render } from '@testing-library/react';
import StationDisplay from '../../StationDisplay';

describe('The <StationDisplay/>  component', () => {
  const defaultProps = {
    isLoading: false,
    name: 'harry',
  };

  const setUpDisplay = (props = defaultProps) => {
    return render(<StationDisplay {...(props as any)} />);
  };

  it('❌ shows spinner when waiting for data', () => {
    const props = { ...defaultProps, isLoading: true };

    const { getByTestId } = setUpDisplay(props);

    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('❌ shows name of station when given', () => {
    const props = { ...defaultProps, isLoading: false };

    const { getByText } = setUpDisplay(props);

    expect(getByText('harry')).toBeInTheDocument();
  });

  it('❌ shows nothing when name of station is not given', () => {
    const props = { ...defaultProps, name: null };

    const { getByTestId } = setUpDisplay(props as any);

    expect(getByTestId('station-display')).toBeEmptyDOMElement();
  });
});
