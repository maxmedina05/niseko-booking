import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RoomListRow from '../room-list-row/RoomListRow';

const RoomList = ({ rooms }) => {
  if (!rooms || rooms.length <= 0) {
    return (
      <div className="alert alert-card alert-danger" role="alert">
        Oh no. Nothing was found with that description. Please try again.
      </div>
    );
  }

  return (
    <Fragment>
      {rooms.map(room => <RoomListRow key={room.id} room={room} />)}
    </Fragment>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomList;
