import React from 'react';
import { render } from 'react-testing-library';

import Dashboard from '../dashboard/Dashboard';

describe('sanity check', () => {
  it('should render the app', () => {
    render(Dashboard);
  });
});
