# Node.js Express Boilerplate

A structured and scalable **Node.js Express Boilerplate** with best practices for linting, testing, and modular development.

## Features

- **Express.js**: Fast and minimalist web framework.
- **ESLint & Prettier**: Ensures clean and consistent code.
- **Jest**: Setup for unit and integration testing.
- **Dotenv**: Manage environment variables.
- **MVC Structure**: Clean separation of concerns.
- **Error Handling**: Centralized error handling middleware.
- **Socket.IO (Optional)**: WebSocket integration for real-time features.
- **MongoDB (Optional)**: Mongoose integration for database operations.
- **Docker (Optional)**: Easy containerization and deployment.

## Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Installation

Clone the repository:

```sh
git clone https://github.com/D-FOG/nodejs-express-boilerplate.git
cd nodejs-express-boilerplate
```

Install dependencies:

```sh
npm install  # or yarn install
```

### Environment Variables

Create a `.env` file and configure the necessary variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydatabase
JWT_SECRET=your-secret-key
```

### Running the Server

Start the development server:

```sh
npm run dev
```

Run in production mode:

```sh
npm start
```

## Project Structure

```
📂 nodejs-express-boilerplate
├── 📂 src
│   ├── 📂 controllers  # Business logic
│   ├── 📂 models       # Mongoose schemas (if using MongoDB)
│   ├── 📂 routes       # Express routes
│   ├── 📂 middlewares  # Custom middleware
│   ├── 📂 utils        # Helper functions
│   ├── 📂 sockets      # Socket.IO events (you may add, if applicable)
│   ├── server.js      # Server entry point
│   └── app.js         # Express app instance
├── 📂 __tests__        # Unit & integration tests
├── .eslintrc.json     # ESLint configuration (was removed from boilerplate, you can add)
├── eslint.config.mjs  # Newer ESLint configuration
├── .prettierrc        # Prettier formatting rules
├── package.json       # Dependencies & scripts
├── README.md          # Documentation
└── .gitignore         # Ignored files
```

## Linting & Formatting

Ensure your code follows best practices:

```sh
npm run lint   # Check for lint errors
npm run lint:fix  # Auto-fix lint issues
```

## Testing

Run Jest tests:

```sh
npm test
```

## API Endpoints

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | /api/v1/health | Server health check |
| POST   | /api/v1/users  | Create a user       |
| GET    | /api/v1/users  | Fetch all users     |

## Deployment

### Using Docker

Build and run the container:

```sh
docker build -t myapp .
docker run -p 5000:5000 myapp
```

### Deploying to Production

- Use **PM2** for process management:
  ```sh
  npm install -g pm2
  pm2 start src/server.js --name myapp
  ```
- Configure **Nginx** or **Apache** as a reverse proxy.

## Contributing

Pull requests are welcome! Please follow the coding style guidelines and submit changes via a new branch.

## Changes
You can use the boilerplate structure in your backend projects and make changes anymhere depending on your project usage.

## License

This project is open-source under the **MIT License**.

---

🚀 Happy coding!
