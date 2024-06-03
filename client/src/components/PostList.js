

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    console.log(token);
    try {
      const response = await axios.get('http://localhost:5000/api/posts', {
        params: { page, limit: 1000 },
        headers: { Authorization: `Bearer ${token}` },
      });
  
      const { posts: newPosts, totalPages } = response.data;
  
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setHasMore(page < totalPages);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };  

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post._id} className="p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      {loading && <div className="text-center mt-4">Loading...</div>}
      {!hasMore && <div className="text-center mt-4">No more posts</div>}
    </div>
  );
};

export default PostList;

