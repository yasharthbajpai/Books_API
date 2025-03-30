# Book API

A RESTful API for managing books with user authentication using Express.js, MongoDB, and JWT.

## Features

- User authentication (register, login, logout)
- JWT-based authentication with token storage
- Book management (CRUD operations)
- Advanced filtering and search functionality
- Sorting capabilities by price and rating
- Pagination for handling large datasets
- MongoDB database integration
- Modular code structure

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Cors

## Project Structure

```
├── schemas/            # MongoDB schema models
├── src/
│   ├── config/         # Configuration settings
│   ├── controllers/    # Route controllers
│   ├── db/             # Database connection
│   ├── middleware/     # Express middleware
│   ├── routes/         # API routes
│   └── server.js       # Server entry point
├── frontend/           # React frontend application
├── .env                # Environment variables (create from .env.example)
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/express-book-api.git
   cd express-book-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB connection URI and secret key

### Running the Application

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication

- **Register a User**
  - POST `/register`
  - Body: `{ "name": "string", "email": "string", "password": "string" }`

- **Login**
  - POST `/login`
  - Body: `{ "email": "string", "password": "string" }`
  - Returns: JWT token

- **Logout**
  - POST `/logout`
  - Headers: `Authorization: Bearer <token>`

### Books

All book endpoints require authentication (JWT token in Authorization header)

- **Create a Book**
  - POST `/createbook`
  - Body: `{ "title": "string", "author": "string", "category": "string", "price": number, "rating": number, "publishedDate": "Date" }`

- **Get All Books**
  - GET `/getbooks`
  - Query params:
    - `page`: Page number (default: 1)
    - `limit`: Items per page (default: 10)
    - `sortBy`: Field to sort by ('price' or 'rating')
    - `order`: Sort order ('asc' or 'desc')
  - Returns: Books array with pagination metadata

- **Get Book by ID**
  - GET `/getbook/:id`

- **Update Book**
  - PATCH `/updatebook/:id`
  - Body: `{ "title": "string", ... }` (fields to update)

- **Delete Book**
  - DELETE `/deletebook/:id`
  
- **Filter Books**
  - GET `/filterbooks`
  - Query params:
    - `author`: Filter by author name
    - `category`: Filter by category
    - `minRating`: Filter by minimum rating
  - Returns: Filtered books array

- **Search Books**
  - GET `/searchbooks`
  - Query params:
    - `title`: Search term for book title (partial match)
  - Returns: Books matching the search term

### Health Check

- **Server Health**
  - GET `/health`

## Frontend Application

The project includes a complete frontend application built with React. For details, see the [frontend README](./frontend/README.md).

Key frontend features:
- Mobile app-like UI with dark violet theme
- Authentication flows (login/register)
- Book browsing with sorting and filtering
- Search functionality
- Responsive design

To run the frontend:
```bash
cd frontend
npm install
npm run dev
```

## License

[ISC](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 