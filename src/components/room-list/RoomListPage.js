import React, { Component, Fragment } from 'react';
import './RoomListPage.css';

import RoomList from './room-list/RoomList';
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
      rooms: []
    };
  }

  componentWillMount() {
    this.fetchRooms();
  }

  handleInputChange(event) {
    clearTimeout(this.timer);
    const { value } = event.target;

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
      rooms
    });
  }

  render() {
    const { rooms } = this.state;

    return (
      <Fragment>
        <div className="paper-card search-card">
          <div className="input-group">
            <input
              className="room-list-search-input form-control"
              name="query"
              placeholder="Where would you like to stay?"
              onChange={this.handleInputChange}
              onKeyDown={this.handleKeyDown}
            />
            <div className="input-group-append">
              <span class="input-group-text">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </div>

        <RoomList rooms={rooms} />
      </Fragment>
    );
  }
}
