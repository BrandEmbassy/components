import React, { Component } from 'react';
import styles from './Appc.css';
import Componenta from './Global/Componenta/Componenta';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appo}>
          <h1> components </h1>
          <Componenta />
     
        </div>
      </div>
    );
  }
}

export default App;
