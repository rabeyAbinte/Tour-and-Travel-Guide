# 🌍 Tour & Travel Guide

A full-stack web application for booking tours and hotels.  
Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express, MongoDB

---

## 🚀 Features
- User Registration & Login (JWT Authentication)
- Places & Hotels listing
- Booking system with MongoDB
- Responsive Dark Theme UI
- Secure password hashing with bcrypt
- RESTful API endpoints

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT (JSON Web Token), bcryptjs  
- **Environment:** dotenv  

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/Tour-and-Travel-Guide.git
   cd Tour-and-Travel-Guide
# npm install
# .env
MONGO_URI=mongodb://localhost:27017/zubusdb
JWT_SECRET=yourSecretKey
PORT=5000

# Run backend
node server.js

📡 API Routes
🔑 Authentication
POST /api/users/register → Register new user

POST /api/users/login → Login user

🏨 Hotels
GET /api/hotels → Get all hotels

POST /api/hotels → Add new hotel

📍 Places
GET /api/places → Get all places

POST /api/places → Add new place

📅 Bookings
GET /api/bookings → Get all bookings

POST /api/bookings → Create booking

🗄️ Database Collections
users → { name, email, password }

places → { name, location, description }

hotels → { name, city, price, rating }

bookings → { userId, hotelId, placeId, date }

👥 Contributors
Jubaer → Backend & Database setup

Teammate 2 → Frontend design & UI

Teammate 3 → API integration & Testing

🔮 Future Improvements
Payment gateway integration (Stripe/PayPal)

Admin dashboard for managing hotels & places

Advanced search & filtering system

Mobile app version

