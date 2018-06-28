import React, { Component } from 'react';
import RoomListPage from './components/room-list/RoomListPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <RoomListPage />
      </div>
    );
  }
}

export default App;
