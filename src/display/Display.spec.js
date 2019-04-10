import React from 'react';
// import renderer from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
  it('renders Display component without error', () => {
    render(<Display />);
  });

  it('displays "Closed" if the closed prop is true and "Open" otherwise', () => {
    const closed = render(<Display closed={true} />);
    expect(closed.getByText(/closed/i)).toBeInTheDocument();
    const open = render(<Display />);
    expect(open.getByText(/open/i)).toBeInTheDocument();
  });
  it('displays "Locked" if the locked prop is true and "unlock" otherwise', () => {
    const closed = render(<Display locked={true} />);
    expect(closed.getByText(/locked/i)).toBeInTheDocument();
    const open = render(<Display />);
    expect(open.getByText(/unlock/i)).toBeInTheDocument();
  });
});
