## Getting Started
---

1. Clone the repository
 
`git clone https://github.com/LadyAmely/Veggable.git`

2. Navigate to the project directory
   
`cd Veggable`

3. Install dependencies

`npm install`

4. Start the development server

`npm start`

The app will be available at http://localhost:4000/Veggable/ by default.

---

## Project structure

---

```

 src/
├── App.css                      # Global styles or resets
├── App.test.tsx                # Unit test for root component
├── App.tsx                     # Root application component
│
├── assets/                     # Static and global design assets
│   ├── images/                 # Image files (icons, illustrations, etc.)
│   └── styles/
│       └── variables.css       # Global CSS variables (used instead of SCSS variables)
│
├── components/                 # Reusable UI components (based on Atomic Design)
│   ├── atoms/                  # Smallest UI elements (e.g., buttons, inputs)
│   ├── molecules/              # Combinations of atoms (e.g., input + label)
│   ├── organisms/              # Sections composed of molecules/atoms (e.g., navbar)
│   └── templates/              # Page layout templates
│
├── features/                   # Domain-driven modules grouped by feature
│   ├── cart/                   # Cart feature module
│   │   ├── components/         # Components specific to cart UI
│   │   │   ├── CartActions/            # Action bar (e.g., back & checkout buttons)
│   │   │   ├── CartItem/               # Single item displayed in the cart
│   │   │   ├── CartList/               # List of cart items
│   │   │   ├── CartSummary/            # Cart totals, summary section
│   │   │   └── QuantitySelector/       # Quantity increment/decrement control
│   │   ├── hooks/              # Custom hooks related to cart behavior
│   │   └── cartSlice.ts        # Redux slice for cart state management
│
│   ├── checkout/               # Checkout process module
│   │   ├── components/
│   │   │   ├── CheckoutItem/           # Line item displayed during checkout
│   │   │   ├── CheckoutList/           # List of all checkout items
│   │   │   ├── CheckoutSummary/        # Total price, payment summary
│   │   │   └── PlaceOrderButton/       # Final "place order" button
│
│   └── products/               # Product listing and details module
│       ├── components/
│       │   ├── ProductCard/            # Product display card
│       │   ├── ProductList/            # Grid/list of products
│       │   └── ProductPrice/           # Price display component
│       ├── data/               # Product mock data, static JSONs, etc.
│       ├── hooks/              # Product-related custom hooks
│       └── types.ts            # Shared product types/interfaces
│
├── layouts/                    # Page layout wrappers (e.g., headers, footers, containers)
│
├── store/                      # Global Redux store configuration

```

## Architecture Overview

This project follows a Feature-Driven Modular Architecture in combination with the Atomic Design methodology. The structure promotes scalability, reusability, and domain encapsulation, inspired by [this article][fdd-article].

...

[fdd-article]: https://medium.com/@muhmdshanoob/feature-driven-modular-architecture-in-react-focusing-on-scalability-reusability-and-atomic-76d9579ac60e


🔹 Feature-Driven Structure (src/features/)
The core business logic is grouped by feature (e.g., cart, checkout, products). Each feature encapsulates its own:

Components (UI-specific to the feature)

Hooks (custom logic tied to the feature)

Redux slice (local state management)

Data (e.g., mocks or static content)

Types/interfaces

This ensures modularity and clear ownership of each domain.

🔹 Atomic Design (src/components/)
Reusable UI components are organized according to Atomic Design principles:

Atoms – base UI elements (e.g., Button)

Molecules – small groups of atoms

Organisms – larger components combining multiple molecules/atoms (e.g., Navbar)

Templates – layout-level structures used across pages

This pattern encourages reusability and consistent UI composition.

🔹 Layouts & Global Styling
layouts/ contains global layout wrappers (e.g., header/footer containers)

assets/styles/variables.css centralizes global design tokens like colors

assets/images/ stores icons and illustrations
