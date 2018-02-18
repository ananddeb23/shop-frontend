import React from 'react';
import Menu from './Menu/Menu';
import Consolebody from './Consolebody/Consolebody';
import './Adminconsole.css';


class Adminconsole extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Consolebody />
      </div>
    );
  }
}

export default Adminconsole;
