import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import WIP from './pages/WIP'
import About from './pages/About'
import Review from './pages/Review';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn" element={<WIP/>}/>
        <Route path="/labs" element={<WIP/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/donate" element={<WIP/>}/>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>

  )
}

