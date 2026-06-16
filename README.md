Objective:
Create a React application that displays products from an API and allows users to search products.
<br>
1. Product List Page

Fetch products from:

https://fakestoreapi.com/products
Display:
Product Image
Product Title
Price
Category
2. Search Functionality
Add a search input.
Filter products by title as the user types.
3. Product Details Modal
Clicking a product card should open a modal.
Show:
Full Title
Description
Price
Category
Product Image
4. Loading & Error States
Show a loading indicator while fetching data.
Handle API errors gracefully.
Folder Structure
src/
├── components/
│   ├── ProductCard.jsx
│   ├── ProductModal.jsx
│   └── SearchBar.jsx
├── pages/
│   └── Products.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx

