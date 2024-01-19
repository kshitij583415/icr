// import React from 'react';
// // import './Page.css'
// import { useNavigate } from 'react-router-dom';
// import { useState,useEffect} from 'react';


// const Page2 = () => {
//   const [causativeFactors, setCausativeFactors] = useState('');
//   const [experienceOfTolerance, setExperienceOfTolerance] = useState('');
//   const [behavioralChanges, setBehavioralChanges] = useState({
//     violent: false,
//     moreTalkative: false,
//     moreFunny: false,
//     angry: false,
//     depressed: false,
//     sleeping: false,
//     grandiosity: false,
//   });
//   const [childhoodHistory, setChildhoodHistory] = useState('');
//   const [situationsBefore15, setSituationsBefore15] = useState({
//     poverty: '',
//     parental_loss: '',
//     marital_affair: '',
//     parenting: '',
//     violence: '',
//     sexual_abuse: '',
//     none: '',
//     other: '',
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load data from localStorage on component mount
//     const storedData = JSON.parse(localStorage.getItem('familyDataPage2')) || {};
//     console.log('Stored Data:', storedData);

//     // Set state based on stored data
//     setCausativeFactors(storedData.causativeFactors || '');
//     setExperienceOfTolerance(storedData.experienceOfTolerance || '');
//     setBehavioralChanges(storedData.behavioralChanges || {
//       violent: false,
//       moreTalkative: false,
//       moreFunny: false,
//       angry: false,
//       depressed: false,
//       sleeping: false,
//       grandiosity: false,
//     });
//     setChildhoodHistory(storedData.childhoodHistory || '');
//     setSituationsBefore15(storedData.situationsBefore15 || {
//       poverty: '',
//       parental_loss: '',
//       marital_affair: '',
//       parenting: '',
//       violence: '',
//       sexual_abuse: '',
//       none: '',
//       other: '',
//     });
//   }, []);

//   const saveDataToLocalStorage = () => {
//     const dataToSave = {
//       causativeFactors,
//       experienceOfTolerance,
//       behavioralChanges,
//       childhoodHistory,
//       situationsBefore15,
//     };
//     localStorage.setItem('familyDataPage2', JSON.stringify(dataToSave));
//   };

//   const goToNextPage = () => {
//     // Save data to localStorage before navigating
//     saveDataToLocalStorage();

//     // Navigate to the next page
//     navigate('/family/page3');
//     window.scrollTo({ top: 0, behavior: 'instant' });
//   };

//   const goToPrevPage = () => {
//     // Perform any necessary validation or data processing before navigating
//     navigate('/family/page1');
//     window.scrollTo({ top: 0, behavior: 'instant' });
//   };

    
//   return (
//     <div className="fh_page fh_page2">
//       <h2 className='fh_h2'>3. Causative factors:</h2>
//       <textarea  className='fh_textarea' placeholder="Enter causative factors here"></textarea>

//       <h2 className='fh_h2'>4. Experience of Black out:</h2>
//       <label style={{ fontWeight: 'bold' }}>Experience of Tolerance:</label>
//       <textarea  className='fh_textarea' placeholder="Enter experience of tolerance here"></textarea>

//       <h2 className='fh_h2'>5. Behavioural changes after consuming Alcohol/Drugs</h2>
//       <div className="fh_checkbox-group">
//         <label>
//           <input   className='fh_input' type="checkbox" name="violent" />
//           <span className="custom-checkbox"></span>
//           Violent
//         </label>
//         <label>
//           <input className='fh_input'  type="checkbox" name="moreTalkative" />
//           <span className="custom-checkbox"></span>
//           More talkative
//         </label>
//         <label>
//           <input className='fh_input'  type="checkbox" name="moreFunny" />
//           <span className="custom-checkbox"></span>
//           Funny
//         </label>
//         <label>
//           <input className='fh_input'  type="checkbox" name="angry" />
//           <span className="custom-checkbox"></span>
//           Angry
//         </label>
//         <label>
//           <input className='fh_input' type="checkbox" name="depressed" />
//           <span className="custom-checkbox"></span>
//           Depressed
//         </label>
//         <label>
//           <input className='fh_input' type="checkbox" name="sleeping" />
//           <span className="custom-checkbox"></span>
//           Sleeping
//         </label>
//         <label>
//           <input className='fh_input' type="checkbox" name="grandiosity" />
//           <span className="custom-checkbox"></span>
//           Grandiosity
//         </label>
//       </div>
//       <br />
//       <br />
//       <div className="fh_block-head">
//         <p>II. Childhood and adolescence history</p>
//       </div>
//       <h2>6. How would you describe your childhood/teenage years?</h2>
//       <textarea  className='fh_textarea' placeholder="Describe your childhood/teenage years here"></textarea>

//       <h2 className='fh_h2'>7. Did you experience the following before the age of 15 years?</h2>
//       <table className='fh_table'>
//         <thead>
//           <tr>
//             <th className='fh_th' >Situations</th>
//             <th className='fh_th' >Present</th>
//             <th className='fh_th' >Absent</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className='fh_td' >Poverty/severe debts of parents</td>
//             <td className='fh_td' ><input  className='fh_input'  type="radio" name="poverty" value="present" /></td>
//             <td className='fh_td' ><input  className='fh_input'  type="radio" name="poverty" value="absent" /></td>
//           </tr>
//           <tr>
//             <td className='fh_td' >Early parental loss</td>
//             <td className='fh_td' ><input  className='fh_input' type="radio" name="parental_loss" value="present" /></td>
//             <td className='fh_td' ><input  className='fh_input' type="radio" name="parental_loss" value="absent" /></td>
//           </tr>
//           <tr>
//             <td className='fh_td' >Extra-marital affairs of parents</td>
//             <td className='fh_td' >
//               <input className='fh_input' type="radio" name="marital_affair" value="present" />
//             </td>
//             <td  className='fh_td'><input className='fh_input' type="radio" name="marital_affair" value="absent" /></td>
//           </tr>
//           <tr>
//             <td  className='fh_td'>Broken home/single parenting</td>
//             <td  className='fh_td'><input  className='fh_input' type="radio" name="parenting" value="present" /></td>
//             <td  className='fh_td'><input  className='fh_input' type="radio" name="parenting" value="absent" /></td>
//           </tr>
//           <tr>
//             <td  className='fh_td'>Violence</td>
//             <td  className='fh_td'><input  className='fh_input' type="radio" name="vioelnce" value="present" /></td>
//             <td  className='fh_td'><input  className='fh_input' type="radio" name="vioelnce" value="absent" /></td>
//           </tr>
//           <tr>
//             <td className='fh_td'>Sexual abuse by others</td>
//             <td className='fh_td'><input  className='fh_input' type="radio" name="sexual_abuse" value="present" /></td>
//             <td className='fh_td'><input  className='fh_input' type="radio" name="sexual_abuse" value="absent" /></td>
//           </tr>
//           <tr>
//             <td className='fh_td'>None</td>
//             <td className='fh_td'><input  className='fh_input' type="radio" name="none" value="present" /></td>
//             <td className='fh_td'><input  className='fh_input' type="radio" name="none" value="absent" /></td>
//           </tr>
//           <tr>
//             <td className='fh_td'>Any other</td>
//             <td className='fh_td'><input  className='fh_input' type="radio" name="other" value="present" /></td>
//             <td className='fh_td'><input  className='fh_input' type="radio" name="other" value="absent" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="fh_endbtn">
//         <button className="fh_prev-btn" onClick={goToPrevPage}>
//         &laquo;  Prev 
//         </button>
//         <div class="page-number">9</div>
//         <button className="fh_next-btn" onClick={goToNextPage}>
//           Next &raquo;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page2;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const [causativeFactors, setCausativeFactors] = useState('');
  const [experienceOfTolerance, setExperienceOfTolerance] = useState('');
  const [behavioralChanges, setBehavioralChanges] = useState({
    violent: false,
    moreTalkative: false,
    moreFunny: false,
    angry: false,
    depressed: false,
    sleeping: false,
    grandiosity: false,
  });
  const [childhoodHistory, setChildhoodHistory] = useState('');
  const [situationsBefore15, setSituationsBefore15] = useState({
    poverty: '',
    parental_loss: '',
    marital_affair: '',
    parenting: '',
    violence: '',
    sexual_abuse: '',
    none: '',
    other: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem('familyDataPage2')) || {};

    // Set state based on stored data
    setCausativeFactors(storedData.causativeFactors || '');
    setExperienceOfTolerance(storedData.experienceOfTolerance || '');
    setBehavioralChanges(storedData.behavioralChanges || {
      violent: false,
      moreTalkative: false,
      moreFunny: false,
      angry: false,
      depressed: false,
      sleeping: false,
      grandiosity: false,
    });
    setChildhoodHistory(storedData.childhoodHistory || '');
    setSituationsBefore15(storedData.situationsBefore15 || {
      poverty: '',
      parental_loss: '',
      marital_affair: '',
      parenting: '',
      violence: '',
      sexual_abuse: '',
      none: '',
      other: '',
    });
  }, []);

  const saveDataToLocalStorage = () => {
    const dataToSave = {
      causativeFactors,
      experienceOfTolerance,
      behavioralChanges,
      childhoodHistory,
      situationsBefore15,
    };
    localStorage.setItem('familyDataPage2', JSON.stringify(dataToSave));
  };

  const handleCheckboxChange = (name) => {
    setBehavioralChanges((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleRadioChange = (category, value) => {
    setSituationsBefore15((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const goToNextPage = () => {
    // Save data to localStorage before navigating
    saveDataToLocalStorage();

    // Navigate to the next page
    navigate('/family/page3');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goToPrevPage = () => {
    // Save data to localStorage before navigating
    saveDataToLocalStorage();

    // Perform any necessary validation or data processing before navigating
    navigate('/family/page1');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="fh_page fh_page2">
      <h2 className="fh_h2">3. Causative factors:</h2>
      <textarea
        className="fh_textarea"
        placeholder="Enter causative factors here"
        value={causativeFactors}
        onChange={(e) => setCausativeFactors(e.target.value)}
      ></textarea>

      <h2 className="fh_h2">4. Experience of Black out:</h2>
      <label style={{ fontWeight: 'bold' }}>Experience of Tolerance:</label>
      <textarea
        className="fh_textarea"
        placeholder="Enter experience of tolerance here"
        value={experienceOfTolerance}
        onChange={(e) => setExperienceOfTolerance(e.target.value)}
      ></textarea>

      <h2 className="fh_h2">5. Behavioural changes after consuming Alcohol/Drugs</h2>
      <div className="fh_checkbox-group">
        {/* Add onChange handlers for checkboxes */}
        {Object.entries(behavioralChanges).map(([key, value]) => (
          <label key={key}>
            <input
              className="fh_input"
              type="checkbox"
              name={key}
              checked={value}
              onChange={() => handleCheckboxChange(key)}
            />
            <span className="custom-checkbox"></span>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>
      <br />
      <br />
      <div className="fh_block-head">
        <p>II. Childhood and adolescence history</p>
      </div>
      <h2>6. How would you describe your childhood/teenage years?</h2>
      <textarea
        className="fh_textarea"
        placeholder="Describe your childhood/teenage years here"
        value={childhoodHistory}
        onChange={(e) => setChildhoodHistory(e.target.value)}
      ></textarea>

      <h2 className="fh_h2">7. Did you experience the following before the age of 15 years?</h2>
      <table className="fh_table">
        <thead>
          <tr>
            <th className="fh_th">Situations</th>
            <th className="fh_th">Present</th>
            <th className="fh_th">Absent</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(situationsBefore15).map(([key, value]) => (
            <tr key={key}>
              <td className="fh_td">{key.replace(/_/g, ' ')}</td>
              <td className="fh_td">
                <input
                  className="fh_input"
                  type="radio"
                  name={key}
                  value="present"
                  checked={value === 'present'}
                  onChange={() => handleRadioChange(key, 'present')}
                />
              </td>
              <td className="fh_td">
                <input
                  className="fh_input"
                  type="radio"
                  name={key}
                  value="absent"
                  checked={value === 'absent'}
                  onChange={() => handleRadioChange(key, 'absent')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="fh_endbtn">
        <button className="fh_prev-btn" onClick={goToPrevPage}>
          &laquo; Prev
        </button>
        <div className="page-number">9</div>
        <button className="fh_next-btn" onClick={goToNextPage}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Page2;

