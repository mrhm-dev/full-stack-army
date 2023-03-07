require('dotenv').config();

const http = require('http');
const app = require('./app/app');

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
// console.log(`PORT: ${PORT}`);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});