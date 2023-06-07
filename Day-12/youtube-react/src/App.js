import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import NotFound from './NotFound';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/video/:videoId' element={<VideoPlayer/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
