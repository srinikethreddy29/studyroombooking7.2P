const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path'); // Added for serving index.html

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware to parse JSON
app.use(express.json());

// Serve static files from public folder (if needed)
app.use(express.static('public'));

// Serve the homepage (index.html) when accessing '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

// Bookings route (existing code)
const bookingsRouter = require('./routes/bookings');
app.use('/bookings', bookingsRouter);

// Socket.IO logic
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    socket.on('newBooking', (data) => {
        console.log('New booking received:', data);
        io.emit('bookingUpdate', data); // Broadcast to all clients
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Optional export if needed for tests
module.exports = app;