import React, { Component, Fragment } from 'react';
import RoomList from './RoomList';
import { getRooms } from '../../services/room.service';

const STOP_TYPING_WAIT_TIME = 300;
const ENTER_KEY = 13;

export default class RoomListPage extends Component {
  constructor() {
    super();

    this.fetchRooms = this.fetchRooms.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);

    this.timer = null;

    this.state = {
      rooms: [],
      showNothingFoundErrorMessage: false
    };
  }

  componentWillMount() {
    this.fetchRooms();
  }

  handleInputChange(event) {
    clearTimeout(this.timer);
    const { name, value } = event.target;

    this.timer = setTimeout(this.triggerSearch, STOP_TYPING_WAIT_TIME, value);
  }

  handleKeyDown(event) {
    const { value } = event.target;
    if (event.keyCode === ENTER_KEY) {
      this.triggerSearch(value);
    }
  }

  triggerSearch(query) {
    this.fetchRooms(query);
  }

  async fetchRooms(query = '') {
    const rooms = await getRooms(query);

    this.setState({
      rooms,
      showNothingFoundErrorMessage: rooms.length <= 0
    });
  }

  render() {
    const { rooms, showNothingFoundErrorMessage } = this.state;

    return (
      <Fragment>
        {showNothingFoundErrorMessage && <p>Oh no. Nothing was found!</p>}

        <input
          name="query"
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
        <RoomList rooms={rooms} />
      </Fragment>
    );
  }
}
