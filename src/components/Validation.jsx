import React, { Component } from 'react';

export default class Validation extends Component {
  render() {
    const { passlength, minlength,lowercase, uppercase, digit, special } = this.props
    return (
    <div className="validate-list">
      <div className="validate-title">Your password must at least contain: </div>
        {
          (passlength.length === 0) ?
            <div className="v-list" id="min-length">a minimum length of 5 characters</div> :
          (minlength) ?
            <div className="v-list" id="min-length" style={{ color:'green' }}>a minimum length of 5 characters</div> :
            <div className="v-list" id="min-length" style={{ color:'red' }}>a minimum length of 5 characters</div> 
        }
        {
          (passlength.length === 0) ?
            <div className="v-list" id="lowercase">a lowercase character [a-z]</div> : 
          (lowercase) ?
            <div className="v-list" id="lowercase" style={{ color:'green' }}>a lowercase character [a-z]</div> : 
            <div className="v-list" id="lowercase" style={{ color:'red' }}>a lowercase character [a-z]</div> 
        }
        {
          (passlength.length === 0) ?
            <div className="v-list" id="uppercase">an uppercase character [A-Z]</div> :
          (uppercase) ?
            <div className="v-list" id="uppercase" style={{ color:'green' }}>an uppercase character [A-Z]</div> :
            <div className="v-list" id="uppercase" style={{ color:'red' }} >an uppercase character [A-Z]</div>
        }
        {
        (passlength.length === 0) ?
          <div className="v-list" id="digit">a digit [0-9]</div> :
        (digit) ?
          <div className="v-list" id="digit" style={{ color:'green' }}>a digit [0-9]</div> :
          <div className="v-list" id="digit" style={{ color:'red' }}>a digit [0-9]</div> 
      }
      {
        (passlength.length === 0) ?
          <div className="v-list" id="special">a special character [!#%&*@ ...]</div> :
        (special) ?
          <div className="v-list" id="special" style={{ color:'green' }}>a special character [!#%&*@ ...]</div> :
          <div className="v-list" id="special" style={{ color:'red' }}>a special character [!#%&*@ ...]</div>
      }
    </div>  
    )
  }
};
