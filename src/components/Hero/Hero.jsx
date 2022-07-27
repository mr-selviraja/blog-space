import React from "react";
import heroImg from "../../images/logo.svg";
import "./styles.css";

export default function Hero() {
  return (
    <main>
      <div className="hero container">
        <img src={heroImg} alt="blog space logo" />
        <h2>Jus Blogging..!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          repellat. Deleniti corporis neque accusamus quis. Lorem ipsum dolor
          sit amet
        </p>
      </div>
    </main>
  );
}
