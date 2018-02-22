import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Location from './Location';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    this.props.fetchLocation(this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Location locations={this.props.locations}/>
      </div>
    );
  }
};

function mapStateToProps({ locations }) {
    return { locations };
}

export default connect(mapStateToProps, actions)(Landing);
