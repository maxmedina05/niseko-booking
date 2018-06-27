import ROOMS from './rooms.json';
const TIMEOUT = 300;

function isStringEmptyOrNull(string) {
  return string === null || string === '';
}

export function getRooms(query = '') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isStringEmptyOrNull(query)) {
        const re = new RegExp(query, 'i');
        const rooms = ROOMS.filter(
          x => re.test(x.name) || re.test(x.description)
        );
        resolve(rooms);
      } else {
        resolve(ROOMS);
      }
    }, TIMEOUT);
  });
}
