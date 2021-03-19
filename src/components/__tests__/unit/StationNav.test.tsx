import React from 'react';
import { axe } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import { StationNav } from '../../StationNav';

describe('The <StationNav/> component', () => {
  const setUpHeader = () => render(<StationNav />);

  it('renders correctly', () => {
    const { asFragment } = setUpHeader();

    expect(asFragment()).toMatchSnapshot();
  });

  it('has  two icon Buttons', () => {
    const { getAllByTestId } = setUpHeader();

    const iconButton = getAllByTestId('nav-btn');

    expect(iconButton).toHaveLength(2);
  });
  it('button should be clickable', () => {
    const { getByAltText } = setUpHeader();

    console.log = jest.fn();

    const iconButton = getByAltText('back-icon-btn');

    fireEvent.click(iconButton);

    expect(console.log).toHaveBeenCalled();
  });
  it('❌ has no accessibility validation', async () => {
    const { container } = setUpHeader();

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
