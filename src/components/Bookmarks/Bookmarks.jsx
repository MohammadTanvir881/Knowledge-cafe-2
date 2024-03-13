import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks ,time }) => {
//   console.log(bookmarks);
  return (
    <div className="w-1/3 mx-1 my-5 ">
      <div className="bg-green-500 text-white px-5 py-4 rounded-xl mb-4">
        <h1 className="text-xl font-medium">Spent time on read : {time} min</h1>
      </div>

      <div className="bg-stone-100 p-4 rounded-xl">
        <h1 className="text-xl font-medium">Bookmarks: {bookmarks.length}</h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes -
  {
    bookmarks: PropTypes.object,
    time:PropTypes.number,
  };

export default Bookmarks;
