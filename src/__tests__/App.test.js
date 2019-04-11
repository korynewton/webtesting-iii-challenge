import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from '../dashboard/Dashboard';
import Display from '../display/Display';

afterEach(cleanup);

describe('Gate tests', () => {
  it.skip('screenshots application', () => {
    const app = renderer.create(<Dashboard />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('should default to unlocked and open', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
  });
  it('cannot be closed or open if locked', () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    getByText(/Locked/);
    getByText(/Closed/);
  });
});
