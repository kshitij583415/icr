// PreviewPages.jsx
import React from 'react';
import IntakeForm from "./Page1/Form";
import Form2 from "./Page2/Form2";
import Form3 from "./Page3/Form3";
import Form4 from "./Page4/Form4";
import Form5 from "./Page5/Form5";
import Form6 from "./Page6/Form6";
import Form7 from "./Page7/Form7";
import Page1 from '../family/Page1.js'
import Page2 from '../family/Page2.js';
import Page3 from '../family/Page3.js';
import Page4 from '../family/Page4.js';
import Page5 from '../family/Page5.js';
import Past1 from '../past/Page1.jsx';
import Past2 from '../past/Page2.jsx';
import Past3 from '../past/Page3.jsx';
import Past4 from '../past/Page4.jsx';
import Medical1 from '../medical/Page1/Page1.jsx';
import Medical2 from '../medical/Page2/PatientInformation.jsx';

function PreviewPages({ formData /* Add other necessary props */ }) {
  return (
    <div>
      {/* Render all pages with the data */}
      <IntakeForm formData={formData}  />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

     
      <Form2 formData={formData} /* Add other necessary props */ />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Add other pages as needed */}
      <Form3 formData={formData} />
      <br></br> 
      <br></br>
      <br></br>
      <br></br>
      <Form4 formData={formData} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      <Form5 formData={formData} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Form6 formData={formData} /><br/><br/>
      <Form7 formData={formData} /><br/><br/>
      <br/>
      <Page1 formData={formData} /><br/><br/><br/><br/><br/>
      <Page2 formData={formData} /><br/><br/><br/><br/><br/>
      <Page3 formData={formData} /><br/><br/><br/>
      <Page4 formData={formData} /><br/><br/><br/>
      <Page5 formData={formData} /><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Medical1 formData={formData} />
      <Medical2 formData={formData} /><br/><br/>
      <Past1 formData={formData} />
      <Past2 formData={formData} />
      <Past3 formData={formData} />
    
      <Past4 formData={formData} />
    
      {/* Add a Print button for the entire document */}
      <div style={{textAlign:'center'}}>
      <button onClick={() => window.print()}>Print All Pages</button>
      </div>

      {/* Print media query styles for A4 paper */}
      {/* <style>
        {`
          @media print {
            body {
              width: 21cm;
              height: 29.7cm;
              margin: 30mm;
            }
          }
        `}
      </style> */}
    </div>
  );
}

export default PreviewPages;
