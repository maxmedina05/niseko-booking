import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RoomListPage from './RoomListPage';

Enzyme.configure({ adapter: new Adapter() });

describe('RoomListPage', () => {
  const ROOMS = [
    {
      id: 1091,
      name: 'Chalet a',
      description:
        'This 8 bedroom chalet (487 sqm) features a large master bedroom (55 sqm) with a hinoki en-suite bathroom and a daybed nook for quiet relaxation.'
    },
    {
      id: 1092,
      name: 'Chalet b',
      description:
        'This 6 bedroom chalet features a large master bedroom (55 sqm) with a hinoki-lined en suite, large walk-in closet and daybed nook for quiet relaxation.'
    },
    {
      id: 1093,
      name: 'Chalet c',
      description:
        'This 6 bedroom chalet features a large master bedroom (55 sqm) with a hinoki-lined en suite, large walk-in closet and daybed nook for quiet relaxation.'
    }
  ];

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RoomListPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render a text input for search', () => {
    const page = shallow(<RoomListPage />);
    const searchInput = page.find('.room-list-search-input');

    expect(searchInput).toBeDefined();
  });
});
