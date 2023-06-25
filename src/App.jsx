import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import ReviewPage from './components/ReviewPage';
import AboutPage from './components/AboutPage';
import MerchPage from './components/MerchPage';
import ProfilePage from './components/ProfilePage';

import { LearnView } from "./components/LearnPage";

export default function App() {
  
  return (
    <>
    <Nav />

    <Routes>

      <Route path="/" element={<HomePage/>}/>

      <Route path="/learn" element={<LearnPage/>}/>

      <Route path="/learn/:unit_id/:lesson_id" element={<LearnView/>}/>

      <Route path="/review" element={<ReviewPage/>}/>

      <Route path="/review/:review_id" element={<InProgressPage/>}/>

      <Route path="/about" element={<AboutPage/>}/>

      <Route path='/merch' element={<InProgressPage/>}/>

      <Route path='/profile/:uid' element={<ProfilePage/>}/>

      <Route path='/tou' element={<InProgressPage/>}/>
      <Route path='/pp' element={<InProgressPage/>}/>
      <Route path='/as' element={<InProgressPage/>}/>

      <Route path='/wip' element={<InProgressPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>

    <Footer/>
    </>

  )
}

const ErrorPage = () => {
  return (
    <div className='max-w-[128rem] w-full h-full flex justify-center items-center flex-col text-center px-[1.6rem] sm:px-[6.4rem] lg:px-[12.8rem]'>

      <div className="font-bold text-h1 text-neutral-100 flex justify-center text-center mt-[6.4rem]">
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
    <div className='max-w-[128rem] w-full h-full flex justify-center items-center flex-col text-center px-[1.6rem] sm:px-[6.4rem] lg:px-[12.8rem]'>

      <div className="font-bold text-h1 text-neutral-100 flex justify-center text-center mt-[6.4rem]">
        Oops, this feature hasn't been implemented yet
      </div>

      <div className='text-h7 text-neutral-200 font-medium  mb-[6.4rem] md:mb-[25.6rem]'>
        I'm a very busy person so please be patient 🙏
      </div>

    </div>
  )
}