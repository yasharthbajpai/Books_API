import mongoose from 'mongoose';

const connectDatabase = async (mongoUrl) => {
    try {
        await mongoose.connect(mongoUrl, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDatabase; 