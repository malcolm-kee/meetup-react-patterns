import React from 'react';
import { Switch } from './components/Switch';

class ToggleNaive extends React.Component {
  state = {
    on: this.props.defaultOn
  };

  render() {
    return (
      <div>
        <Switch on={this.state.on} onClick={this.handleClick} />
        <hr />
        <p>The state is {this.state.on ? 'on' : 'off'}</p>
        <hr />
        <button onClick={this.handleClick}>
          {this.state.on ? 'on' : 'off'}
        </button>
      </div>
    );
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

export class ToggleRenderProps extends React.Component {
  state = {
    on: this.props.defaultOn
  };

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle
    });
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
    <h2>Toggle Naive</h2>
    <ToggleNaive defaultOn onToggle={on => console.info({ on })} />
    <hr />
    <h2>Render Props</h2>
    <ToggleRenderProps
      onToggle={on => console.info({ on })}
      render={({ on, toggle }) => (
        <div>
          <Switch on={on} onClick={toggle} />
          <hr />
          <p>The state is {on ? 'on' : 'off'}</p>
          <hr />
          <button onClick={toggle}>{on ? 'on' : 'off'}</button>
        </div>
      )}
    />
  </div>
);
