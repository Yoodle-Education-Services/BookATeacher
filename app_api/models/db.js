const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/BookATeacher';
<<<<<<< HEAD
mongoose.connect(dbURL, {useNewURLParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURL}`);
=======
mongoose.connect(dbURI, {useNewURLParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
>>>>>>> d1ff55f0560b73a5553901a4ab791bdec3463207
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
}); 

require('./teachers');