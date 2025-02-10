import PropTypes from 'prop-types';
import { CiBookmarkCheck } from 'react-icons/ci';

const Blogger = ({ blogger, handler }) => {
  const { cover_pic, title, author, author_img, posted_date, reading_time, hashtags } = blogger;

  return (
    <div className='border-2 border-black rounded-xl p-6 flex flex-col justify-between items-start gap-4'>
      <img className='rounded-lg' src={cover_pic} alt={title} />
      <div className='flex justify-between gap-[24vw]'>
        <div className='flex gap-2'>
          <img className='w-[60px] h-[60px] rounded-[50%]' src={author_img} alt={author} />
          <div>
            <h3 className='text-xl font-bold'>{author}</h3>
            <h4 className='text-xl text-gray-600'>{posted_date}</h4>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <h2 className='text-2xl font-bold'>{reading_time} min read</h2>
          <button className='font-extrabold' onClick={() => handler(blogger)}>
            <CiBookmarkCheck />
          </button>
        </div>
      </div>
      <p className='flex'>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href=''>#{hash}</a>{' '}
          </span>
        ))}
      </p>
      <u>
        <a href='' className='text-blue-600'>
          Mark as Read
        </a>
      </u>
      <h2 className='text-4xl font-extrabold'>{title}</h2>
    </div>
  );
};

Blogger.propTypes = {
  blogger: PropTypes.shape({
    cover_pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    posted_date: PropTypes.string.isRequired,
    reading_time: PropTypes.number.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default Blogger;
