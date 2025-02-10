import Books from './Books.jsx';
import PropTypes from 'prop-types';


const Bookmarks = ({ bookmark, readtime }) => {
  return (
    <div className='md:w-1/3 flex flex-col gap-6'>
        <div className='border-2 border-purple-700 rounded-xl bg-purple-300 px-12 py-5'><h1 className='text-purple-700 font-bold text-2xl'>Spent Time Reading : {readtime} </h1></div>
      <div className='bg-slate-300 rounded-xl p-4'><h2>Bookmarks : {bookmark.length}</h2>
      {bookmark.map((book,idx)  => (
        <Books key={idx} books={book} />
      ))}</div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.isRequired
};

export default Bookmarks;
