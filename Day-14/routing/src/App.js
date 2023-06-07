import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about'>About</Link> </li>
          <li> <Link to='/error'>Error</Link> </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/postattendee/:mc' element={<About/>} />
          <Route path='/error' element={<Error/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
