import { useState } from 'react';
import './App.css';
import Header from './Header';
import Blog from './Blog';
import Bookmarks from './Bookmarks';

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readtime, setreadtime] = useState(0);

  const handler = blogger => {
   {
      setBookmark([...bookmark, blogger]);
    }
  };

  const reader = (time, id) => {
    setreadtime(readtime + time) ;
    const remains = bookmark.filter(bookmark => bookmark.id!=id);
    setBookmark(remains);
  }

  return (
    <>
      <Header />
      <div className='flex justify-between gap-8'>
        <Blog handler={handler} reader={reader} />
        <Bookmarks bookmark={bookmark} readtime={readtime}/>
      </div>
    </>
  );
}

export default App;
