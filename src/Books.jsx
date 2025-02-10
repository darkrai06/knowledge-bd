import PropTypes from 'prop-types';

const Books = ({ books }) => {
  return (
    <div className='border-2 rounded-lg px-4 bg-white m-2'>
      <h2 className='text-black text-xl font-bold'>{books?.title}</h2>
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
