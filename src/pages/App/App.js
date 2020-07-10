import React, { Component } from 'react';
import './App.css';
import RecordCard from '../../components/RecordCard/RecordCard';
import RecordList from '../../components/RecordList/RecordList';

class App extends Component{
  /*--- State ---*/
  state= {
    records: []
  }
  /*--- Handle Methods ---*/

  /*--- Lifecycle Methods ---*/
  render(){
    return (
      <div className="App">
        <header className="App-header">
          MY APP
        </header>
        <RecordCard />
        <RecordList />
      </div>
    );
  }
}

export default App;
