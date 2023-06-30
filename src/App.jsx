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

import { useEffect, useState, createContext } from 'react';
import { db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

export const AuthContext = createContext({"uid": null,"userData": null});

export default function App() {
  
  const [user, setUser] = useState({"uid": null,"userData": null});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // check if user is already logged in
    const validateUser = async() => {

      const uid = localStorage.getItem("uid")
      if (uid !== null) {
        // cross check with database that this user does in fact exist
        const docInfo = await getDoc(doc(db, "users", uid))
        if (docInfo.exists()) {
          setUser({"uid":uid, "userData":docInfo.data()});
        }
      }
      setIsLoading(false);
    }

    validateUser()

  }, [])

  return (
    <>

    {!isLoading && <AuthContext.Provider value={user}>

      <Nav />

      <Routes>

        <Route path="/" element={<HomePage/>}/>

        <Route path="/learn" element={<LearnPage/>}/>

        <Route path="/learn/:unit_id/:lesson_id" element={<LearnView/>}/>

        <Route path="/review" element={<ReviewPage/>}/>

        <Route path="/about" element={<AboutPage/>}/>

        <Route path='/merch' element={<MerchPage/>}/>

        {(user["uid"] !== null) && <Route path='/profile' element={<ProfilePage/>}/>}

        <Route path='/tou' element={<TermsOfUse/>}/>
        <Route path='/pp' element={<PrivacyPolicy/>}/>
        <Route path='/as' element={<AccessibilityStatement/>}/>

        <Route path='/wip' element={<InProgressPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>

      </Routes>

      <Footer/>

    </AuthContext.Provider>}

    </>

  )
}

const AccessibilityStatement = () => {
  return (
    <div className='max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem] mb-[6.4rem]'>

    <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center md:text-left">Accessibility Statement</div>

    <div className='w-full text-h9 mt-[2.4rem] text-left'>
    We are committed to ensuring that help102 is accessible to all individuals, regardless of their abilities or disabilities. We strive to provide a user-friendly experience and make our content accessible in accordance with relevant accessibility guidelines.
    <br/><br/><br/>

    <strong>1. Standards and Guidelines</strong><br/>
    help102 aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA. These guidelines provide recommendations for making web content more accessible to a wider range of users, including those with visual, auditory, cognitive, or motor disabilities.
    <br/><br/><br/>

    <strong>2. Design and Functionality</strong><br/>
    We have implemented various accessibility features and techniques to enhance the usability of help102. This includes:

    <ul className='list-disc pl-[3.2rem]'>
      <li>Clear and consistent navigation throughout the website.</li>
      <li>Use of descriptive alt text for images, providing textual alternatives for visually impaired users.</li>
      <li>Proper semantic markup and headings to aid screen readers and assistive technologies.</li>
      <li>Keyboard accessibility to ensure easy navigation and interaction without relying solely on a mouse.</li>
      <li>Color contrast considerations for improved readability and legibility.</li>
      <li>Responsive design to provide a consistent experience across different devices and screen sizes.</li>
    </ul>
    <br/><br/><br/>
    
    <strong>Ongoing Improvements</strong><br/>
    We are committed to regularly reviewing and improving the accessibility of help102. We understand that accessibility is an ongoing process, and we strive to address any potential issues promptly.
    <br/><br/><br/>

    <strong>User Feedback</strong><br/>
    We welcome feedback from users regarding the accessibility of help102. If you encounter any difficulties or have suggestions for improvement, please contact me on Discord @warrenwu or through another form of communication. Your input is valuable and will help us enhance the accessibility of our website.
    <br/><br/><br/>

    <strong>Third-Party Content</strong><br/>
    While we aim to ensure accessibility on our own website, we cannot guarantee the accessibility of third-party content or external websites that may be linked from help102. We encourage users to refer to the accessibility policies of those external websites.
    <br/><br/><br/>

    <strong>Accessibility Statement Updates</strong><br/>
    This accessibility statement may be updated periodically as we continue to improve our website's accessibility and adhere to evolving standards and guidelines.
    <br/><br/><br/>

    If you have any questions or need further assistance regarding the accessibility of help102, please do not hesitate to contact us. We are committed to providing an inclusive experience for all users.
    </div>

    </div>
  )
}

const PrivacyPolicy = () => {
  return (
    <div className='max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem] mb-[6.4rem]'>

    <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center md:text-left">Privacy Policy</div>

    <div className='w-full text-h9 mt-[2.4rem] text-left'>

    <strong>1. Information Collection</strong><br/>
    We may collect personal information, such as your name and email address, when you log in to help102. Additionally, we may collect non-personal information, such as your IP address and browser type, for analytical purposes.

    <br/><br/><br/>
    <strong>2. Use of Information</strong><br/>
    We use the collected information to improve the functionality and user experience of help102. Personal information may be used to respond to inquiries, provide support, or send updates and notifications related to help102. We do not sell or share your personal information with third parties, unless required by law in which case there's not much we can do.

    <br/><br/><br/>
    <strong>3. Cookies and Tracking Technologies</strong><br/>
    Help102 may use cookies and similar tracking technologies to enhance your browsing experience. These technologies may collect information about your usage patterns, such as pages visited and time spent on help102. You have the option to disable cookies in your browser settings, although this may affect certain functionalities of the Website.

    <br/><br/><br/>
    <strong>4. Data Security</strong><br/>
    We take reasonable measures to protect the information collected through help102 from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.

    <br/><br/><br/>
    <strong>5. External Links</strong><br/>
    Help102 may contain links to external websites. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of those websites before providing any personal information.

    <br/><br/><br/>
    <strong>6. Changes to the Privacy Policy</strong><br/>
    We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting on help102. By continuing to use help102, you acknowledge and agree to the updated Privacy Policy.

    <br/><br/><br/>
    <strong>7. Contact Information</strong><br/>
    If you have any questions or concerns about this Privacy Policy or the practices of help102, please contact me on Discord @warrenwu.

    <br/><br/><br/>
    By using help102.vercel.app, you signify your acceptance of this Privacy Policy. It is recommended to review this policy periodically to stay informed about how your information is being collected and used.

    </div>

  </div>
  )
}

const TermsOfUse = () => {
  return (
    <div className='max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem] mb-[6.4rem]'>

      <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center md:text-left">Terms Of Use</div>

      <div className='w-full text-h9 mt-[2.4rem] text-left'>
      <strong>1. Acceptance of Terms</strong><br/>
      By accessing and using help102, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please refrain from using the resources we provide.
      <br/><br/><br/>
      <strong>2. User Responsibilities</strong><br/>
      You are responsible for your use of the Website and agree to use it in compliance with applicable laws and regulations. You agree not to engage in any activities that may disrupt or interfere with the proper functioning of help102 or infringe upon the rights of others.
      
      <br/><br/><br/>
      <strong>3. Intellectual Property</strong><br/>
      The content, design, and all materials on help102 are protected by intellectual property rights, including copyrights, trademarks, and other proprietary rights. You agree not to reproduce, modify, distribute, or create derivative works based on the materials found on the Website without obtaining prior written consent (more information on how to contribute in the help102 Github repository).
      <br/><br/><br/>

      <strong>4. Disclaimer of Warranty</strong><br/>
      Help102 and its contents are provided on an "as-is" basis, without any warranties of any kind, whether express or implied. While we strive to provide accurate and up-to-date information, we make no representations or warranties regarding the accuracy, reliability, or completeness of the content on help102.
      <br/><br/><br/>

      <strong>5. Limitation of Liability</strong><br/>
      In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
      <br/><br/><br/>

      <strong>6. External Links</strong><br/>
      Help102 may contain links to third-party websites or resources. We do not endorse or assume any responsibility for the content, products, or services offered by these external websites. Your use of such links is at your own risk. <strong>HOWEVER</strong>, most of the third-party content will be monitored to ensure that it's appropriate and any individual that posts something inappropriate will be handled on our end. 
      <br/><br/><br/>

      <strong>7. Modification of Terms</strong><br/>
      We reserve the right to modify these Terms of Use at any time without prior notice. Any changes will be effective immediately upon posting on this website. It is your responsibility to review these terms periodically to stay informed of any updates.
      <br/><br/><br/>

      <strong>8. Governing Law</strong><br/>
      These Terms of Use shall be governed by and construed in accordance with the laws of Texas A&M in which we operate. Any legal actions or proceedings arising out of or relating to these terms shall be exclusively subject to the jurisdiction of the committees at Texas A&M.
      <br/><br/><br/>

      <strong>9. Severability</strong><br/>
      If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
      <br/><br/><br/>

      By using help102.vercel.app, you acknowledge and agree to these Terms of Use. If you have any questions or concerns, please contact me on Discord @warrenwu.
      </div>

    </div>
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