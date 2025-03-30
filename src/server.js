import express from 'express';
import cors from 'cors';
import terminalLink from 'terminal-link';
import dotenv from 'dotenv';
import connectDatabase from './db/connection.js';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

// Load environment variables
dotenv.config();

// Config
const config = {
    port: process.env.PORT || 4000,
    mongoUrl: process.env.MONGO,
    jwtSecret: process.env.SECRET,
    tokenExpiry: '1h'
};

// Initialize Express app
const app = express();

// Connect to database
connectDatabase(config.mongoUrl);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', authRoutes);
app.use('/', bookRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
});

// Start server
const port = config.port;
app.listen(port, () => {
    console.clear(); 
    const link = terminalLink('Click here', `http://localhost:${port}`); 
    console.log('========================================');
    console.log(`Server is running on port ${port}`);
    console.log(`To connect to the server, use: ${link}`);
    console.log('========================================\n');
});

export { config };
export default app; 