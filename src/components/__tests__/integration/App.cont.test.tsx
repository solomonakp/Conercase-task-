import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { setUpApp } from '../../util';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('The App', () => {
  it('should be toggle station control and station name', async () => {
    const { findByText, findByTestId, queryByTestId } = setUpApp();

    const text: any = await findByText(/putin fm/i);

    expect(
      await text.closest('button').previousElementSibling.style.maxHeight
    ).toBe('0px');

    fireEvent.click(await text.closest('button'));

    expect((await findByTestId('station-name')).textContent).toEqual(
      text.textContent
    );

    fireEvent.click(await text.closest('button'));

    await waitFor(() => {
      expect(queryByTestId('station-display')).toBeEmptyDOMElement();
    });
  });
});
