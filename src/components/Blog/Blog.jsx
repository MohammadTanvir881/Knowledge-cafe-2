import PropTypes from 'prop-types'
const Blog = ({blog,handleClickRead,handleReadTime}) => {
    // console.log(blog)
    const {author , author_img,id,cover, hashtag,posted_date,reading_time,title}=blog;
    return (
        <div className=" space-y-4 my-10 bg-stone-100 p-5 rounded-xl">
             <img className="w-full" src={cover} alt="" />
             <div className="flex justify-between">
                 <div className="flex gap-5">
                       <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
                       <div>
                            <h1 className="text-2xl font-bold">{author}</h1>
                            <p>{posted_date}</p>
                       </div>
                 </div>
                 <div className="flex gap-2 items-center">
                     <p>{reading_time} min</p>
                     <button onClick={()=>handleClickRead(blog)} className="bg-green-500 text-white rounded-sm px-4 py-1">Read</button>
                 </div>
             </div>
             <div className=''>
                 <h2 className="text-3xl font-bold mb-3">{title}</h2>
                 {
                    hashtag.map((hash,idx)=><span  className='mr-3 underline text-lg font-medium text-stone-600' key={idx}><a href="#">{hash}</a></span>)
                 }
                
             </div>
             <button onClick={()=>{handleReadTime(reading_time,id)}} className='bg-green-500 text-white font-semibold px-5 py-2 rounded-lg'>MArk As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object,
    handleClickRead:PropTypes.func,
    handleReadTime:PropTypes.func,
}

export default Blog;