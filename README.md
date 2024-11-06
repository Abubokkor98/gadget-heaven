# Gadget Heaven


## 🌐 Live Demo
- **Netlify**: [Dream11 BPL Hub Live](https://a8-gadgets-heaven.netlify.app/)
- **Surge**: [Dream11 BPL Hub Live](https://dream11-bpl.surge.sh)

## 📝 Project Description
Gadget Heaven is an engaging and interactive e-commerce platform designed to showcase the latest gadgets and accessories. The platform provides users with a seamless shopping experience, allowing them to browse, add products to their cart or wishlist, and track their purchase history. With a responsive design and intuitive interface, Gadget Heaven is optimized for various devices, ensuring a smooth user experience across desktops, tablets, and mobile phones.

## ✨ Key Features
- **Global State Management with Context API** – The Context API enables centralized management of cart, wishlist, and purchase history data, ensuring consistent access across all components without prop drilling.
- **Responsive and User-Friendly Design** – The layout is fully responsive, adjusting smoothly across devices, including mobile and tablet sizes. This responsiveness is applied to key components like the navbar, banner, and product cards, enhancing usability on different screens.
- **Interactive Cart and Wishlist Functionality** – Users can add or remove items from the cart and wishlist. The cart dynamically updates to reflect the total cost and item count, providing a seamless shopping experience.
- **Purchase History Tracking** – A dedicated history page displays a user's previous purchases, complete with item details, total cost, and item count. This feature allows users to easily track their past transactions.
- **Sorting and Total Price Calculation** – Users can sort items in the cart by price, and a dynamically updated total cost is displayed, making it easy to review the order’s cost at a glance. This is especially user-friendly as it helps users manage and review their cart contents before finalizing a purchase.
- **Visual and Informative Banner Section** – An engaging banner on the homepage introduces users to the platform and encourages them to explore further. The banner includes a call-to-action button, leading to the main product dashboard.
- **Real-time Toast Notifications** – The project uses toast notifications to provide instant feedback to users when they add items to the cart or wishlist, enhancing the user experience with real-time interactions.

## Handling and Managing data
- **Context API**


## React Fundamental Concepts Used
- **JSX (JavaScript XML)** – Used throughout the project to structure components and return HTML-like syntax in JavaScript.
- **Components** –Components like Navbar, Banner, Carts, Heading, Footer, etc., are utilized for modularizing the application and reusing code.
- **Props** – Props are used to pass data to components, as seen in Heading and Carts, where title, descriptions, and product data are passed as props.
- **State Management (useState)** – useState is used to manage the local state of products, cart items, wishlist items, and purchase history (products, cartArray, wishlistArray, and historyArray).
- **Context API (useContext)** – React Context (ProductContext) is used to create a global state, allowing components like Navbar, CartPage, and History to access shared state without prop-drilling.
- **Effects (useEffect)** – useEffect is used to perform side effects, such as fetching product data and updating document titles based on the current page
- **React Router (Link, NavLink, Outlet)** – Link and NavLink are used for navigation between pages, while Outlet is used to render nested routes. These enable multi-page navigation within the SPA (Single Page Application) structure.
- **Dynamic Class Binding** – Conditional class names are applied to style elements based on certain conditions, enhancing responsiveness and user experience across different screen sizes.


