import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  it('renders Controls component without error', () => {
    render(<Controls />);
  });

  it('provide buttons to toggle the closed and locked states.', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls
        locked={false}
        closed={false}
        toggleLocked={mockFn}
        toggleClosed={mockFn}
      />
    );

    expect(getByText(/lock gate/i)).toBeInTheDocument();
    expect(getByText(/close gate/i)).toBeInTheDocument();
  });
});
