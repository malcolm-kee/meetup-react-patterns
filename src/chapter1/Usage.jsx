import React from 'react';
import { NumberInput } from './Component';

export class UsageChapter1 extends React.Component {
  state = {
    ageValue: ''
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <NumberInput
            label="Age"
            id="age-input"
            value={this.state.ageValue}
            onChangeValue={this.handleAgeValueChange}
            max={100}
          />
        </div>
      </div>
    );
  }

  handleAgeValueChange = ageValue => {
    this.setState({ ageValue });
  };
}
