# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Create a fully functional REST API using the FastAPI framework. You'll learn how to design API endpoints, handle HTTP requests/responses, validate data, and build a backend service that can be consumed by client applications.

## 📝 Tasks

### 🛠️ Set Up FastAPI Project

#### Description
Initialize a new FastAPI project with proper dependencies and project structure. Create a basic endpoint to verify your setup works correctly.

#### Requirements
Completed setup should:

- Have FastAPI and Uvicorn installed via pip
- Create a main application file with a root endpoint (`GET /`)
- Run the development server successfully on localhost:8000
- Access the auto-generated API documentation at `/docs`


### 🛠️ Create CRUD Endpoints

#### Description
Build a set of endpoints that implement Create, Read, Update, and Delete operations for a resource of your choice (e.g., tasks, books, products).

#### Requirements
Completed endpoints should:

- Implement `GET /items` to retrieve all items
- Implement `GET /items/{id}` to retrieve a specific item
- Implement `POST /items` to create a new item with request body validation
- Implement `PUT /items/{id}` to update an existing item
- Implement `DELETE /items/{id}` to delete an item
- Return appropriate HTTP status codes (200, 201, 400, 404)


### 🛠️ Add Data Validation and Error Handling (Stretch Goal)

#### Description
Enhance your API with input validation using Pydantic models and implement proper error handling to return meaningful error messages to clients.

#### Requirements
Completed features should:

- Define Pydantic models for request/response data validation
- Validate required fields and data types automatically
- Return 422 Unprocessable Entity for invalid input
- Implement custom error responses with helpful messages
- Handle edge cases (duplicate items, missing resources, etc.)
