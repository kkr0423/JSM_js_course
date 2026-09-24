const role = {
  title: "developer",
  type: "full-time",
  isOpen: true,
  showDetails() {
    const status = this.isOpen
      ? "is open for applications"
      : "is not open for applications";
    console.log(`The ${this.title} role is ${this.type} and ${status}.`);
  },
};

const designer = Object.create(role);
designer.title = "designer";
designer.showDetails(); // The designer role is full-time and is open for applications.

const team = {
  leader: "Alice",
  developer: "Bob",
  designer: "Charlie",
  tester: "Dana",
};

const keys = Object.keys(team);
console.log(keys); // ["leader", "developer", "designer", "tester"]

keys.forEach((key) => {
  console.log(`${key}: ${team[key]}`);
});

const device = {
  brand: "Samsung",
  model: "Galaxy S21",
  year: 2021,
};

const values = Object.values(device);
console.log(values); // ["Samsung", "Galaxy S21", 2021]

const software = {
  name: "Photoshop",
  version: "2021",
  license: "Commercial",
};

const entries = Object.entries(software);
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

const personalDetails = { firstName: "Jane", lastName: "Doe" };
const jobDetails = { position: "Manager", company: "Tech Inc" };

const profile = Object.assign({}, personalDetails, jobDetails);
console.log(profile); // {firstName: "Jane", lastName: "Doe", position: "Manager", company: "Tech Inc"}

const settings = { theme: "light", notifications: true };
Object.freeze(settings);

settings.theme = "dark"; // No effect
console.log(settings); // {theme: "light", notifications: true}

const account = { username: "user123", password: "pass123" };
Object.seal(account);

account.password = "newpass"; // Allowed
account.email = "user@example.com"; // Not allowed
console.log(account); // {username: "user123", password: "newpass"}

const gadgets = ["laptop", "tablet", "smartphone"];
console.log(Object.getPrototypeOf(gadgets) === Array.prototype); // true
