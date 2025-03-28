# File Sharing Backend

This is a simple Node.js backend for uploading and sharing files using Cloudinary and MongoDB.

## Features
- User authentication (Signup & Login)
- Secure file uploads
- Cloud storage via Cloudinary
- File sharing with unique links
- Retrieve all uploaded files

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Cloudinary
- Multer (for handling file uploads)
- JWT (for authentication)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd file-share-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file and add:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the Server
```bash
npm start
```

### 5. API Endpoints
#### User Authentication
##### Signup
```http
POST /api/auth/signup
```
- **Body:** JSON (username, email, password)
- **Response:** JSON with user details and token

##### Login
```http
POST /api/auth/login
```
- **Body:** JSON (email, password)
- **Response:** JSON with user details and token

#### File Upload
```http
POST /api/files/upload
```
- **Body:** Multipart form-data (file)
- **Response:** JSON with file URL and public ID

#### Get All Files
```http
GET /api/files
```
- **Response:** JSON with all uploaded files

#### Get a File by ID
```http
GET /api/files/:id
```
- **Response:** JSON with file details

## To-Do
- [ ] Implement file expiration
- [ ] Track file downloads
- [ ] Add user roles for access control

---

🚀 Happy coding! Feel free to update this README as needed.

