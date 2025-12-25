import os
import logging
import uuid
from datetime import datetime
from typing import List, Deque
from collections import deque

from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

# --- CONFIGURATION ---
# Configure logging to track server activity
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("PortfolioBackend")

# --- DATA STORAGE ---
# Robustness Feature: Use a deque (double-ended queue) with a max length.
# This automatically discards old data when new data arrives, preventing memory leaks.
# It acts like a "Ring Buffer" keeping only the last 100 entries.
fake_db: Deque[dict] = deque(maxlen=100)

# --- MODELS ---
class StatusCheckCreate(BaseModel):
    client_name: str

class StatusCheck(BaseModel):
    id: str
    client_name: str
    timestamp: datetime

# --- APP SETUP ---
app = FastAPI(title="Portfolio API", version="1.0.0")
api_router = APIRouter(prefix="/api")

# --- ROUTES ---

@app.get("/")
async def health_check():
    """Simple health check to verify the server is running."""
    return {"status": "online", "message": "Backend is operational"}

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    """Retrieve the last 100 status checks."""
    # Convert deque to list for the response
    return list(fake_db)

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input_data: StatusCheckCreate):
    """Create a new status entry."""
    try:
        # Create the new record
        new_entry = StatusCheck(
            id=str(uuid.uuid4()),
            client_name=input_data.client_name,
            timestamp=datetime.utcnow()
        )
        
        # Save to memory (Safe due to deque's maxlen)
        fake_db.append(new_entry.dict())
        
        logger.info(f"New status check from: {input_data.client_name}")
        return new_entry
        
    except Exception as e:
        logger.error(f"Error creating status check: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

# --- FINAL SETUP ---
app.include_router(api_router)

# Robust CORS Setup
# This allows your specific Vercel frontend to talk to this backend.
origins = os.environ.get('CORS_ORIGINS', '*').split(',')

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
