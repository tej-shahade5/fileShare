import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONDOB_URL = `mongodb+srv://tejasshahade5:code%402803@cluster0.7sxfuki.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONDOB_URL, {useNewUrlParser:true});
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;