import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Location = () => <h2>Location</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/location" component={Location} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
