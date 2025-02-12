### Managing Your Store's Inventory with a Class-Based System

You own a store and need a system to manage your inventory efficiently. Your store starts with the following items and quantities:

- **Rice**: 10
- **Milk**: 12
- **Milo**: 4
- **Bread**: 9
- **Yam**: 3
- **Sugar**: 20
- **Biscuit**: 43

To achieve this, you'll create a class named after your store, initialized with these items and their respective quantities.

------

### Class Features

Your class should implement the following methods:

1. **`getItemCount(itemName: str) -> int`**
   - **Purpose**: Returns the current quantity of the specified item.
2. **`isAvailable(itemName: str) -> bool`**
   - **Purpose**: Checks if the specified item is available in stock.
   - Returns:
     - `True` if the item quantity is greater than 0.
     - `False` otherwise.
3. **`restockItem(itemName: str, quantity: int)`**
   - **Purpose**: Adds the specified quantity to the stock of the given item.
4. **`buyItem(itemName: str, quantity: int)`**
   - **Purpose**: Handles purchasing items.
   - Details:
     - If the requested quantity exceeds the available stock, return a message: *"Not enough stock available."*
     - Otherwise, reduce the stock by the specified quantity. Ensure that no item's quantity falls below 0.
5. **`removeItem(itemName: str)`**
   - **Purpose**: Completely removes the specified item from the store inventory.
6. **`addItem(itemName: str, quantity: int)`**
   - **Purpose**: Adds a new item to the inventory with the specified initial quantity.

------

### Bonus: Create a User Interface (UI)

Build a simple UI to display the store's inventory and enable users to interact with it. The UI should include:

1. **Table Display**: Show each item's name and current stock.
2. Interactive Buttons and Input Fields:
   - Buttons for each function (`getItemCount`, `isAvailable`, `restockItem`, `buyItem`, `removeItem`, `addItem`).
   - Input fields to enter item names and quantities as required by the functions.
3. **Feedback Display**: Show messages or results from actions (e.g., stock levels, error messages) in a clear and user-friendly way.

------

### Notes

- This system is beginner-friendly, so optimization of runtime performance is not required.
- The UI design doesn't need to be professional—focus on functionality and simplicity.

------