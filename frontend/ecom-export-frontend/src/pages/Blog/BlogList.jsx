import React, { useState } from "react";
import { blogData } from "./blogData";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SEO from "./SEO";
import "./BlogList.css";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
    <Header />
    <div className="blog-container">
      <SEO
        title="Blog & News | TickHive"
        description="Read the latest articles, tips, and news updates from TickHive."
      />
      
      <h1 className="blog-title">Blog & News</h1>
      <div className="blog-grid">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(blogData.length / postsPerPage)}
        onPageChange={setCurrentPage}
      />
      
    </div>
     <Footer />
    </>
  );
 
};

export default BlogList;
