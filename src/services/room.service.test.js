import { getRooms } from './room.service';

describe('Room Service', () => {
  it('should fetch room information from an external source', async () => {
    const rooms = await getRooms();

    expect(rooms).toBeDefined();
    expect(rooms.length).toBe(5);
  });

  it('should filter by a query string from an external source', async () => {
    const rooms = await getRooms('Deep');

    expect(rooms).toBeDefined();
    expect(rooms.length).toBe(2);
  });
});
