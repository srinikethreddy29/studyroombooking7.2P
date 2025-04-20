Study Room Booking System – SIT725 Task 6.2D

This project is a part of my coursework for SIT725 – Applied Software Engineering

It demonstrates the use of automated testing using Jest and Supertest in a Node.js web application.

Project Overview:

The Study Room Booking System is a lightweight and practical web app that allows university students to view room availability and book study rooms efficiently.

Tech Stack:

- Node.js + Express.js
- MongoDB (for future implementation)
- HTML, CSS, Materialize
- JavaScript (Vanilla)
- Jest + Supertest (for testing)

✅ Task 6.2D - What Was Done

For this task:
- Implemented a `/bookings` route in `routes/bookings.js`
- Connected it to a controller in `controllers/bookingController.js`
- Wrote and passed a test using Jest + Supertest in `test/bookings.test.js`


✅ Task 7.2P – What Was Done

For this task:
- Integrated Socket.IO into the Study Room Booking project.
- Set up a real-time communication system between the server and clients.
- When a user makes a booking, the server broadcasts the booking event to all connected clients.
- Updated the server (`app.js`) and client (`index.html`) to support live updates without refreshing the page.
- Tested socket functionality by running multiple browser tabs and verifying real-time booking updates.