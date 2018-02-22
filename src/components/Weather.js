import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather(this.props.match.params.value);
  }
  renderLocations() {
    return this.props.weathers.map(day => {
      return (
        <div key={day.id}>
          {day.applicable_date} {day.weather_state_name}<br /><br />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderLocations()}
        <br />
        <Link to={"/"}>Home</Link>
      </div>
    );
  }
};

function mapStateToProps({ weathers }) {
  return { weathers };
}

export default connect(mapStateToProps, actions)(Weather);
