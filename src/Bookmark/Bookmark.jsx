import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    // console.log(bookmark)
    // console.log(bookmark)
    const {title}=bookmark;
    return (
        <div >
              <div>
                
                 <div className="bg-white font-semibold  text-2xl py-5 px-5 my-5 rounded-lg">
                     <h1>{title}</h1>
                 </div>
              </div>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object,
}

export default Bookmark;