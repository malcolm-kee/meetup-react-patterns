import './switch.css';
import React from 'react';

// grab from https://github.com/kentcdodds/advanced-react-patterns-v2/blob/master/src/switch.js

const noop = () => {};

export class Switch extends React.Component {
  render() {
    const {
      on,
      className = '',
      'aria-label': ariaLabel,
      onClick,
      ...props
    } = this.props;
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off'
    ]
      .filter(Boolean)
      .join(' ');
    return (
      <label aria-label={ariaLabel || 'Toggle'} style={{ display: 'block' }}>
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={noop}
          onClick={onClick}
          data-testid="toggle-input"
        />
        <span className={btnClassName} {...props} />
      </label>
    );
  }
}
