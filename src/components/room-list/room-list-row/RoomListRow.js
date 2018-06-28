import React from 'react';
import PropTypes from 'prop-types';
import './RoomListRow.css';

const RoomListRow = ({ room }) => {
  return (
    <div className="paper-card room-list-row row">
      <div className="col-md-2">
        <img src="http://via.placeholder.com/500x500" alt={room.name} />
      </div>
      <div className="col-md-10 room-list-row-detail">
        <h3 className="room-list-row-name">{room.name}</h3>
        <p className="room-list-row-description">{room.description}</p>

        <button className="btn btn-primary float-right" type="button">
          Book now
        </button>
      </div>
    </div>
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
