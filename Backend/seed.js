const mongoose = require('mongoose');
const Post = require('./models/Post');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

const seedPosts = async () => {
  await connectDB();
  const posts = [];
  for (let i = 1; i <= 1000; i++) {
    posts.push({
      title: `Post ${i}`,
      content: `This is the content for post number ${i}.`,
    });
  }

  try {
    await Post.deleteMany();
    await Post.insertMany(posts);
    console.log('Database seeded with initial posts!');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error.message);
    process.exit(1);
  }
};

seedPosts();
