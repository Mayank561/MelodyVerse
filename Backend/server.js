const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./config/db');
const authRoutes = require("./routes/auth");
const PostRoutes = require("./routes/posts");
// const authMiddleware = require('./middleware/authMiddleware')



const app = express();

connectDb();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', PostRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`));