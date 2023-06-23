import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import ReviewPage from './components/ReviewPage';
import AboutPage from './components/AboutPage';
import MerchPage from './components/MerchPage';

export default function App() {
  
  return (
    <>
    <Nav />

    <Routes>

      <Route path="/" element={<HomePage/>}/>

      <Route path="/learn" element={<InProgressPage/>}/>

      <Route path="/learn/:id" element={<InProgressPage/>}/>

      <Route path="/review" element={<InProgressPage/>}/>

      <Route path="/review/:id" element={<InProgressPage/>}/>

      <Route path="/about" element={<InProgressPage/>}/>

      <Route path='/merch' element={<InProgressPage/>}/>

      <Route path='/tou' element={<InProgressPage/>}/>
      <Route path='/pp' element={<InProgressPage/>}/>
      <Route path='/as' element={<InProgressPage/>}/>

      <Route path='*' element={<InProgressPage/>}/>

    </Routes>

    <Footer/>
    </>

  )
}

const ErrorPage = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col text-center px-[1.6rem] md:px-[3.2rem] xl:px-[6.4rem]'>

      <div className="font-bold text-h1 text-neutral-100 flex justify-center text-center">
        Error 404: Page Not Found
      </div>

      <div className='text-h7 text-neutral-200 font-medium'>
        make sure the url is correct
      </div>

    </div>
  )
}

const InProgressPage = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col text-center px-[1.6rem] md:px-[3.2rem] xl:px-[6.4rem]'>

      <div className="font-bold text-h1 text-neutral-100 flex justify-center text-center">
        Oops, this feature hasn't been implemented yet
      </div>

      <div className='text-h7 text-neutral-200 font-medium'>
        I'm a very busy person so please be patient 🙏
      </div>

    </div>
  )
}
