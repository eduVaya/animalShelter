import express from 'express';
const app = express();

app.get('/', (request, response) => response.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));