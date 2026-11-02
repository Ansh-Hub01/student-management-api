# Student Management API

A RESTful Student Management API built using Node.js, Express.js, MongoDB, and Mongoose.

## Features
- Create a new student
- Get all students
- Get student by ID
- Update student details
- Delete student records
- MongoDB database integration
- REST API architecture

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- Postman

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ansh-Hub01/student-management-api.git
```

2. Navigate to the project folder:
```bash
cd student-management-api
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Start the server:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/students | Create student |
| GET | /api/students | Get all students |
| GET | /api/students/:id | Get student by ID |
| PUT | /api/students/:id | Update student |
| DELETE | /api/students/:id | Delete student |

## Testing
All API endpoints were tested using Postman.

## Author
**Ansh Nagpal**

GitHub: [Ansh-Hub01](https://github.com/Ansh-Hub01)
