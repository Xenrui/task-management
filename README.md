# Task Manager

A full-stack task management application built with React, TypeScript, Express, and MongoDB. This project was created as a learning exercise to understand modern web development practices.

![Task Manager](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)

## Features

-  **Create, Read, Update, Delete (CRUD)** tasks
-  **Mark tasks as complete/incomplete**
-  **Search functionality** - Filter tasks by title or description
-  **Filter by status** - View all, active, or completed tasks
-  **Set deadlines** - Assign due dates to tasks
-  **Task statistics** - View total, active, and completed task counts

## Tech Stack

### Frontend
- **React 18.x** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Fetch API** - HTTP requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **TypeScript** - Type safety

## 📁 Project Structure

```
task-manager/
├── server/
│   ├── src/
│   │   ├── models/
│   │   │   └── Task.ts          # Task schema definition
│   │   ├── routes/
│   │   │   └── tasks.ts         # Task routes
│   │   └── server.ts            # Express app setup
│   ├── .env                      # Environment variables
│   ├── tsconfig.json             # TypeScript config
│   └── package.json
│
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── Header.tsx        # App header
    │   │   ├── ErrorMessage.tsx  # Error display
    │   │   ├── Navigation.tsx    # Sidebar for navigation (Not Finished)
    │   │   ├── Layout.tsx        # Layout for sidebar and main content
    |   |   ├── tasks/
    │   │   |   ├── SearchBar.tsx     # Search and filter
    │   │   |   ├── TaskForm.tsx      # Create/edit form
    │   │   |   ├── TaskItem.tsx      # Individual task card
    │   │   |   ├── TaskList.tsx      # List of tasks
    │   │   |   └── TaskStats.tsx     # Statistics display
    │   ├── config/
    │   │   └── navigation.ts     # Routes
    │   ├── services/
    │   │   └── api.ts            # API service layer
    │   ├── types/
    │   │   └── Task.ts           # TypeScript interfaces
    │   │   └── Navigation.ts     # TypeScript interfaces
    │   ├── pages/
    │   │   └── Task.ts           # Task page main component
    │   │   └── Schedule.ts       # (Not Finished)
    │   ├── App.tsx               # Main component
    │   └── index.tsx             # Entry point
    ├── tsconfig.json
    └── package.json
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (v9.x or higher) - Comes with Node.js
- **MongoDB** - Choose one option:
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Free cloud database - Recommended)
  - [MongoDB Community Edition](https://www.mongodb.com/try/download/community) (Local installation)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Xenrui/task-management.git
cd task-manager
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Install required packages
npm install express mongoose cors dotenv
npm install -D typescript @types/express @types/node @types/cors ts-node nodemon
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd client

# Create React app with TypeScript (if not already created)
npx create-react-app . --template typescript

# Install dependencies
npm install

# Install additional packages
npm install lucide-react
```

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `backend` directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/taskmanager
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager

# Server Port
PORT=5000

# Node Environment
NODE_ENV=development
```

### Frontend Configuration

Update the API URL in `frontend/src/services/api.ts`:

```typescript
const API_URL = 'http://localhost:5000/api/tasks';
```

## 🏃 Running the Application

### Start Backend Server

```bash
# From backend directory
cd server

# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
# From frontend directory (in a new terminal)
cd client

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Tasks

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/tasks` | Get all tasks | - |
| GET | `/api/tasks/:id` | Get task by ID | - |
| POST | `/api/tasks` | Create new task | `{ title, description?, deadline? }` |
| PUT | `/api/tasks/:id` | Update task | `{ title?, description?, completed?, deadline? }` |
| DELETE | `/api/tasks/:id` | Delete task | - |

### Example Requests

**Create Task:**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "deadline": "2024-12-31"
  }'
```

**Get All Tasks:**
```bash
curl http://localhost:5000/api/tasks
```

**Update Task:**
```bash
curl -X PUT http://localhost:5000/api/tasks/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{ "completed": true }'
```

**Delete Task:**
```bash
curl -X DELETE http://localhost:5000/api/tasks/507f1f77bcf86cd799439011
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Happy Coding! 🎉**

If you found this project helpful, please give it a ⭐️!
