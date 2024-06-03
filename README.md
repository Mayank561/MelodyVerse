<div>
<h1>MelodyVerse</h1>
<p>MelodyVerse is a social media platform where users can sign up, create posts, and view posts from other users. This project is built using Node.js, Express.js, MongoDB, React.js, and JWT for authentication.</p>

<section>Contents</section>
<div>
  <ul>
    <li><a>Features</a></li>
    <li><a>Installation</a></li>
    <li><a>Configuration</a></li>
    <li><a>Running the Application</a></li>
    <li><a>API Endpoints</a></li>
    <li><a>Technologies Used</a></li>
    <li><a>Project Structure</a></li>
  </ul>
</div>
<div>
<section>Features</section>
<ul>
  <li><a>User Signup</a></li>
  <li><a>User Login</a></li>
  <li><a>Create Posts</a></li>
  <li><a>View Posts with Pagination</a></li>
  <li><a>WT Authentication</a></li>
  </ul>
</div>
<div>
<h3>Installation</h3>
  <ol><li>clone the repository</li></ol>
  <span>git clone:<a href="https://github.com/Mayank561/MelodyVerse.git"/>span>
    <p>cd Backend</p>

    <ol><li> Install dependencies for both backend and frontend: </li></ol>
    #Backend
    cd backend
    npm install

    # Frontend
    cd ../client
    npm install
</div>
<div>
  <h4>Configuration</h4>
  <ol><li>Create a .env file in the backend directory with the follwing contnet:</li></ol>
  MONGO_URI=mongodb+srv://mayankguptaedu:EDjUCL7AHbwBloAP@cluster0.uqavi7z.mongodb.net/?      
  retryWrites=true&w=majority&appName=Cluster0
  PORT=5000
  JWT_SECRET= mayank
</div>
<div>
  <h2>Running the Application </h2>
  <ol><li>Start the backend server:</li></ol>
  cd backend
  npm start
  <ol><li>Start the frontend development server:</li></ol>
  cd ../clinet
  npm start
  <ol><li>Open your brower and navigate to `http://locahost:3000`</li></ol>
</div>
<div>
  <h1>API Endpoints</h1>
  <h2>POST /api/signup </h2>
  <p>Registers a new user with provided username, email, and password. Returns a JWT token upon successful registration.</p>
  Request Body:
  {
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "name": "John Doe",
  "profilePicture": "http://example.com/profile.jpg",
  "termsAccepted": true
}
GET /api/posts
Request Query Parameters:
<ol><li>page (optional, default: 1)</li>
<li>limit (optional, default: 10)</li>
</ol>
Response:

{
  "posts": [
    {
      "_id": "60a6c5b5d6f1b8b1d8e8e8e8",
      "title": "Post Title",
      "content": "This is the content of the post.",
      "user": "60a6c5b5d6f1b8b1d8e8e8e8",
      "date": "2021-05-20T18:30:45.000Z"
    },
    ...
  ],
  "totalPages": 5,
  "currentPage": 1
} 
</div>
<div>
  <h2>Technologies Used</h2>
  <ul>
    <li>
      Node.js and npm
    </li>
    <li>
      Express.js
    </li>
    <li>MongoDB</li>
    <li>React.js</li>
    <li>Axios</li>
    <li>JWT (jsonwebtoken)</li>
    <li>bcryptjs</li>
    <li>Tailwind CSS</li>

    <h3>Project Structure</h3>
    melodyverse/
├── backend/
│   ├── config/
│   │   └── default.json
│   ├── controllers/
│   │   └── postController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── Post.js
│   │   └── User.js
│   ├── routes/
│   │   └── postRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Signup.js
│   │   │   └── PostList.js
│   │   └── App.js
│   └── package.json
└── README.md
</div>
<div>
  <h2>Instructions for Adding Posts</h2>
  <p>The current implementation does not include a UI for creating posts. To add this feature</p>
  <ol><li>Add a new component CreatePost.js in the frontend/src/components/ directory.
</li>
    <li>Implement a form in CreatePost.js that allows users to input the title and content of a post.
</li>
    <li>Use Axios to send a POST request to the /api/posts endpoint, including the JWT token in the headers for authorization.
</li>
    <li>
      Update App.js to include a route for the CreatePost component.
    </li>
    <li>Ensure that only authenticated users can access the create post page by checking for the presence of a JWT token.
</li>
  </ol>
</div>
</div>
