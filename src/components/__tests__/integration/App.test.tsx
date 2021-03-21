import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { setUpApp } from '../../util';

beforeEach(() => {
  jest.useFakeTimers();
});

describe('The App', () => {
  test('should show loader while getting stations', async () => {
    const { findByTestId } = setUpApp();

    expect(await findByTestId('loader')).toBeInTheDocument();

    expect(await findByTestId('station-box')).toBeInTheDocument();
  });

  test('should load stations', async () => {
    const { findByText } = setUpApp();

    expect(await findByText(/putin fm/i)).toBeInTheDocument();
  });

  it('change stations and display station name', async () => {
    const { findByText, findByTestId } = setUpApp();

    const station1 = await findByText(/putin fm/i);

    const station2 = await findByText(/Maximum FM/i);

    fireEvent.click(station1);

    expect(station1.closest('button')).toBeDisabled();

    expect(station1.closest('button')).toBeDisabled();

    expect((await findByTestId('station-name')).textContent).toEqual(
      station1.textContent
    );

    fireEvent.click(station2);

    expect((await findByTestId('station-name')).textContent).toEqual(
      station2.textContent
    );
    jest.clearAllTimers();
  });

  it('should be toggle station control and station name', async () => {
    const { findByText, findByTestId, queryByTestId } = setUpApp();

    const text: any = await findByText(/putin fm/i);

    expect(text.closest('button').previousElementSibling.style.maxHeight).toBe(
      '0px'
    );

    fireEvent.click(await text.closest('button'));

    expect((await findByTestId('station-name')).textContent).toEqual(
      text.textContent
    );

    fireEvent.click(await text.closest('button'));

    await waitFor(() => {
      expect(queryByTestId('station-display')).toBeNull();
    });
    jest.clearAllTimers();
  });
});
