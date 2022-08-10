for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ['Sofiane', 'Abderrahim', 'Abdellah'];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: 'Sofiane',
  age: 37,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}
