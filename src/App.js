import React, { Component } from 'react';
import Adminconsole from './Components/Adminconsole/Adminconsole';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/admin" component={Adminconsole} />
        <Route path="/showProduct" component={ProductDisplay} />

      </Switch>
    );
  }
}

export default App;
