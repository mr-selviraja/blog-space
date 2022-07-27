import React from "react";
import "./styles.css";

export default function Post() {
  return (
    <section>
      <div className="container">
        <h3 className="section-heading">Wanna Blog</h3>
        <form action="#" className="postform">
          <input
            name="post-title"
            type="text"
            placeholder="Title of the blog post"
          />
          <textarea
            name="post-description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description of the blog post"></textarea>
          <button>Send Post</button>
          {/* Need to add a drop down to select tags  */}
        </form>
      </div>
    </section>
  );
}
