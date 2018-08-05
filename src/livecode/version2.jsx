import React from 'react';
import { Switch } from '../components/Switch';

/**
 * Implements another toggle (ComplexToggle) that has the same props as SimpleToggle but:
 * - it will display its state in text as `The state is ${on/off}`
 * - it also allowed to be toggled with a button at the bottom
 */
class SimpleToggle extends React.Component {
  state = {
    on: this.props.defaultOn
  };

  render() {
    return <Switch on={this.state.on} onClick={this.toggle} />;
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

export const Usage = () => (
  <div>
    <h1>Simple Toggle </h1>
    <SimpleToggle defaultOn onToggle={on => console.info({ on })} />
    <h1>Complex Toggle</h1>
    {/* <ComplexToggle defaultOn onToggle={on => console.info({ on })} /> */}
  </div>
);
