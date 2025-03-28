# Gadget Heaven ✨

Your go-to destination for the latest and greatest gadgets! Gadget Heaven is a fully functional e-commerce platform designed to provide users with a seamless shopping experience for gadgets. The platform includes features like a shopping cart, wishlist system, product filtering, and more.

## 🌐 Live Website

[Visit Gadget Heaven](https://gadget-heaven-online-gadget-shop.netlify.app/)

---

## 📄 Project Description

This project was developed based on the following requirements:

- **Navbar**: Includes menu items like Logo, Brand Name, Dashboard, Stats, and Special Offers. Active routes are visually indicated.
- **Home Page**:
  - Attractive banner section with a button linking to the Dashboard.
  - Sidebar with gadget categories.
  - Gadget cards displaying product image, name, price, and a "Details" button.
  - Clicking a category filters gadgets by that category.
  - Footer with meaningful information.
- **Details Page**:
  - Displays all product details, including an image, name, price, description, specifications, availability, and rating.
  - Includes "Add to Cart" and "Add to Wishlist" buttons.
  - Wishlist button is disabled after clicking once to prevent duplicate additions.
- **Dashboard Page**:
  - Two tabs: Cart and Wishlist.
  - Displays cart items with total price and a "Sort by Price" button (descending order).
  - Wishlist items include an "Add to Cart" button.
- **Special Offers Page**:
  - Displays exciting cashback offers with hover effects and interactive cards.
- **Statistics Page**:
  - A Composed Chart showing Price vs. Product Name. The Y-axis shows prices, and the X-axis shows product names. Area and Bar data represent prices, while scatter data represents ratings.
- **404 Page**:
  - A user-friendly error page with a "Go Back to Home" button.

---

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Routing**: React Router
- **State Management**: LocalStorage
- **Charts**: Recharts
- **Icons**: React Icons
- **Deployment**: Netlify

---

## 📦 Data Management

- **LocalStorage**: Used for managing the cart and wishlist data. This ensures data persistence even after the page is reloaded.

---

## 🚀 Features

1. **Dynamic Navbar**:

   - Active routes are visually highlighted.
   - Navbar and Footer are displayed on all pages except the 404 page.

2. **Product Filtering**:

   - Sidebar categories allow users to filter gadgets by category.

3. **Cart and Wishlist**:

   - Items can be added to the cart or wishlist.
   - Wishlist button is disabled after adding an item to prevent duplicates.
   - Total price of cart items is displayed, and items can be sorted by price.

4. **Interactive Special Offers**:

   - Cashback offers are displayed with hover effects and animations.

5. **Statistics Page**:
   - A Composed Chart visualizes product prices and ratings.

---

## 📚 React Fundamentals Used

1. **Components**: Reusable components for Navbar, Footer, Cards, etc.
2. **Props**: Passed data between components for dynamic rendering.
3. **State Management**: Managed state using React's `useState` and `useEffect` hooks.
4. **Routing**: Implemented dynamic routing using React Router.
5. **Conditional Rendering**: Used conditional logic to display UI elements based on state.

---

## 📋 Additional Features

- **Dynamic Titles**: Each page has a unique title using `react-helmet-async`.
- **Toast Notifications**:
  - Displays a success message when adding items to the cart or wishlist.
  - Displays an error message if an action fails.
- **404 Page**: A visually appealing error page with navigation back to the home page.
- **Hover Effects**: Interactive hover effects on buttons and cards for better user experience.

---

## 📄 How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/taharukaiya/Gadget-Heaven.git
   ```
