import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather("44418");
  }
  renderLocations() {
        console.log(this.props.weathers);
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
      </div>
    );
  }
};

function mapStateToProps({ weathers }) {
    return { weathers };
}

export default connect(mapStateToProps, actions)(Weather);
