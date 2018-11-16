import faker from 'faker';
const users = [];

const data = {
  users: [],
  user: {},
  links: [],
  tags: [],
  makeData: function() {
    while (this.users.length <= 999) {
      const user = {
        name: faker.name.findName(),
        image: faker.image.avatar(),
        quote: faker.lorem.sentence(),
      };
      if (this.users.length % 7 === 0) {
        user.quote = faker.lorem.sentences();
      }
      user.id = this.users.length;
      this.users.push(user);
    }
    this.user = {
      name: faker.name.findName(),
      image: faker.image.avatar(),
      theme:
        'https://images.freeimages.com/images/large-previews/48e/abstract-1171774.jpg',
    };
  },
};

// function makeList() {
//   while (users.length <= 999) {
//     const user = {
//       name: faker.name.findName(),
//       image: faker.image.avatar(),
//       quote: faker.lorem.sentence(),
//     };
//     if (users.length % 7 === 0) {
//       user.quote = faker.lorem.sentences();
//     }
//     user.id = users.length;
//     users.push(user);
//   }
// }
data.makeData();
export default data;
