import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  it('renders Controls component without error', () => {
    render(<Controls />);
  });
});
