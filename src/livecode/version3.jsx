import React from 'react';
import { Switch } from '../components/Switch';
import { Toggle } from './version2';

// around 7 mins

/**
 * HOC
 */
const withToggle = Component => {
  const Wrapper = props => (
    <Toggle
      defaultOn={props.defaultOn}
      onToggle={props.onToggle}
      render={({ on, toggle }) => (
        <Component {...props} on={on} toggle={toggle} />
      )}
    />
  );

  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`;

  return Wrapper;
};

const SimpleToggleView = ({ on, toggle }) => (
  <Switch on={on} onClick={toggle} />
);

const SimpleToggle = withToggle(SimpleToggleView);

const ComplexToggleView = ({ on, toggle }) => (
  <div>
    <Switch on={on} onClick={toggle} />
    <p>The state is {on ? 'on' : 'off'}</p>
    <button onClick={toggle}>{on ? 'on' : 'off'}</button>
  </div>
);

const ComplexToggle = withToggle(ComplexToggleView);

export const Usage = () => (
  <div>
    <h1>Simple Toggle </h1>
    <SimpleToggle defaultOn onToggle={on => console.info({ on })} />
    <h1>Complex Toggle</h1>
    <ComplexToggle defaultOn onToggle={on => console.info({ on })} />
  </div>
);
