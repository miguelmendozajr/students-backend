const express = require('express');
const customerRoutes = require('./src/routes/customer');

const app = express();
app.use(express.json());

app.use('/api/students', customerRoutes);

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
