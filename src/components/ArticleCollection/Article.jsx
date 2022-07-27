import React from "react";
import "./styles.css";

export default function Article() {
  return (
    <article>
      <div className="article">
        <img src="https://picsum.photos/200" alt="article picture" />
        <div className="article__description">
          <div className="article__description--content">
            <h4>Article Title Random One</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              maxime eveniet vel animi nostrum eum inventore! Officia expedita
              esse reprehenderit recusandae ex! Iure, quia soluta.{" "}
              <a href="#">Read more...</a>
            </p>
          </div>
          <div className="article__description--detail">
            <div className="article__description--detail__tags">
              {/* Pass these as items from a list and only limit the user to mention 3 tags for each post  */}
              <p>Sports</p>
              <p>Nature</p>
              <p>Technology</p>
            </div>
            <div className="article__description--detail__date">
              {new Date().toDateString("en-US").replace(" ", ",")}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
