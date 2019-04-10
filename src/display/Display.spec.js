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
});
