import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} className="blog-card-img" />
      <div className="blog-card-content">
        <h2>{post.title}</h2>
        <p className="blog-date">By {post.author} • {post.date}</p>
        <p className="blog-excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="blog-readmore">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
