# File Sharing Backend

This is a simple Node.js backend for uploading and sharing files using Cloudinary.

## Features
- User file uploads
- Cloud storage via Cloudinary
- File sharing with unique links
- Secure access controls

## Tech Stack
- Node.js
- Express.js
- Cloudinary
- Multer (for handling file uploads)

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
PORT=5000
```

### 4. Run the Server
```bash
npm start
```

### 5. API Endpoints
#### Upload a File
```http
POST /upload
```
- **Body:** Multipart form-data (file)
- **Response:** JSON with file URL

#### Get a File by ID
```http
GET /file/:id
```
- **Response:** JSON with file details

## To-Do
- [ ] Add authentication
- [ ] Implement file expiration
- [ ] Track file downloads

---

🚀 Happy coding! Feel free to update this README as needed.

