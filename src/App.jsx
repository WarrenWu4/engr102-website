import './App.css';;
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import WIP from './pages/WIP';
import About from './pages/About';
import Review from './pages/Review';
import Learn from './pages/Learn';


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn" element={<Learn/>}/>
        <Route path="/learn/:id" element={<WIP/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/review/:id" element={<WIP/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/merch' element={<WIP/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>

  )
}

