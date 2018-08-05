import React from 'react';
import { Switch } from './components/Switch';

class Toggle extends React.Component {
  state = {
    on: this.props.defaultOn
  };

  render() {
    return <Switch on={this.state.on} onClick={this.handleClick} />;
  }

  handleClick = () => {
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
    <Toggle defaultOn onToggle={on => console.info({ on })} />
  </div>
);
