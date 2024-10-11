// Coffee Shop Scenario in JavaScript

// Inventory to track ingredients available in the shop
const inventory = {
  coffeeBeans: 100, // in grams
  milk: 50, // in ml
  sugar: 30, // in grams
};

// Function to check if the ingredients required for a specific order are available
function checkInventory(order) {
  const requiredIngredients = {
    espresso: { coffeeBeans: 10, milk: 0, sugar: 5 },
    latte: { coffeeBeans: 10, milk: 20, sugar: 5 },
    cappuccino: { coffeeBeans: 10, milk: 15, sugar: 5 },
  };

  const needed = requiredIngredients[order.type];

  if (needed) {
    // Check if enough ingredients are available
    if (
      inventory.coffeeBeans >= needed.coffeeBeans &&
      inventory.milk >= needed.milk &&
      inventory.sugar >= needed.sugar
    ) {
      console.log(`Ingredients available for ${order.type}`);
      return true; // Ingredients are available
    } else {
      console.log(`Sorry, not enough ingredients for ${order.type}`);
      return false; // Ingredients are insufficient
    }
  } else {
    console.log("Unknown coffee type");
    return false;
  }
}

// Function to prepare the coffee based on the customer's order
function prepareCoffee(order) {
  if (checkInventory(order)) {
    console.log(`Preparing your ${order.size} ${order.type}...`);

    // Simulate the process of making coffee (subtracting ingredients from inventory)
    const ingredientsUsed = {
      espresso: { coffeeBeans: 10, milk: 0, sugar: 5 },
      latte: { coffeeBeans: 10, milk: 20, sugar: 5 },
      cappuccino: { coffeeBeans: 10, milk: 15, sugar: 5 },
    };

    const used = ingredientsUsed[order.type];
    inventory.coffeeBeans -= used.coffeeBeans;
    inventory.milk -= used.milk;
    inventory.sugar -= used.sugar;

    return `${order.size} ${order.type} is ready! Enjoy your drink!`;
  } else {
    return `Unable to prepare ${order.type}, please choose another item.`;
  }
}

// Function to serve the coffee to the customer
function serveCoffee(order) {
  const preparedCoffee = prepareCoffee(order);
  console.log(preparedCoffee);
}

// Example customer orders
const customerOrder1 = { type: "latte", size: "medium" };
const customerOrder2 = { type: "espresso", size: "small" };
const customerOrder3 = { type: "cappuccino", size: "large" };
const customerOrder4 = { type: "americano", size: "small" }; // unknown type

// Processing orders
// serveCoffee(customerOrder1); // This should succeed
// serveCoffee(customerOrder2); // This should succeed
serveCoffee(customerOrder3); // This should succeed
// serveCoffee(customerOrder4); // This should fail due to unknown type
