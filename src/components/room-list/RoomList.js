import React from 'react';
import RoomListRow from './RoomListRow';

const RoomList = ({ rooms }) => {
  return (
    <ul>{rooms.map(room => <RoomListRow key={room.id} room={room} />)}</ul>
  );
};

export default RoomList;
