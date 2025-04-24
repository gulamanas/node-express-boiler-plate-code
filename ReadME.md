# Node.js Express MongoDB Boilerplate 🔥

[![Node.js](https://img.shields.io/badge/Node.js-22.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-brightgreen)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A production-ready Node.js + Express starter kit with MongoDB connection and JWT authentication system. Perfect for building RESTful APIs.

## ✨ Features

- **User Authentication** (Register/Login/Logout)
- **JWT Token** based authorization
- **MongoDB** connection with Mongoose
- **Password encryption** with bcryptjs
- **Environment variables** using dotenv
- **CORS** enabled

## 🚀 Quick Start

### 1. Clone the repo
```bash
https://github.com/gulamanas/node-express-boiler-plate-code.git
cd node-express-boiler-plate-code
```
### 2. Install the dependencies
```bash
npm install
```
### 3. Edit the .env file with your settings

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourdb
ACCESS_TOKEN_SECRET=your_jwt_secret_here
```
### 4. Start the server
```bash
npm run dev
# or for production
npm start
```
#### The API will be running at http://localhost:5000

### 📂 Project Structure
```bash
src/
├── config/                 # Configuration files
│   └── dbConnection.js     # MongoDB connection
├── controllers/            # Route controllers
├── middleware/             # Custom middleware
├── models/                 # Mongoose models
├── routes/                 # API routes
└── index.js                # Server entry point 
```