import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  it('renders Controls component without error', () => {
    render(<Controls />);
  });

  it('provide buttons to toggle the closed and locked states (open and unlocked state).', () => {
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

  it('provide buttons to toggle the closed and locked states (locked and closed state).', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls
        locked={true}
        closed={true}
        toggleLocked={mockFn}
        toggleClosed={mockFn}
      />
    );

    expect(getByText(/unlock gate/i)).toBeInTheDocument();
    expect(getByText(/open gate/i)).toBeInTheDocument();
  });

  it("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={true} toggleLocked={mockFn} />
    );

    const button = getByText(/unlock gate/i);
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });

  it('the "Open gate" button is disabled if the gate is locked', () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/open gate/i)).toBeDisabled();
  });

  it('the "lock gate" button is disabled if the gate is open', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    expect(getByText(/lock gate/i)).toBeDisabled();
  });
});
