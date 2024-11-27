// coffee shop basic functionality for understanding function building

// inventor
const inventory = {
  coffeePacks: 10, // in packet
  sugar: 50, // in gram
  milk: 30, // in ml
};

// check inventory for availability of ingredients
const checkInventory = (order) => {
  const requiredIngredients = {
    cappuccino: { coffeePacks: 1, sugar: 10, milk: 15 },
    espresso: { coffeePacks: 2, sugar: 5, milk: 10 },
    latte: { coffeePacks: 3, sugar: 8, milk: 12 },
  };

  const needed = requiredIngredients[order.type];

  if (needed) {
    if (
      inventory.coffeePacks >= needed.coffeePacks &&
      inventory.sugar >= needed.sugar &&
      inventory.milk >= needed.milk
    ) {
      console.log(`Order ${order.id} is accepted!`);

      return true; // ingredients available
    } else {
      console.log(`Insufficient ingredients for order ${order.id}`);

      return false; // insufficient ingredients
    }
  } else {
    console.log("Please, choose listed coffee item from menu");

    return false; // unknown coffee type
  }
};

// prepared coffee -> function
const prepareCoffee = (order) => {
  if (checkInventory(order)) {
    console.log(`Preparing ${order.size} ${order.type} coffee`);

    const usedIngredients = {
      cappuccino: { coffeePacks: 1, sugar: 10, milk: 5 },
      espresso: { coffeePacks: 2, sugar: 5, milk: 10 },
      latte: { coffeePacks: 3, sugar: 10, milk: 5 },
    };

    const used = usedIngredients[order.type];

    // update inventory
    inventory.coffeePacks -= used.coffeePacks;
    inventory.sugar -= used.sugar;
    inventory.milk -= used.milk;

    return `$${order.size} ${order.type} is ready! Enjoy drinks!`;
  } else {
    return `Unable to prepare ${order.size} ${order.type}. please choose another one.`;
  }
};

// served coffee -> function
const serveCoffee = (order) => {
  const preparedCoffee = prepareCoffee(order);
  console.log(preparedCoffee);
};

const order1 = { id: 1, type: "cappuccino", size: "small" };
const order2 = { id: 2, type: "espresso", size: "medium" };
const order3 = { id: 3, type: "latte", size: "large" };

serveCoffee(order1);
serveCoffee(order2);
serveCoffee(order3);
// console.log(v);
