import React from 'react';
import { Switch } from '../components/Switch';

// Take around 9 minutes

/**
 * Implements another toggle (ComplexToggle) that has the same props as SimpleToggle but:
 * - it will display its state in text as `The state is ${on/off}`
 * - it also allowed to be toggled with a button at the bottom
 */
export class Toggle extends React.Component {
  state = {
    on: this.props.defaultOn
  };

  render() {
    return this.props.render({ on: this.state.on, toggle: this.toggle });
  }

  toggle = () => {
    this.setState(
      prevState => ({ on: !prevState.on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  static defaultProps = {
    defaultOn: false
  };
}

const SimpleToggle = props => (
  <Toggle
    {...props}
    render={({ on, toggle }) => <Switch on={on} onClick={toggle} />}
  />
);

const ComplexToggle = props => (
  <Toggle
    {...props}
    render={({ on, toggle }) => (
      <div>
        <Switch on={on} onClick={toggle} />
        <p>The state is {on ? 'on' : 'off'}</p>
        <button onClick={toggle}>{on ? 'on' : 'off'}</button>
      </div>
    )}
  />
);

export const Usage = () => (
  <div>
    <h1>Simple Toggle </h1>
    <SimpleToggle defaultOn onToggle={on => console.info({ on })} />
    <h1>Complex Toggle</h1>
    <ComplexToggle defaultOn onToggle={on => console.info({ on })} />
  </div>
);
