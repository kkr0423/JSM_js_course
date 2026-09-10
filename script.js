// A local shop's inventory
const inventory = [
    { price: 5, name: 'eggs' },
    { price: 5, name: 'ham' },
    { price: 5, name: 'mayo' },
    { price: 5, name: 'bread' },
];

// A customer asks for a list of all the inventory they have
const requestFullInventory = inventory.map(item => item);

console.log(requestFullInventory); // requestFullInventory is filled with the inventory that we have