# 📖 Project Guidance — Ajio Store

This document provides an in-depth explanation of the Ajio Store project architecture, design decisions, and guidance for understanding and extending the codebase.

---

## 🎯 Project Overview

**Ajio Store** is a single-page e-commerce application that simulates a real-world online shopping experience. It allows users to browse products by category, view product details, manage a shopping cart, and proceed to checkout. The application uses a modern React stack with minimal boilerplate and focuses on performance and user experience.

---

## 🏗️ Architecture Overview

### Frontend Architecture
The project follows a **component-based architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────┐
│              Pages Layer                │
│   (Home, ExploreProducts, Product,      │
│           Checkout)                     │
├─────────────────────────────────────────┤
│           Component Layer               │
│   (Navbar, Footer, ProductCard,         │
│    PriceFilter, UserInfo, etc.)         │
├─────────────────────────────────────────┤
│            Layout Layer                 │
│         (RootLayout — Router)           │
├─────────────────────────────────────────┤
│             State Layer                 │
│      (Zustand Store — Cart)             │
├─────────────────────────────────────────┤
│            Utility Layer                │
│      (API Fetching, Helpers)            │
└─────────────────────────────────────────┘
```

---

## 📂 Folder Structure Explained

### `src/pages/`
Top-level route components. Each page corresponds to a route in the application.
- **Home.jsx** — Landing page with hero section and promotional content
- **ExploreProducts.jsx** — Product listing with filtering capabilities
- **Product.jsx** — Individual product detail view
- **Checkout.jsx** — Checkout flow with order summary and user form

### `src/component/`
Reusable UI components organized by feature area:
- **checkout/** — Components for the checkout process
- **explore/** — Product listing and filtering components
- **home/** — Homepage-specific sections
- **Navbar/** — Navigation and cart sidebar
- **product/** — Product detail view components
- **shimmer/** — Loading state placeholders

### `src/layout/`
- **RootLayout.jsx** — Wraps all pages with common structure (Navbar, Outlet for nested routes)

### `src/store/`
- **Store.jsx** — Global state management using Zustand for the shopping cart

### `src/utils/`
- **fetchFromApi.js** — Centralized API call utility using FakeStore API

---

## 🧠 State Management

### Why Zustand?
We chose **Zustand** over Redux or Context API because:
- **Minimal boilerplate** — No providers, reducers, or action creators needed
- **Simple API** — Just `create()`, `set()`, and `get()`
- **Performance** — Components only re-render when their selected state changes
- **DevTools support** — Easy debugging with Redux DevTools extension

### Cart Store Structure
```javascript
{
  cart: [
    {
      id: 1,
      title: "Product Name",
      price: 29.99,
      qty: 2,  // quantity (max 20)
      ...
    }
  ],
  action: {
    addToCart: (product) => {},
    removeFromCart: (productId) => {},
    addProductQuantity: (id, newQty) => {},
    emptyCart: () => {}
  }
}
```

### Key Rules
- If a product already exists in cart, its quantity increments
- Maximum quantity per product is **20**
- Removing a product filters it out completely
- Cart state is **not persisted** (resets on page reload)

---

## 🛣️ Routing

React Router v6 handles client-side navigation:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/explore/:category` | ExploreProducts | Category browsing (men, women, all) |
| `/product/:productId` | Product | Single product details |
| `/checkout` | Checkout | Finalize purchase |

### Dynamic Parameters
- `:category` — Used to filter products (men, women, all)
- `:productId` — Used to fetch specific product details from API

---

## 🎨 Styling Approach

### CSS Strategy
- **Component-scoped CSS** — Each component has its own `.css` file
- **Global styles** — `main.css` contains base styles and CSS variables
- **Bootstrap CSS** — Imported in `Footer.jsx` for utility classes

### Naming Convention
- CSS files match component names (e.g., `Navbar.jsx` → `Navbar.css`)
- Class names use kebab-case (e.g., `nav-link_container`, `cart-counter`)

---

## 🔄 Data Flow

```
User Action
    ↓
Component (e.g., ProductCard)
    ↓
Cart Store Action (Zustand)
    ↓
State Update
    ↓
Re-render Affected Components
    ↓
UI Updates (e.g., Cart counter, Toast notification)
```

### API Data Flow
```
Page Mounts
    ↓
fetchFromApi() called
    ↓
FakeStore API Response
    ↓
Local Component State Updated
    ↓
Products Rendered / Shimmer Removed
```

---

## 🧩 Key Components Deep Dive

### Navbar & SlidingCart
- **Navbar** contains the navigation links and cart button
- **SlidingCart** is a slide-out panel showing cart items
- Cart quantity badge updates in real-time using Zustand selectors
- Mobile-responsive hamburger menu for smaller screens

### ProductCard
- Displays product image, title, price, and rating
- "Add to Cart" button triggers Zustand action
- Shows toast notification on successful add

### PriceFilter & SelectCategory
- **PriceFilter** allows filtering by price range (min/max inputs)
- **SelectCategory** enables category selection
- Both work together to filter the product list in ExploreProducts

### Shimmer
- Skeleton loading UI displayed while API data loads
- Improves perceived performance and user experience
- Mimics the layout of actual content

---

## 🔌 API Integration

### FakeStore API
Base URL: `https://fakestoreapi.com`

#### Endpoints Used:
| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/products` | GET | Fetch all products |
| `/products/categories` | GET | Get available categories |
| `/products/category/:category` | GET | Filter by category |
| `/products/:id` | GET | Get single product details |

### Error Handling
- API errors are currently logged to console
- Consider adding user-facing error messages for production

---

## 🚀 Development Workflow

### Getting Started (First Time)
```bash
cd AjioStoreWebSite/AjioStore
npm install
npm run dev
```

### Making Changes
1. **Start the dev server**: `npm run dev`
2. **Edit components** in `src/component/` or pages in `src/pages/`
3. **Hot Module Replacement** (HMR) will auto-reload the browser
4. **Check browser console** for any errors or warnings

### Adding a New Page
1. Create a new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Create any needed components in `src/component/`
4. Update Navbar links if necessary

### Adding a New Component
1. Create folder in appropriate `src/component/` subdirectory
2. Create `.jsx` and `.css` files
3. Export and import where needed
4. Follow existing naming conventions

---

## 🧪 Testing Considerations

While tests are not included in the current codebase, here are recommended approaches:

- **Unit Tests**: Test individual components with React Testing Library
- **Integration Tests**: Test cart functionality (add, remove, update)
- **E2E Tests**: Use Cypress or Playwright for full user flows

### Example Test Scenarios
1. Adding product to cart increases cart count
2. Removing product decreases cart count
3. Checkout page displays correct total
4. Navigation works between all routes

---

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```
Creates an optimized `dist/` folder ready for deployment.

### Deployment Options
- **Netlify** — Drag & drop `dist/` folder, or connect Git repo
- **Vercel** — Connect GitHub repo for auto-deploys
- **GitHub Pages** — Use `gh-pages` branch with built files
- **Firebase Hosting** — Use Firebase CLI to deploy

> **Note**: For client-side routing to work, configure your host to serve `index.html` for all routes (SPA fallback).

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port already in use | Vite auto-selects next available port (5174, 5175, etc.) |
| Module not found | Run `npm install` to ensure all dependencies are installed |
| Bootstrap styles missing | Install with `npm install bootstrap` |
| Cart resets on refresh | Implement localStorage persistence in Zustand store |
| API data not loading | Check internet connection and FakeStore API status |

---

## 🎓 Learning Resources

If you're new to any of these technologies:

- **React**: [react.dev](https://react.dev/)
- **React Router**: [reactrouter.com](https://reactrouter.com/)
- **Zustand**: [github.com/pmndrs/zustand](https://github.com/pmndrs/zustand)
- **Vite**: [vitejs.dev](https://vitejs.dev/)
- **FakeStore API**: [fakestoreapi.com](https://fakestoreapi.com/)

---

## 📝 Code Style Guidelines

- Use **functional components** with hooks
- Destructure props for readability
- Use **arrow functions** for consistency
- Keep components **focused and small**
- Use **semantic HTML** elements
- Follow existing indentation (2 spaces)

---

## 🔮 Future Enhancements

Potential improvements for the project:

- [ ] **Persist cart** to localStorage
- [ ] **Add user authentication**
- [ ] **Implement search functionality**
- [ ] **Add product reviews**
- [ ] **Wishlist feature**
- [ ] **Dark mode toggle**
- [ ] **Unit & integration tests**
- [ ] **TypeScript migration**
- [ ] **Payment gateway integration**
- [ ] **Order history page**

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Support

For questions or issues, please refer to the README.md or open an issue in the project repository.

---

**Happy Coding! 🚀**

