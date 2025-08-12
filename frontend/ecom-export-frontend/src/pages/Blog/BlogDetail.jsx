import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";
import SEO from "./SEO";
import "./BlogDetail.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  return (
    <>
      
      <Header />

      
      <div className="blog-detail">
        <SEO title={post.metaTitle} description={post.metaDescription} />
        <img src={post.image} alt={post.title} className="blog-detail-img" />
        <h1>{post.title}</h1>
        <p className="blog-date">
          By {post.author} • {post.date}
        </p>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

     
      <Footer />
    </>
  );
};

export default BlogDetail;
