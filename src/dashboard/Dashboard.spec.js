import React from 'react';
// import renderer from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('shows controls and display on render', () => {
    render(<Dashboard />);
  });
});
