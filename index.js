const shoppingList = [
  'mouka',
  'máslo',
  'cukr',
  'jablka',
  'skořice',
  'mléko',
  'cibule',
];

shoppingList.forEach((item) => {
  if (item.length % 2 === 0) {
    console.log(item.toUpperCase());
  }
});

let shoppingListString = '';

shoppingList.forEach((item) => {
  shoppingListString += item;
});

console.log(shoppingListString);
