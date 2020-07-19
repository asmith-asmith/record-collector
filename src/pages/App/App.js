import React, { Component } from 'react';
import './App.css';
import RecordListPage from '../RecordListPage/RecordListPage'
import AddRecordPage from '../AddRecordPage/AddRecordPage'
import { Route, Switch, NavLink } from 'react-router-dom';
import EditRecordPage from '../EditRecordPage/EditRecordPage'

class App extends Component {
  state = {
    records: [
      {
        _id: 1,
        name: 'Exile on Main Street',
        artist: 'The Rolling Stones'
      },
      {
        _id: 2,
        name: 'Kind of Blue',
        artist: 'Miles Daves'
      },
      {
        _id: 3,
        name: 'Houses of the Holy',
        artist: 'Led Zeppelin'
      }
    ]
  }
  /*--- Handle Methods ---*/

  handleAddRecord = newRecordData => {
    newRecordData._id = this.state.records.length + 1
    this.setState({
      records: [...this.state.records, newRecordData]
    }, () => {
      this.props.history.push('/')
      console.log(this.props.history)
    })
  }
  handleDeleteRecord = idOfRecord => {
    this.setState(state => ({
      records: state.records.filter(p => p._id !== idOfRecord)
    }), () => this.props.history.push('/'));
  }

  handleUpdateRecord = updatedRecord => {
    const updatedRecords = this.state.records.map(record => {
      if(record._id === updatedRecord._id){
        record = updatedRecord
      }
      return record
    })
    this.setState({
      records: updatedRecords
    }, ()=> this.props.history.push('/'))
  }

  /*--- Lifecycle Methods ---*/
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Record Collector
          <nav>
            <>
              &nbsp;&nbsp;&nbsp;
              <NavLink exact to='/'>RECORD LIST</NavLink>
              &nbsp;&nbsp;&nbsp;
              <NavLink exact to='/add'>ADD RECORD</NavLink>
            </>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' render={({ history }) =>
              <RecordListPage
                records={this.state.records}
                handleDeleteRecord={this.handleDeleteRecord}
                handleUpdateRecord={this.handleUpdateRecord}
              />             
            } />
            <Route exact path='/add' render={() =>
              <AddRecordPage handleAddRecord={this.handleAddRecord}/>
            } />
            <Route exact path='/edit' render={({history, location}) =>
              <EditRecordPage handleUpdateRecord={this.handleUpdateRecord} location={location}/>
            } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
