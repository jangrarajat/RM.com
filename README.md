# Raahi E-Commerce Frontend

A modern, responsive, and feature-rich E-Commerce web application frontend built with **React** and **Vite**. This project provides a seamless shopping experience with user authentication, product searching, cart management, and a dedicated user dashboard.

## 🚀 About The Project

**Raahi E-Commerce** allows users to browse products across various categories (Men, Women, Kids), manage their shopping cart, and track their orders. It features a clean UI styled with Tailwind CSS and includes a robust search system with recent history and real-time suggestions.

## ✨ Key Features

* **🛒 Comprehensive Shopping Experience:**
    * **Home Page:** Attractive hero section and category highlights for Men, Women, and Kids.
    * **Product Browsing:** Filter products by categories (All, Women, Men, Kids, Accessories).
    * **Product Details:** Dedicated pages for single product views.
    * **Cart & Wishlist:** Functionality to add items to the cart or save them to a wishlist (Like Page).
    * **Checkout:** Streamlined checkout process.

* **🔍 Advanced Search:**
    * Real-time search suggestions.
    * Recent search history tracking (stored locally).
    * Mobile-optimized search drawer.

* **👤 User Account Management:**
    * **Authentication:** Secure Login, Registration, and Password Recovery (Forgot/Change Password).
    * **Dashboard:** User overview, Order History, and Account Settings.
    * **Profile:** Manage personal details and addresses.

* **📱 Responsive Design:** Fully responsive layout with a mobile-friendly sidebar menu and navigation.
* **🛡️ Admin/Owner Access:** Special dashboard access for users with 'admin' or 'owner' roles.

## 🛠️ Tech Stack

This project is built using the following technologies:

* **Core:** [React.js](https://react.dev/) (v19), [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/), PostCSS
* **Routing:** [React Router DOM](https://reactrouter.com/)
* **State Management:** React Context API (`AuthContext`, `ShopContext`)
* **HTTP Requests:** [Axios](https://axios-http.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Data Visualization:** Recharts (for dashboards)
* **Utilities:** date-fns

## ⚙️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* Node.js (v16 or higher recommended)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/jangrarajat/raahi-e-commers-frountend.git](https://github.com/jangrarajat/raahi-e-commers-frountend.git)
    cd raahi-e-commers-frountend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your backend API URL:
    ```env
    VITE_API_URL=http://localhost:5000  # Replace with your actual backend URL
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📂 Project Structure

```text
src/
├── api/                # API configuration and service files (axios, baseUrl)
├── assets/             # Static assets (images, svg)
├── components/         # Reusable UI components
│   ├── auth/           # Login & Registration forms
│   ├── loader/         # Loading spinners/skeletons
│   ├── msg/            # Success/Error message components
│   └── Navbar.jsx, Footer.jsx, etc.
├── context/            # Global State (AuthContext, ShopContext)
├── page/               # Application Pages
│   ├── accountPages/   # User Dashboard, Orders, Settings
│   ├── Home.jsx, CartPage.jsx, ProductPage.jsx, etc.
├── App.jsx             # Main routing configuration
└── main.jsx            # Entry point