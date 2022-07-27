import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ArticleCollection from "./components/ArticleCollection/ArticleCollection";
import Separator from "./components/Separator/Separator";
import PostForm from "./components/PostForm/PostForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Separator />
      <ArticleCollection />
      <Separator />
      <PostForm />
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
