"""
FastAPI REST API Starter Code

This file provides a basic structure for building a REST API.
Replace 'Item' with your own data model and customize the endpoints.
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI(title="My REST API", description="A simple REST API using FastAPI")

# Data Models
class Item(BaseModel):
    id: int
    name: str
    description: str = None
    price: float = None

# In-memory storage (replace with a database in production)
items_db = {
    1: Item(id=1, name="Sample Item", description="This is a sample item", price=9.99)
}

# Root endpoint
@app.get("/")
def read_root():
    """Welcome endpoint"""
    return {"message": "Welcome to My REST API"}

# Create your endpoints below:

# Example: GET all items
@app.get("/items", response_model=List[Item])
def get_items():
    """Retrieve all items"""
    return list(items_db.values())

# TODO: Implement other endpoints (GET by ID, POST, PUT, DELETE)
# Remember to:
# - Use proper HTTP methods and status codes
# - Validate input with Pydantic models
# - Handle errors appropriately with HTTPException

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
