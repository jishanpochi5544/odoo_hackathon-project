# ReWear - Community Clothing Exchange Platform

## 🎯 Project Overview

ReWear is a sustainable fashion platform built with MERN stack that enables users to exchange unused clothing through direct swaps or a point-based redemption system. Our mission is to promote sustainable fashion and reduce textile waste by encouraging users to reuse wearable garments instead of discarding them.

## 🌟 Key Features

### 👤 User Authentication
- Email/password signup and login system
- JWT token-based authentication
- Secure user session management
- Profile management

### 🏠 Landing Page
- Platform introduction and mission statement
- Call-to-action buttons: "Start Swapping", "Browse Items", "List an Item"
- Featured items carousel showcasing trending exchanges
- User testimonials and impact statistics

### 📊 User Dashboard
- Profile details and points balance display
- Uploaded items overview with status tracking
- Ongoing and completed swaps list
- Transaction history and points earned/spent

### 👕 Item Detail Page
- Image gallery with multiple photo support
- Comprehensive item description and specifications
- Uploader information and rating
- Action options: "Swap Request" or "Redeem via Points"
- Real-time item availability status

### ➕ Add New Item Page
- Multi-image upload functionality
- Detailed item form: title, description, category, type, size, condition, and tags
- Preview before submission
- Automatic listing approval workflow

### 🔧 Admin Role
- Content moderation and approval/rejection system
- Spam and inappropriate content removal
- Lightweight admin panel for platform oversight
- User management and analytics

## 🛠 Technology Stack

### Frontend
- **Framework**: React.js 18
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Image Upload**: Cloudinary

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + Cloudinary
- **Validation**: Joi
- **Security**: bcryptjs, helmet, cors

### Database
- **Primary**: MongoDB Atlas
- **Caching**: Redis (optional)

## 📋 Prerequisites

- Node.js 16+ and npm
- MongoDB (local or Atlas)
- Git
- Modern web browser

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd rewear
```

### 2. Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Setup
```bash
# Backend environment variables
cd backend
cp .env.example .env
# Edit .env with your configuration

# Frontend environment variables
cd ../frontend
cp .env.example .env
# Edit .env with your configuration
```

### 4. Database Setup
```bash
# If using local MongoDB
mongod

# Or configure MongoDB Atlas connection string in backend/.env
```

### 5. Run the Application
```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend development server (from frontend directory)
npm start
```

## 📁 Project Structure

```
rewear/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── itemController.js
│   │   ├── swapController.js
│   │   ├── userController.js
│   │   └── adminController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── upload.js
│   │   └── admin.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Item.js
│   │   ├── SwapRequest.js
│   │   └── PointsTransaction.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── items.js
│   │   ├── swaps.js
│   │   ├── users.js
│   │   └── admin.js
│   ├── utils/
│   │   ├── validation.js
│   │   └── helpers.js
│   ├── package.json
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Loading.jsx
│   │   │   │   └── ErrorBoundary.jsx
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   ├── dashboard/
│   │   │   │   ├── UserDashboard.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   └── PointsHistory.jsx
│   │   │   ├── items/
│   │   │   │   ├── ItemList.jsx
│   │   │   │   ├── ItemDetail.jsx
│   │   │   │   ├── AddItem.jsx
│   │   │   │   └── ItemCard.jsx
│   │   │   ├── swaps/
│   │   │   │   ├── SwapRequests.jsx
│   │   │   │   ├── SwapHistory.jsx
│   │   │   │   └── SwapCard.jsx
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── ItemModeration.jsx
│   │   │       └── UserManagement.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Browse.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Admin.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── slices/
│   │   │       ├── authSlice.js
│   │   │       ├── itemSlice.js
│   │   │       ├── swapSlice.js
│   │   │       └── userSlice.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── uploadService.js
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── .env
├── package.json
└── README.md
```

## 🔧 Configuration

### Backend Environment Variables (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/rewear
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Frontend Environment Variables (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## 🎮 Usage

### For Users
1. **Sign Up/Login**: Create an account or log in to your existing profile
2. **Browse Items**: Explore available clothing items in the marketplace
3. **List Items**: Upload your unused clothing with detailed descriptions
4. **Request Swaps**: Initiate swap requests with other users
5. **Earn Points**: Gain points by successful exchanges
6. **Redeem Points**: Use accumulated points to claim items

### For Admins
1. **Access Admin Panel**: Navigate to /admin route
2. **Moderate Content**: Review and approve/reject item listings
3. **Manage Users**: Monitor user activity and handle disputes
4. **Analytics**: View platform statistics and growth metrics

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# Run all tests
npm run test:all
```

## 📊 Features in Detail

### Point System
- Users earn points for successful item exchanges
- Points can be redeemed for items without direct swaps
- Point calculation based on item value and condition
- Transaction history tracking

### Swap Management
- Direct swap requests between users
- Counter-offer functionality
- Swap status tracking (pending, accepted, completed, cancelled)
- Dispute resolution system

### Image Management
- Multi-image upload for items using Cloudinary
- Image compression and optimization
- Gallery view with zoom functionality
- Automatic thumbnail generation

### Search & Filter
- Advanced search by category, size, condition
- Tag-based filtering
- Location-based item discovery
- Price range filtering (point-based)

## 🚀 Deployment

### Backend Deployment (Heroku)
```bash
cd backend
heroku create rewear-backend
git push heroku main
```

### Frontend Deployment (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy build folder to Netlify/Vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: [Your Name]
- **Mentor**: [Mentor Name]
- **Hackathon**: Odoo Hackathon '25

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🎉 Acknowledgments

- MERN stack community for the amazing tools
- Hackathon organizers for the opportunity
- Mentor for guidance and support
- Open source community for inspiration

---

**Built with ❤️ for sustainable fashion and community building** 