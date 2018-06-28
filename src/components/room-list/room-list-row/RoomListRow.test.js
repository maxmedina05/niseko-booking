import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RoomListRow from './RoomListRow';

Enzyme.configure({ adapter: new Adapter() });

describe('RoomListRow', () => {
  const ROOM = {
    id: 1091,
    name: 'Chalet Murasaki',
    description:
      'This 8 bedroom chalet (487 sqm) features a large master bedroom (55 sqm) with a hinoki en-suite bathroom and a daybed nook for quiet relaxation.'
  };

  it("should display the room's name", () => {
    const roomListRow = shallow(<RoomListRow room={ROOM} />);
    const roomName = roomListRow.find('.room-list-row-name');
    expect(roomName.text()).toBe(ROOM.name);
  });

  it("should display the room's description", () => {
    const roomListRow = shallow(<RoomListRow room={ROOM} />);
    const description = roomListRow.find('.room-list-row-description');
    expect(description.text()).toBe(ROOM.description);
  });
});
