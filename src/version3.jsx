import React from 'react';
import { Switch } from './components/Switch';
import { ToggleRenderProps } from './version2';

const withToggle = (onToggle, defaultOn) => Component => props => (
  <ToggleRenderProps
    onToggle={onToggle}
    defaultOn={defaultOn}
    render={({ on, toggle }) => (
      <Component on={on} toggle={toggle} {...props} />
    )}
  />
);

const MyComponent = ({ on, toggle }) => (
  <div>
    <Switch on={on} onClick={toggle} />
    <hr />
    <p>The state is {on ? 'on' : 'off'}</p>
    <hr />
    <button onClick={toggle}>{on ? 'on' : 'off'}</button>
  </div>
);

const MyComponentWithToggle = withToggle(on => {
  console.info(on);
}, true)(MyComponent);

export const Usage = () => (
  <div>
    <h2>HOC</h2>
    <MyComponentWithToggle />
  </div>
);
