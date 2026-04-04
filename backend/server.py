from fastapi import FastAPI, APIRouter, HTTPException, UploadFile, File
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import base64


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class ContactRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    service: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service: str
    message: str

class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    service: str
    details: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuoteCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service: str
    details: str

class GalleryImage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str  # 'tree-felling' or 'landscaping'
    title: str
    image_data: str  # base64 encoded image
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class GalleryImageCreate(BaseModel):
    category: str
    title: str
    image_data: str

class Testimonial(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: str
    rating: int
    comment: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class TestimonialCreate(BaseModel):
    name: str
    company: str
    rating: int
    comment: str


# Routes
@api_router.get("/")
async def root():
    return {"message": "Facymo Pvt API - Tree Felling & Landscaping Services"}

@api_router.post("/contact", response_model=ContactRequest)
async def create_contact(input: ContactCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactRequest(**contact_dict)
    
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.contacts.insert_one(doc)
    return contact_obj

@api_router.get("/contacts", response_model=List[ContactRequest])
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    
    for contact in contacts:
        if isinstance(contact['timestamp'], str):
            contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    
    return contacts

@api_router.post("/quote", response_model=QuoteRequest)
async def create_quote(input: QuoteCreate):
    quote_dict = input.model_dump()
    quote_obj = QuoteRequest(**quote_dict)
    
    doc = quote_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.quotes.insert_one(doc)
    return quote_obj

@api_router.get("/gallery/{category}", response_model=List[GalleryImage])
async def get_gallery_images(category: str):
    images = await db.gallery.find({"category": category}, {"_id": 0}).to_list(100)
    
    for img in images:
        if isinstance(img['timestamp'], str):
            img['timestamp'] = datetime.fromisoformat(img['timestamp'])
    
    return images

@api_router.post("/gallery", response_model=GalleryImage)
async def upload_gallery_image(input: GalleryImageCreate):
    image_dict = input.model_dump()
    image_obj = GalleryImage(**image_dict)
    
    doc = image_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.gallery.insert_one(doc)
    return image_obj

@api_router.delete("/gallery/{image_id}")
async def delete_gallery_image(image_id: str):
    result = await db.gallery.delete_one({"id": image_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Image not found")
    return {"message": "Image deleted successfully"}

@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(100)
    
    for testimonial in testimonials:
        if isinstance(testimonial['timestamp'], str):
            testimonial['timestamp'] = datetime.fromisoformat(testimonial['timestamp'])
    
    return testimonials

@api_router.post("/testimonials", response_model=Testimonial)
async def create_testimonial(input: TestimonialCreate):
    testimonial_dict = input.model_dump()
    testimonial_obj = Testimonial(**testimonial_dict)
    
    doc = testimonial_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.testimonials.insert_one(doc)
    return testimonial_obj

# Include the router in the main app
app.include_router(api_router)

allowed_origins = [origin.strip() for origin in os.environ.get('CORS_ORIGINS', '*').split(',') if origin.strip()]
allow_credentials = False if allowed_origins == ['*'] else True

app.add_middleware(
    CORSMiddleware,
    allow_credentials=allow_credentials,
    allow_origins=allowed_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Seed some sample testimonials
@app.on_event("startup")
async def seed_data():
    # Check if testimonials exist
    count = await db.testimonials.count_documents({})
    if count == 0:
        sample_testimonials = [
            {
                "id": str(uuid.uuid4()),
                "name": "John Mwangi",
                "company": "Riverside Estates",
                "rating": 5,
                "comment": "Excellent tree removal service! They cleared our property quickly and safely. Very professional team.",
                "timestamp": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Sarah Njeri",
                "company": "Green Valley Gardens",
                "rating": 5,
                "comment": "Their landscaping work transformed our garden completely. Beautiful concrete paving and excellent attention to detail.",
                "timestamp": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Peter Kamau",
                "company": "Hillside Properties",
                "rating": 5,
                "comment": "Fast and reliable service. They handled stump removal and lawn dressing perfectly. Highly recommended!",
                "timestamp": datetime.now(timezone.utc).isoformat()
            }
        ]
        await db.testimonials.insert_many(sample_testimonials)
        logger.info("Seeded sample testimonials")