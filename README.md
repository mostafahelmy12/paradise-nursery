# Paradise Nursery

Paradise Nursery is a shopping cart web application for an online houseplant shop, built with **React** and **Redux Toolkit**.

## Project name details

- **Project name:** Paradise Nursery - Shopping Cart Application
- **Type:** Single-page e-commerce application
- **Tech stack:** React, Redux Toolkit, React-Redux, Vite, CSS

## Features

- **Landing page** with a background image, the company name, a short description and a **Get Started** button.
- **About Us** section with details about the company.
- **Product listing page** with 18 unique houseplants grouped into 3 categories (Air Purifying, Aromatic and Succulents). Each plant shows a thumbnail, name, description and price.
- **Add to Cart** button on every plant. It adds the plant to the cart, disables itself after the plant is added and increases the cart icon count.
- **Navbar** shown on both the product listing page and the cart page, with links to **Home**, **Plants** and **Cart**.
- **Cart icon** that shows the total number of items in the cart dynamically.
- **Shopping cart page** that shows the total cart amount, the total cost for each plant, thumbnail, name and unit price, buttons to increase and decrease the quantity, a delete button for each item, a **Checkout** button (shows "Coming Soon") and a **Continue Shopping** button.

## Project structure

```
src/
  main.jsx        Entry point (Redux Provider)
  store.js        Redux store
  CartSlice.jsx   Redux slice: addItem, removeItem, updateQuantity
  App.jsx         Landing page
  App.css         Landing page styles (background image)
  AboutUs.jsx     About Us component
  ProductList.jsx Product listing page and navbar
  CartItem.jsx    Shopping cart page
```

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
```
