const Post = require('../models/Post');

const getPosts = async (req, res) => {
  const { page = 1, limit = 1000 } = req.query;

  try {
    const posts = await Post.find()
      .limit(parseInt(limit)) 
      // Limit the number of posts per page
      .skip((parseInt(page) - 1) * parseInt(limit)) 
      // Skip posts based on the page number
      .exec();

    // Count total number of documents (posts) in the database
    const count = await Post.countDocuments();

    // Return posts along with pagination metadata
    res.json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


module.exports = { getPosts };
