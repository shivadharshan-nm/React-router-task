# Multi Store React Application

A modern ReactJS application that integrates the Fake Store API to showcase a responsive product listing and a fully functional cart. This project features smooth navigation between the Products Page and the Cart Page, a sleek design with React Icons, and robust state management using the React Context API.

- Features
* Products Page

Displays a grid of products fetched from the Fake Store API.
Shows product details, including an image, title, description, and price.
Includes an "Add to Cart" button that dynamically updates to show quantity controls (+ and −) when an item is added to the cart.
A centralized heading "Products" with an icon for improved UI.

* Cart Page

Lists all the items in the cart, with details like name, price, quantity, and total price per item.
Allows users to:
Increment (+) and decrement (−) item quantities.
Remove items from the cart.
Displays the total price of the cart with a 10% discount applied.

- Technologies Used

ReactJS: Component-based UI development.
React Router: For page navigation.
React Context API: Manages global state for the cart.
Tailwind CSS: Responsive and utility-first CSS framework.
React Icons: Provides icons for better UX.
Fake Store API: Supplies product data for the application