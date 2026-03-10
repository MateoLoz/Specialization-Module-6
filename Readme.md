# Cypress Test Automation

This project contains end-to-end automated tests built with **Cypress** using the **Page Object Model (POM)** pattern.  
The goal of this framework is to keep tests **clean, maintainable, and scalable**.

---

# 🚀 How to Run the Tests

## 1. Install dependencies

```bash
npm install
```

## 2. Create the environment file

- BASE_URL=https://practicesoftwaretesting.com/

## 3. Run all tests (cli)
```
npm test:all
```


## 4. Run tests with browser visible

```bash
npm test:ui
```

## 6. Run a specific test file

```bash
npx cypress run --spec "cypress/src/tests/file.cy.js"
```


## 📂 Project Structure

```
project-root
│
├── src
│   │
│   ├── PO
│   │   ├── pages
│   │   │   └── home.page.js
│   │   │
│   │   └── components
│   │       ├── filters
│   │       │   └── filter.component.js
│   │       │
│   │       ├── products
│   │       │   └── products.component.js
│   │       │
│   │       ├── inputs
│   │       │   └── input.component.js
│   │       │
│   │       ├── buttons
│   │       │   └── button.submit.js
│   │       │
│   │       └── helpers
│   │           └── helper.component.js
│   │
│   ├── tests
│   │   └── toolshop-filters.spec.js
│   │
│   └── test-data
│       └── credentials.data.js
│
├── features
│   └── features.md
│
├── cypress.config.js
└── package.json
```

## 📘 Features
The implemented product features and scenarios are documented in:
- features/features.md

## 🧱 Test Architecture

The project follows the Page Object Model (POM) architecture.

### Pages

Represent complete application pages and orchestrate components.

### Components

Reusable UI elements such as:

- inputs
- filters
- product cards
- buttons
- helper messages

### Tests

Tests interact only with page objects, keeping test logic separated from UI locators.

### Test Data

All test data (credentials, inputs, etc.) is stored inside:

- src/test-data

This improves reusability and maintainability.

## ⚙️ Technologies Used

- Node.js
- Cypress
- JavaScript
- Page Object Model (POM)

## 👨💻 Author

Mateo Lozano
QA Automation Engineer