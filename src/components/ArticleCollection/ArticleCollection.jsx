import React from "react";
import Article from "./Article";
import articleData from "../../data/articleData";
import "./styles.css";

export default function ArticleCollection() {
  return (
    <section>
      <div className="container article__collection">
        <h3>Collection</h3>
        {articleData.map((article) => {
          return (
            <Article
              key={article.id}
              img={article.img}
              title={article.title}
              description={article.description}
            />
          );
        })}
      </div>
    </section>
  );
}
