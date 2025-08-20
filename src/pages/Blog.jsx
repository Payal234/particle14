import React, { useState } from "react";

// Sample blog data
const initialBlogs = [
  {
    id: 1,
    title: "My First Blog",
    author: "Alice",
    date: "2025-08-19",
    category: "Tech",
    status: "approved",
  },
  {
    id: 2,
    title: "Pending Blog Example",
    author: "Bob",
    date: "2025-08-18",
    category: "Lifestyle",
    status: "pending",
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
  });

  const currentUser = "Bob"; // Simulate logged-in user

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      title: form.title,
      author: currentUser,
      date: new Date().toISOString().split("T")[0],
      category: form.category,
      status: "pending",
    };
    setBlogs([newBlog, ...blogs]);
    setForm({ title: "", category: "", content: "" });
    alert("Blog submitted! Waiting for admin approval.");
  };

  const visibleBlogs = blogs.filter(
    (blog) => blog.status === "approved" || blog.author === currentUser
  );

  return (
    <div className="relative min-h-screen bg-black text-gray-300 py-12 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white relative z-10">
        Blog Page
      </h1>

      {/* Blog Submission Form */}
      <div className="relative z-10 max-w-3xl mx-auto bg-gray-900 bg-opacity-80 p-6 rounded-2xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Submit a Blog</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="border border-gray-700 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="border border-gray-700 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your blog here..."
            rows={5}
            className="border border-gray-700 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Blog
          </button>
        </form>
      </div>

      {/* Blog List */}
      <div className="relative z-10 max-w-5xl mx-auto grid gap-6">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className={`p-6 rounded-2xl shadow-md bg-gray-900 border-l-4 ${
              blog.status === "approved" ? "border-green-500" : "border-yellow-500"
            }`}
          >
            <h3 className="text-xl font-bold mb-2 text-white">{blog.title}</h3>
            <p className="text-gray-400 text-sm mb-1">
              By {blog.author} | {blog.date} | Category: {blog.category}
            </p>
            <p className={`text-gray-300 ${blog.status === "pending" ? "italic" : ""}`}>
              {blog.status === "pending"
                ? "This blog is pending admin approval."
                : "Published!"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
