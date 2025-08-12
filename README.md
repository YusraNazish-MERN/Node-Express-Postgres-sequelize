# 🚀 Backend Project with Node.js, Express, PostgreSQL & Sequelize

This is a full-featured backend application built using **Node.js**, **Express**, **PostgreSQL**, and **Sequelize ORM**. It provides a RESTful API for managing users, complete with CRUD operations and database seeding. API testing is done using **Postman**.

## 📁 Project Structure

```text
backend-project/
│
├── seed/             # Data seeding scripts
│   └── userSeed.js     
│
├── controllers/      # Business logic for API endpoints
│   └── userController.js
│
├── routes/           # Express route definitions
│   └── userRoutes.js
│
├── models/           # Sequelize model definitions
│   └── userModel.js
│
├── config/           # Database configuration
│   └── db.js
│
├── .env             # Environment variables
├── app.js           # Main application entry point
├── package.json     # Project metadata and dependencies
```

## 🧰 Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **PostgreSQL** – Relational database
- **Sequelize** – ORM for PostgreSQL
- **dotenv** – Environment variable management
- **Postman** – API testing tool

## ⚙️ Setup Instructions

### 1. Clone the Repository

    ```bash
       git clone https://github.com/Alisha138/sequelize-postman.git
       cd sequelize-postman

### 2. Install Dependencies

    ```bash
       npm install

### 3. Configure Environment Variables

Create a .env file in the root directory that include following credentials:
- DB_NAME=backend-project
- DB_USER=postgres
- DB_PASSWORD=Alisha123
- DB_HOST=localhost
- DB_PORT=5432

### 4. Start PostgreSQL Server

Ensure your PostgreSQL server is running and the database exists.

## 🗃️ Database Setup

Tables are automatically created using Sequelize when the app starts using command sequelize.sync().

## Seed Initial Data

To insert sample users:
```bash
   node seed/userSeed.js
```

## 🚦 Run the Server

    ```bash
       npm start
   
Server will run on http://localhost:3000

## 📮 API Endpoints

```markdown
| Method   | Endpoint             | Description            |
|----------|----------------------|------------------------|
| `POST`   | `/api/users`         | Create a new user      |
| `GET`    | `/api/users`         | Get all users          |
| `GET`    | `/api/users/:id`     | Get user by ID         |
| `PUT`    | `/api/users/:id`     | Update user by ID      |
| `DELETE` | `/api/users/:id`     | Delete user by ID      |
```

## 🧪 API Testing with Postman

1. Open Postman
2. Create a new request
3. Set method (e.g., POST, GET, etc.)
4. Enter URL (e.g., http://localhost:3000/api/users)
5. Set header: Content-Type: application/json
6. Add JSON body for POST or PUT:
       ```json
          {
              "name": "Alisha",
              "email": "alisha@example.com",
              "password": "secure123",
              "role": "admin"
          }
7. Click Send and view the response

## ✅ Features

- Full CRUD operations for users
- Sequelize model validation
- Database seeding with sample data
- Modular folder structure
- Postman-tested endpoints

## 📌 Future Improvements

- Add authentication (JWT)
- Implement soft deletes
- Add Swagger documentation
- Integrate frontend client

## 🙋‍♀️ Author

Alisha 

Web Developer | React, Node.js & PostgreSQL Enthusiast

Would you like me to generate a badge section (e.g., build status, license, tech stack) or help you write a short GitHub project description and tags?
