# Coffee Shop Simulation 🏪☕️

A simple JavaScript project that simulates a coffee shop's functionality, including managing inventory, checking available ingredients, and preparing and serving coffee orders. This project demonstrates how to use functions for different tasks, handle logic efficiently, and simulate real-life scenarios with code.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Functionality](#functionality)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Project Overview

This JavaScript project simulates a coffee shop environment, where various tasks (such as checking inventory, preparing coffee, and serving orders) are represented as functions. The goal is to demonstrate clean, modular function logic that can be reused and adapted for different scenarios.

## Features

- **Check Inventory**: Before preparing any coffee, the system ensures enough ingredients are available.
- **Prepare Coffee**: Based on the customer's order (coffee type and size), the coffee is prepared by deducting the ingredients from the inventory.
- **Serve Coffee**: The final result of the coffee-making process is served to the customer.
- **Handle Unknown Orders**: If the customer orders a type of coffee not available, the system responds with an error.
- **Reusability**: The same logic is used to handle multiple orders of different types and sizes.
- **Inventory Management**: Each time an order is processed, the inventory is updated.

## Functionality

The project simulates the following workflow:

1. **Customer Orders**: The customer places an order for a type of coffee (e.g., latte, espresso, cappuccino) and specifies the size (e.g., small, medium, large).
2. **Inventory Check**: Before preparing the order, the system checks if enough ingredients (coffee beans, milk, sugar) are available.
3. **Coffee Preparation**: If the ingredients are available, the system prepares the coffee and deducts the used ingredients from the inventory.
4. **Serve Coffee**: The prepared coffee is served to the customer.
5. **Error Handling**: If ingredients are insufficient or the coffee type is unknown, the system returns an error message.

### Example

For example, if the customer orders a **medium latte**, the following will happen:

- Inventory check for enough coffee beans, milk, and sugar.
- If available, the coffee is prepared, and the inventory is updated.
- The customer is served their coffee, and a confirmation message is displayed.

### Order Example:

```javascript
const customerOrder = { type: "latte", size: "medium" };
serveCoffee(customerOrder);
```
