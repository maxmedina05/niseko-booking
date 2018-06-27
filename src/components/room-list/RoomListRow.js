import React from 'react';
import PropTypes from 'prop-types';

const RoomListRow = ({ room }) => {
  return (
    <li>
      <h3 className="room-list-row-name">{room.name}</h3>
      <p className="room-list-row-description">{room.description}</p>
    </li>
  );
};

RoomListRow.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default RoomListRow;
