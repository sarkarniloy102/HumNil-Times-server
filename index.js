const express = require('express');
const cors = require('cors');
const blogs = require('./api/blogsData.json');  // adjust path if needed
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Blog server is running!");
});

app.get('/blogs', (req, res) => {
  res.json(blogs);
});

app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.filter(b => b.id === id);
  res.json(blog);
});

// 👇 export as Vercel function
module.exports = app;
