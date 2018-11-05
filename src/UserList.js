import faker from 'faker';
const users = [];
let numUsers = 0;

function makeList() {
  while (numUsers < 50) {
    const user = {
      name: faker.name.findName(),
      image: faker.image.avatar(),
      quote: faker.lorem.sentence(),
    };
    user.id = `${numUsers}${user.name}`;
    users.push(user);
    numUsers++;
  }
}
makeList();

export default users;
