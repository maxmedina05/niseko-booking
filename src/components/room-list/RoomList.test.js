import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RoomList from './RoomList';

Enzyme.configure({ adapter: new Adapter() });

describe('RoomList', () => {
  const ROOMS = [
    {
      id: 1091,
      name: 'Chalet Murasaki',
      description:
        'This 8 bedroom chalet (487 sqm) features a large master bedroom (55 sqm) with a hinoki en-suite bathroom and a daybed nook for quiet relaxation.'
    },
    {
      id: 1092,
      name: 'Chalet Murasaki a',
      description:
        'This 6 bedroom chalet features a large master bedroom (55 sqm) with a hinoki-lined en suite, large walk-in closet and daybed nook for quiet relaxation.'
    },
    {
      id: 1093,
      name: 'Chalet Murasaki b',
      description:
        'This 6 bedroom chalet features a large master bedroom (55 sqm) with a hinoki-lined en suite, large walk-in closet and daybed nook for quiet relaxation.'
    }
  ];

  it('should render N rows', () => {
    const roomList = shallow(<RoomList rooms={ROOMS} />);
    const rows = roomList.children();
    expect(rows.length).toBe(ROOMS.length);
  });
});
