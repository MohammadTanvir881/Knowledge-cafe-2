import { useState } from "react";
import "./App.css";
// import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
// import PropTypes from "prop-types";

function App() {
  const [read, setRead] = useState([]);
  const [readTime,setReadTime]=useState(0);
  const handleClickRead = (blog) => {
    // console.log(blog);
    const newClick = [...read, blog];
    setRead(newClick);
  };
  const handleReadTime=(time,id)=>{
    const newReatTime = readTime+time;
    setReadTime(newReatTime)
    const remainingBookmark = read.filter(bookmark=> bookmark.id !== id);
    setRead(remainingBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className="container mx-auto">
        <div className="flex">
          <Blogs handleClickRead={handleClickRead} handleReadTime={handleReadTime}></Blogs>
          <Bookmarks bookmarks={read} time={readTime}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
