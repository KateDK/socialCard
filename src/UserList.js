import faker from 'faker';
const users = [];

function makeList() {
  while (users.length <= 999) {
    const user = {
      name: faker.name.findName(),
      image: faker.image.avatar(),
      quote: faker.lorem.sentence(),
    };
    user.id = users.length;
    users.push(user);
  }
}
makeList();

export default users;
