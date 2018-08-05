import React from 'react';
import { Switch } from '../components/Switch';

/**
 * Implements a toggle (SimpleToggle) that that the following props:
 * - defaultOn - the toggle is on by default
 * - onToggle: (on) => void - the callback when the toggle state is changed
 * The toggle should just render a toggle button
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
      () => this.props.onToggle(this.state.on)
    );
  };

  static defaultProps = {
    defaultOn: false
  };
}

export const Usage = () => (
  <div>
    <SimpleToggle defaultOn onToggle={on => console.info({ on })} />
  </div>
);
