import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../dashboard/Dashboard';

describe('Gate tests', () => {
  it('screenshots application', () => {
    const app = renderer.create(<Dashboard />).toJSON();
    expect(app).toMatchSnapshot();
  });
});

//ToDos:

//Gate:
// should default to unlocked and open
// cannot be closed or open if unlocked

//Dashboard:
// shows controls and display

//Display:
// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

//Controls Component:
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is closed
// the locked toggle button is disabled if the gate is open
