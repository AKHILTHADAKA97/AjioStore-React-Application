# 🛍️ Ajio Store

Ajio Store is a modern, responsive e-commerce web application built with React and Vite. It features product browsing, category filtering, a shopping cart, and a checkout flow — all powered by the [FakeStore API](https://fakestoreapi.com/).

---
https://freeimage.host/i/B4ZIDNV

## 📁 Project Structure

```
AjioStore/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   │   └── images/          # Hero & promotional images
│   ├── component/
│   │   ├── checkout/        # OrderSummary, UserInfo
│   │   ├── explore/         # PriceFilter, ProductCard, SelectCategory
│   │   ├── Footer/          # Footer component
│   │   ├── home/            # HomeInfo, HomeMain, HomePhotoShoot
│   │   ├── Navbar/          # Navbar, SlidingCart
│   │   ├── product/         # ProductView
│   │   └── shimmer/         # Loading shimmer UI
│   ├── layout/
│   │   └── RootLayout.jsx   # App layout wrapper
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ExploreProducts.jsx
│   │   ├── Product.jsx
│   │   └── Checkout.jsx
│   ├── store/
│   │   └── Store.jsx        # Zustand global cart store
│   ├── utils/
│   │   └── fetchFromApi.js  # FakeStore API helper
│   ├── App.jsx              # Router & app entry
│   ├── main.css             # Global styles
│   └── main.jsx             # React DOM root
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Tech Stack

| Technology         | Purpose                                 |
|--------------------|-----------------------------------------|
| **React 18**       | UI library                              |
| **Vite**           | Build tool & dev server                 |
| **React Router v6**| Client-side routing                     |
| **Zustand**        | Lightweight global state management     |
| **React Hot Toast**| Toast notifications                     |
| **Phosphor React** | Icon library                            |
| **Bootstrap CSS**  | UI styling (imported in Footer)         |
| **FakeStore API**  | Product data source                     |

---

## ✨ Features

- 🏠 **Home Page** — Hero section with promotional imagery
- 🔍 **Explore Products** — Browse by category (Men, Women, All)
- 💰 **Price Filtering** — Filter products by price range
- 🛒 **Shopping Cart** — Add, remove, update quantities (max 20 per item)
- 📦 **Product Details** — Dedicated page with full product info
- ✅ **Checkout Flow** — Order summary & user info form
- 📱 **Responsive Design** — Mobile-friendly navigation & layout
- ⚡ **Fast Loading** — Shimmer UI for loading states
- 🔔 **Toast Notifications** — User feedback on cart actions

---

## 🛠️ Prerequisites

- **Node.js** v18+ (recommended)
- **npm** or **yarn**

---

## 📦 Installation

1. **Clone or navigate to the project:**
   ```bash
   cd AjioStoreWebSite/AjioStore
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## ▶️ How to Run

### Development Server
```bash
npm run dev
```
The app will start at `http://localhost:5173/` (or the next available port).

### Production Build
```bash
npm run build
```
Output will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 🔗 Available Routes

| Route                    | Page              |
|--------------------------|-------------------|
| `/`                      | Home              |
| `/explore/:category`     | Explore Products  |
| `/product/:productId`    | Product Details   |
| `/checkout`              | Checkout          |

**Categories:** `men`, `women`, `all`

---

## 🌐 API Reference

This project uses the [FakeStore API](https://fakestoreapi.com/):

- `GET /products` — All products
- `GET /products/categories` — Product categories
- `GET /products/category/:category` — Products by category
- `GET /products/:id` — Single product details

---

## 🧰 Scripts

| Script        | Description                  |
|---------------|------------------------------|
| `npm run dev` | Start development server     |
| `npm run build`| Create production build     |
| `npm run preview`| Preview production build   |
| `npm run lint`| Run ESLint                   |

---

## 📸 Screenshots

> *(Add screenshots of Home, Explore, Product, and Checkout pages here)*

---

## 📝 Notes

- The project was originally missing `package.json`, `index.html`, and `vite.config.js` — these were reconstructed based on the codebase and dependencies found in `node_modules`.
- `bootstrap/dist/css/bootstrap.min.css` is imported in `Footer.jsx` for styling.
- Cart state persists only in memory (Zustand store) and resets on page reload.

---

## 👤 Author

**Akhil** — *Ajio Store E-commerce Project*

---

## 📄 License

This project is for educational and demonstration purposes.

