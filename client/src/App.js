// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import IntakeForm from './components/basic/Page1/Form.jsx';
import Form2 from './components/basic/Page2/Form2.jsx'
import Form3 from './components/basic/Page3/Form3.jsx'
import Form4 from './components/basic/Page4/Form4.jsx'
import Form5 from './components/basic/Page5/Form5.jsx'
import Form6 from './components/basic/Page6/Form6.jsx'
import Form7 from './components/basic/Page7/Form7.jsx'
import Page1 from './components/family/Page1.js'
import Page2 from './components/family/Page2.js'
import Page3 from './components/family/Page3.js'
import Page4 from './components/family/Page4.js'
import Page5 from './components/family/Page5.js'
import Past1 from './components/past/Page1.jsx'
import Past2 from './components/past/Page2.jsx'
import Past3 from './components/past/Page3.jsx'
import Past4 from './components/past/Page4.jsx'
import Medical1 from './components/medical/Page1/Page1.jsx'

import Medical2 from './components/medical/Page2/PatientInformation.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'






import './App.css'



const App = () => {
  return (
    <>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/basic/form1" element={<>
          <div className="sticky-home">
            <Home />
          </div>
          <IntakeForm />
        </>} />
        <Route exact path='/basic/form2' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Form2 />
        </>} />
        <Route exact path='/basic/form3' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Form3 />
        </>} />
        <Route exact path='/basic/form4' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Form4 />
        </>} />
        <Route exact path='/basic/form5' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Form5 />
        </>} />
        <Route exact path='/basic/form6' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Form6 />
        </>} />
        <Route exact path='/basic/form7' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Form7 />
        </>} />
        <Route exact path='/family/page1' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Page1 />
        </>} />
        <Route exact path='/family/page2' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Page2 />
        </>} />
        <Route exact path='/family/page3' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Page3 />
        </>} />
        <Route exact path='/family/page4' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Page4 />
        </>} />
        <Route exact path='/family/page5' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Page5 />
        </>} />
        <Route exact path='/past/page1' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Past1 />
        </>} />
        <Route exact path='/past/page2' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Past2 />
        </>} />
        <Route exact path='/past/page3' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Past3 />
        </>} />
        <Route exact path='/past/page4' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Past4 />
        </>} />
        <Route exact path='/medical/page1' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Medical1 />
        </>} />
        <Route exact path='/medical/page2' element={
        <>
        <div className="sticky-home">
            <Home />
          </div>
          <Medical2 />
        </>} />
        {/* <Route exact path='/medical/page3' element={<Medical3 />} />
        <Route exact path='/medical/page4' element={<Medical4 />} /> */}




      </Routes>
    </>

  );
};

export default App;
