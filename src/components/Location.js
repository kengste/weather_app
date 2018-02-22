import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Location extends Component {
  renderLocations() {
    return this.props.locations.map(location => {
      return (
        <div key={location.woeid}>
          <Link to={`/weather/${ location.woeid }`}>{location.title}</Link>
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

export default Location;
