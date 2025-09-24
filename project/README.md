# User Management Dashboard

A **React-based user management dashboard** with CRUD operations (Create, Read, Update, Delete) and local JSON storage using **JSON Server**. This project allows adding, editing, deleting users, and filtering by department.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

---

## Features

- List all users with pagination and search
- Add new users with validation
- Edit existing users
- Delete users
- Department selection via dropdown
- Sort users by first name, last name, or email
- Toast notifications for success/failure
- Local JSON server for backend simulation

---
## Installation
**Clone the repository**  
bash
git clone https://github.com/yourusername/user-management-dashboard.git
cd user-management-dashboard
Install dependencies

bash
Copy code
npm install
Install JSON Server (for local backend)

bash
Copy code
npm install -g json-server
Running the Project
Start JSON Server

bash
Copy code
json-server --watch db.json --port 5000
This will run your fake REST API at http://localhost:5000.

## Start React app

bash
Copy code
npm start
Open http://localhost:3000

## Technologies Used

React (with hooks: useState, useEffect, useMemo)

Axios (for API calls)

JSON Server (mock REST API)

React Toastify (notifications)

CSS / Flexbox (styling)

## Usage

Navigate to Users Page to view all users.

Click Add User to create a new user.

Use the Edit button to update user details.

Use the Delete button to remove a user.

Use the Department dropdown to select user department when adding/editing.

Search users by name, email, or department.

Paginate users using the dropdown for items per page.

## Project difficulty:
Use in Copy code:
Add and Delete and Update function working with
json-server --watch db.json --port 5000
This will run your fake REST API at http://localhost:5000.
run code in Backend server.