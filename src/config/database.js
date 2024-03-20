const mongoose = require('mongoose');
let User;

const connectDatabase = async () => {
    try {
        if (!User) {
            User = mongoose.model('login/user', require('../model/userModel').schema);
        }

        await mongoose.connect('mongodb+srv://sepulvedagiraldocamila:IAw9xmtt7wXcTtIL@db-1.idpnodb.mongodb.net/')
            .then(() => console.log('MongoDB Connected'))
            .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {

        await User.deleteMany();
        const userData = [
            {
                userId: 1,
                name: 'Angel',
                email: 'angel@gmail.com',
                password: 'Angel123'
            },
            {
                userId: 2,
                name: 'Mariana',
                email: 'mariana@gmail.com',
                password: 'Mariana123'
            }
        ];

        await User.insertMany(userData);
        console.log('Dara successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;