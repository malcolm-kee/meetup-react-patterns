import React from 'react';

export class NumberInput extends React.Component {
  state = {
    invalid: false
  };

  render() {
    const { onChangeValue, label, ...props } = this.props;
    return (
      <div className={getClassName(this.state.invalid)}>
        <label htmlFor={props.id}>{label}</label>
        <input
          onChange={this.handleChange}
          className="form-control"
          type="text"
          {...props}
        />
        {this.state.invalid && (
          <span className="help-block">
            Value should not exceed {this.props.max}
          </span>
        )}
      </div>
    );
  }

  handleChange = e => {
    const { value } = e.target;
    this.props.onChangeValue(sanitizeValue(value));
    this.validateInput(value);
  };

  validateInput = value => {
    this.setState({
      invalid: Boolean(this.props.max) && value > this.props.max
    });
  };
}

const getClassName = invalid =>
  invalid ? 'form-control has-error' : 'form-control';

const sanitizeValue = value =>
  value === '' || isNaN(Number(value)) ? '' : Number(value);
