# 📦 Inventory Management System

> **A backend-driven inventory management application that integrates MongoDB with a REST API to manage products, perform CRUD operations, search and filter inventory, and provide secure login functionality.**

**Objective:** Integrate a database with the backend and develop REST APIs for inventory management.

---

## 📑 Table of Contents

* [Project Overview](#-project-overview)
* [Objective](#-objective)
* [Practical Tasks](#-practical-tasks)
* [Architecture Overview](#-architecture-overview)
* [System Workflow](#-system-workflow)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Prerequisites](#-prerequisites)
* [Database Configuration](#-database-configuration)
* [Product Collection](#-product-collection)
* [API Architecture](#-api-architecture)
* [CRUD Operations](#-crud-operations)
* [Search & Filter](#-search--filter)
* [Login API](#-login-api)
* [API Endpoints](#-api-endpoints)
* [HTTP Methods](#-http-methods)
* [Installation](#-installation)
* [Quick Start](#-quick-start)
* [Testing APIs](#-testing-apis)
* [Application Workflow](#-application-workflow)
* [Key Features](#-key-features)
* [Concepts Covered](#-concepts-covered)
* [Learning Outcomes](#-learning-outcomes)
* [Practical Checklist](#-practical-checklist)
* [Future Enhancements](#-future-enhancements)
* [Conclusion](#-conclusion)
* [Author](#-author)

---

# 📌 Project Overview

The **Inventory Management System** is a backend-based application developed to manage product inventory using a database and REST APIs.

The system connects the backend application with **MongoDB**, stores product information in a `products` collection, and provides APIs for creating, viewing, updating, and deleting products.

It also implements:

* Product search
* Product filtering
* User login
* Authentication
* REST API communication
* Database integration

MongoDB supports the fundamental CRUD operations through insert, find, update, and delete operations on collections.

---

# 🎯 Objective

The main objective of this practical is:

> **To integrate a database with the backend and develop APIs for inventory management.**

The application demonstrates how a backend server communicates with MongoDB to store and retrieve real application data.

---

# 📝 Practical Tasks

The project implements the following practical tasks:

* [x] Connect MongoDB with backend
* [x] Create Product collection
* [x] Implement Create operation
* [x] Implement Read operation
* [x] Implement Update operation
* [x] Implement Delete operation
* [x] Implement product search
* [x] Implement product filtering
* [x] Implement Login API
* [x] Handle API requests and responses
* [x] Test REST APIs

---

# 🏗️ Architecture Overview

The application follows a simple three-layer architecture:

```text
                 ┌─────────────────────┐
                 │       Client        │
                 │ Browser / Postman   │
                 └──────────┬──────────┘
                            │
                            │ HTTP Request
                            ▼
                 ┌─────────────────────┐
                 │     Backend API     │
                 │ Node.js + Express   │
                 └──────────┬──────────┘
                            │
                     Database Query
                            │
                            ▼
                 ┌─────────────────────┐
                 │       MongoDB       │
                 │     Database        │
                 └──────────┬──────────┘
                            │
                     Data / Response
                            │
                            ▼
                 ┌─────────────────────┐
                 │     Backend API     │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │       Client        │
                 └─────────────────────┘
```

---

# 🔄 System Workflow

```text
User
 │
 ▼
Login
 │
 ▼
Authentication
 │
 ▼
Inventory API
 │
 ├───────────────┐
 │               │
 ▼               ▼
Products      Search/Filter
 │
 ├── Create
 ├── Read
 ├── Update
 └── Delete
 │
 ▼
MongoDB
 │
 ▼
API Response
 │
 ▼
User
```

---

# 🛠️ Tech Stack

| Technology     | Purpose                     |
| -------------- | --------------------------- |
| **Node.js**    | Backend runtime             |
| **Express.js** | REST API framework          |
| **MongoDB**    | Database                    |
| **Mongoose**   | MongoDB object modeling     |
| **JavaScript** | Application programming     |
| **REST API**   | Client-server communication |
| **Postman**    | API testing                 |
| **JSON**       | Data exchange format        |

---

# 📁 Project Structure

A recommended project structure is:

```text
Inventory-Management-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── authRoutes.js
│   │
│   ├── controllers/
│   │   ├── productController.js
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│   └── ...
│
├── .env
├── .gitignore
└── README.md
```

### Folder Responsibilities

| Folder/File    | Purpose                               |
| -------------- | ------------------------------------- |
| `config/`      | Database configuration                |
| `models/`      | MongoDB schemas/models                |
| `routes/`      | API routes                            |
| `controllers/` | Business logic                        |
| `middleware/`  | Authentication and request processing |
| `server.js`    | Starts backend server                 |
| `.env`         | Environment configuration             |
| `README.md`    | Project documentation                 |

---

# 🗄️ Database Configuration

MongoDB is used as the database for storing inventory and user information.

A typical MongoDB connection string is:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/inventoryDB
```

For MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/inventoryDB
```

> **Security:** Never commit database usernames, passwords, API keys, or other secrets to GitHub.

---

# 📦 Product Collection

The main collection used by the application is:

```text
products
```

A product document can contain:

```json
{
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "quantity": 25,
  "supplier": "ABC Electronics",
  "description": "Wireless optical mouse"
}
```

### Product Fields

| Field         | Type     | Description               |
| ------------- | -------- | ------------------------- |
| `_id`         | ObjectId | Unique MongoDB identifier |
| `name`        | String   | Product name              |
| `category`    | String   | Product category          |
| `price`       | Number   | Product price             |
| `quantity`    | Number   | Available stock           |
| `supplier`    | String   | Supplier name             |
| `description` | String   | Product description       |

MongoDB collections contain documents, and MongoDB can automatically create a collection when the first document is inserted if the collection does not already exist.

---

# 🌐 API Architecture

The backend exposes REST endpoints that allow clients such as a frontend application or Postman to communicate with the database.

```text
Client
   │
   │ HTTP Request
   ▼
Express Route
   │
   ▼
Controller
   │
   ▼
Mongoose Model
   │
   ▼
MongoDB
   │
   ▼
Controller
   │
   ▼
JSON Response
```

---

# 🔄 CRUD Operations

CRUD stands for:

| Operation | Meaning | Example        |
| --------- | ------- | -------------- |
| **C**     | Create  | Add product    |
| **R**     | Read    | View products  |
| **U**     | Update  | Edit product   |
| **D**     | Delete  | Remove product |

MongoDB provides operations such as `insertOne()`, `find()`, `updateOne()`, and `deleteOne()` for these fundamental database operations.

---

## ➕ Create Product

```http
POST /api/products
```

Example request:

```json
{
  "name": "Keyboard",
  "category": "Electronics",
  "price": 1200,
  "quantity": 15,
  "supplier": "ABC Electronics"
}
```

The backend receives the request and creates a new product document in MongoDB.

---

## 📖 Read Products

```http
GET /api/products
```

Returns the available products.

Example response:

```json
[
  {
    "_id": "65a123...",
    "name": "Keyboard",
    "category": "Electronics",
    "price": 1200,
    "quantity": 15
  }
]
```

MongoDB's `find()` operation is used to retrieve documents matching specified criteria.

---

## ✏️ Update Product

```http
PUT /api/products/:id
```

Example:

```json
{
  "price": 1100,
  "quantity": 20
}
```

This updates an existing product.

MongoDB supports update operations such as `updateOne()` and `updateMany()` for modifying existing documents.

---

## 🗑️ Delete Product

```http
DELETE /api/products/:id
```

This removes the selected product.

MongoDB provides `deleteOne()` and `deleteMany()` for removing documents.

---

# 🔎 Search & Filter

The inventory system provides search and filtering functionality to quickly find products.

### Search

Example:

```http
GET /api/products?search=keyboard
```

Possible logic:

```text
Search Term
     │
     ▼
Product Name
     │
     ├── Match → Return Product
     │
     └── No Match → Empty Result
```

### Category Filter

```http
GET /api/products?category=Electronics
```

### Price Filter

```http
GET /api/products?minPrice=500&maxPrice=2000
```

### Combined Filter

```http
GET /api/products?category=Electronics&minPrice=500&maxPrice=2000
```

MongoDB queries can use filter criteria to retrieve only documents matching the required conditions.

---

# 🔐 Login API

The Login API authenticates registered users before allowing access to protected inventory operations.

### Login Request

```http
POST /api/auth/login
```

Request:

```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

### Authentication Flow

```text
User
 │
 ▼
Login Form
 │
 ▼
POST /api/auth/login
 │
 ▼
Validate Credentials
 │
 ├── Invalid ──► Error Response
 │
 └── Valid
       │
       ▼
Authentication Success
       │
       ▼
Access Inventory APIs
```

---

# 🔑 Authentication

A typical secure implementation uses:

* User credentials
* Password hashing
* Authentication middleware
* JWT token
* Protected API routes

Example:

```text
Login
  │
  ▼
Verify Email + Password
  │
  ▼
Generate JWT
  │
  ▼
Client Stores Token
  │
  ▼
Send Token With Protected Requests
  │
  ▼
Authentication Middleware
  │
  ▼
Allow / Reject Request
```

---

# 📡 API Endpoints

| Method   | Endpoint                     | Description        |
| -------- | ---------------------------- | ------------------ |
| `POST`   | `/api/auth/login`            | Login user         |
| `POST`   | `/api/products`              | Create product     |
| `GET`    | `/api/products`              | Get all products   |
| `GET`    | `/api/products/:id`          | Get product by ID  |
| `PUT`    | `/api/products/:id`          | Update product     |
| `DELETE` | `/api/products/:id`          | Delete product     |
| `GET`    | `/api/products?search=...`   | Search products    |
| `GET`    | `/api/products?category=...` | Filter by category |

---

# 📋 HTTP Methods

| HTTP Method | Purpose             | CRUD   |
| ----------- | ------------------- | ------ |
| `POST`      | Create new resource | Create |
| `GET`       | Retrieve resource   | Read   |
| `PUT`       | Update resource     | Update |
| `DELETE`    | Remove resource     | Delete |

---

# 📥 Installation

Clone the project:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd Inventory-Management-System
```

Install dependencies:

```bash
npm install
```

If frontend and backend are separate:

```bash
cd backend
npm install
```

and:

```bash
cd ../frontend
npm install
```

---

# ⚡ Quick Start

## 1. Start MongoDB

Make sure MongoDB is running locally or configure a MongoDB Atlas connection.

---

## 2. Configure Environment Variables

Create:

```text
.env
```

Example:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/inventoryDB
JWT_SECRET=your_secure_secret
```

---

## 3. Start Backend

```bash
npm run dev
```

or:

```bash
npm start
```

---

## 4. Test Server

Open:

```text
http://localhost:5000
```

The exact port depends on the value configured in `.env`.

---

# 🧪 Testing APIs

Postman can be used to test the REST API.

### Test Sequence

```text
1. Login
   ↓
2. Receive authentication token
   ↓
3. Create Product
   ↓
4. Get Products
   ↓
5. Search Product
   ↓
6. Filter Products
   ↓
7. Update Product
   ↓
8. Delete Product
```

### Example Postman Collection

```text
Inventory Management API
│
├── Authentication
│   └── Login
│
└── Products
    ├── Create Product
    ├── Get All Products
    ├── Get Product By ID
    ├── Search Products
    ├── Filter Products
    ├── Update Product
    └── Delete Product
```

---

# 🔄 Application Workflow

```text
                 ┌──────────────┐
                 │     Login    │
                 └──────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │ Authentication│
                └──────┬────────┘
                       │
                       ▼
                ┌───────────────┐
                │   Inventory   │
                │    System     │
                └──────┬────────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       Create        Search       Filter
          │            │            │
          └────────────┼────────────┘
                       │
                       ▼
                    Products
                       │
              ┌────────┼────────┐
              │        │        │
              ▼        ▼        ▼
             Read    Update   Delete
                       │
                       ▼
                   MongoDB
```

---

# ✨ Key Features

### 📦 Product Management

* Add new products
* View products
* Update product details
* Delete products

### 🔎 Search

Search products using product names or relevant fields.

### 🏷️ Filtering

Filter inventory using categories, prices, stock levels, or other criteria.

### 🔐 Authentication

Provide a login API for controlled access.

### 🗄️ Database Integration

Store persistent inventory data in MongoDB.

### 🌐 REST API

Provide standardized HTTP endpoints for frontend and API clients.

---

# 🧠 Concepts Covered

## Database

Understanding how a backend connects to and communicates with MongoDB.

## CRUD

```text
Create
Read
Update
Delete
```

These operations form the foundation of application data management.

## Authentication

Understanding how login credentials are verified and protected APIs can be accessed by authenticated users.

## API

Understanding how frontend/client applications communicate with backend services through HTTP requests and JSON responses.

## Search & Filtering

Understanding how database query conditions can be used to retrieve specific records.

---

# 🎓 Learning Outcomes

After completing this practical, the student will be able to:

* Connect a backend application to MongoDB.
* Create and manage MongoDB collections.
* Design a Product data model.
* Implement REST APIs.
* Perform CRUD operations.
* Retrieve individual database records.
* Search database records.
* Filter records based on conditions.
* Implement a Login API.
* Understand authentication flow.
* Test APIs using Postman.
* Understand client-server-database communication.

---

# 🔁 Client → API → Database Flow

The complete communication can be represented as:

```text
Frontend / Postman
       │
       │ HTTP Request
       ▼
Express.js API
       │
       ▼
Controller
       │
       ▼
Mongoose Model
       │
       ▼
MongoDB
       │
       ▼
Database Result
       │
       ▼
JSON Response
       │
       ▼
Frontend / Postman
```

---

# ✅ Practical Checklist

### Database

* [x] Install MongoDB
* [x] Configure MongoDB connection
* [x] Create inventory database
* [x] Create Product collection
* [x] Create User collection

### Backend

* [x] Initialize Node.js project
* [x] Install Express.js
* [x] Configure Mongoose
* [x] Create REST API
* [x] Create product routes
* [x] Create authentication routes

### CRUD

* [x] Create Product
* [x] Read Products
* [x] Read Product by ID
* [x] Update Product
* [x] Delete Product

### Search & Filter

* [x] Search products
* [x] Filter by category
* [x] Filter by price
* [ ] Filter by stock
* [x] Combine filters

### Authentication

* [x] Create Login API
* [x] Validate credentials
* [x] Hash passwords
* [x] Generate authentication token
* [x] Protect required routes

### Testing

* [x] Test Login API
* [x] Test Create API
* [x] Test Read API
* [x] Test Update API
* [x] Test Delete API
* [x] Test Search API
* [x] Test Filter API

---

# 🚀 Future Enhancements

The system can be extended with:

* 📊 Inventory dashboard
* 📈 Stock analytics
* ⚠️ Low-stock alerts
* 🧾 Purchase and sales management
* 👥 Multiple user roles
* 🔐 JWT-based authorization
* 📦 Supplier management
* 🏷️ Product categories
* 📷 Product image upload
* 📑 PDF inventory reports
* 📤 Excel/CSV export
* 🔔 Automated notifications
* 📱 Responsive frontend
* ☁️ Cloud deployment

---

# 📌 Conclusion

The **Inventory Management System** demonstrates how a backend application can be integrated with a database to build a practical data-driven application.

The project covers the complete flow:

```text
Database Connection
        ↓
Product Collection
        ↓
REST API
        ↓
CRUD Operations
        ↓
Search & Filter
        ↓
Authentication
        ↓
API Testing
```

By completing this practical, students gain hands-on experience with **MongoDB, backend development, REST APIs, CRUD operations, authentication, database queries, and API testing**.

---

# 👨‍💻 Author

**Haresh Gavit**

> Inventory Management System — Database & Backend Integration Practical
