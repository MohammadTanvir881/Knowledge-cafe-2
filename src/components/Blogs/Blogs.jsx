import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleClickRead,handleReadTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="w-2/3 mx-5 my-5 container">
             <h1 className="text-2xl font-bold">Blogs : {blogs.length}</h1>
             <div>
                  {
                      blogs.map(blog=><Blog handleReadTime={handleReadTime} handleClickRead={handleClickRead} blog={blog} key={blog.id}></Blog>)
                  }
             </div>
        </div>
    );
};
Blogs.propTypes={
    handleClickRead:PropTypes.func,
    handleReadTime:PropTypes.func,
}
export default Blogs;