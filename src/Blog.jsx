import { useEffect, useState } from 'react';
import Blogger from './Blogger';

const Blog = ({ handler }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='md:w-2/3 space-y-6'>
      {blogs.map(blogger => (
        <Blogger key={blogger.id} blogger={blogger} handler={handler} />
      ))}
    </div>
  );
};

export default Blog;
