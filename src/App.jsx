import { useState } from 'react';
import './App.css';
import Header from './Header';
import Blog from './Blog';
import Bookmarks from './Bookmarks';

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handler = blogger => {
   {
      setBookmark([...bookmark, blogger]);
    }
  };

  return (
    <>
      <Header />
      <div className='flex justify-between gap-8'>
        <Blog handler={handler} />
        <Bookmarks bookmark={bookmark} />
      </div>
    </>
  );
}

export default App;
