import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page3 = () => {
  const navigate = useNavigate();
  const [childhoodProblems, setChildhoodProblems] = useState({
    runningAway: 'absent',
    frequentFights: 'absent',
    destructionOfProperty: 'absent',
    stealing: 'absent',
    scholasticBackwardness: 'absent',
    experimentingWithDrugs: 'absent',
    gambling: 'absent',
    anyOther: '',
  });
  const [educationYears, setEducationYears] = useState(12); // Set a default value, e.g., 12
  const [achievementsInPast, setAchievementsInPast] = useState('');
  const [educationalActivities, setEducationalActivities] = useState({
    goodAcademicRecords: 'absent',
    highAchieverInActivities: 'absent',
  });
  const [spouseDetails, setSpouseDetails] = useState({
    name: 'Spouse Name',
    age: '30', // Set a default age
    religion: 'Hindu',
    education: 'Graduate',
    occupation: 'Professional',
    income: '50000', // Set a default income
  });

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = localStorage.getItem('page3Data');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setChildhoodProblems(parsedData.childhoodProblems);
      setEducationYears(parsedData.educationYears);
      setAchievementsInPast(parsedData.achievementsInPast);
      setEducationalActivities(parsedData.educationalActivities);
      setSpouseDetails(parsedData.spouseDetails);
    }
  }, []);

  useEffect(() => {
    // Store data in local storage whenever it changes
    const dataToStore = {
      childhoodProblems,
      educationYears,
      achievementsInPast,
      educationalActivities,
      spouseDetails,
    };
    localStorage.setItem('page3Data', JSON.stringify(dataToStore));
  }, [childhoodProblems, educationYears, achievementsInPast, educationalActivities, spouseDetails]);

  const goToNextPage = () => {
    navigate('/family/page4');
  };

  const goToPrevPage = () => {
    navigate('/family/page2');
  };
  return (
    <div className="fh_page fh_page3">
      <h2 className='fh_h2'>8. Childhood/ adolescence (before the age of 15 years)</h2>
      <table  className='fh_table'>
        <thead>
          <tr>
            <th className='fh_th'>Problems Identified</th>
            <th className='fh_th'>Present</th>
            <th className='fh_th'>Absent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='fh_td'>Running away from home</td>
            <td  className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance1" defaultChecked />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance1" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Frequent physical fights and violence</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance2" />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance2" defaultChecked />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Destruction of others' property</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance3" />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance3"  defaultChecked/>
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Stealing</td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance4"defaultChecked />
            </td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance4" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Scholastic backwardness</td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance5" />
            </td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance5"defaultChecked />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Experimenting with drugs/alcohol</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance6"defaultChecked />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance6" />
            </td>
          </tr>
          <tr>
            <td  className='fh_td'>Gambling</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance7"defaultChecked />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance7" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Any other</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance9" />
            </td>
            <td className="checkbox-container fh_td">
              <input   className='fh_input' type="radio" name="attendance9" defaultChecked/>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <div className="fh_block-head">
          <p>III. Educational history</p>
        </div>
        <label style={{ fontWeight: 'bold' }} htmlFor="yoe">
          <h2 className='fh_h2'>9. Years of education</h2>
        </label>
        <input   className='fh_input' type="number" id="yoe" placeholder="Enter here:" defaultValue={12} />
        <label style={{ fontWeight: 'bold' }} htmlFor="Acinpast">
        <h2 className='fh_h2'>10. Achievements in the past</h2>
        </label>
        <textarea  className='fh_input' type='text' placeholder="Write here" defaultValue={'gold medal at district level in cricket'}></textarea>
        <table className="fh_table">
          <thead>
            <tr>
              <th className='fh_th'>Activities</th>
              <th className='fh_th'>Present</th>
              <th className='fh_th'>Absent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='fh_td' >Good Academic Records</td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance11" defaultChecked/>
              </td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance11" />
              </td>
            </tr>
            <tr>
              <td className='fh_td'>High Achiever in Extracurricular Activities</td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance12"/>
              </td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance12" defaultChecked />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fh_block-head">
        <p>IV. Marital history</p>
      </div>
      <span>
        <p style={{ fontWeight: 'bold', color: 'black' }}>
          <h2 className='fh_h2'>11. Details regarding spouse:</h2>
        </p>
      </span>
      <table className='fh_table'>
        <tbody>
          <tr>
            <td className=" fh_td  fh_label">Name:</td>
            <td className=" fh_td  fh_input">
              <input  className='fh_input' type="text" id="spouseName" name="spouseName" defaultValue={'Ankita'}/>
            </td>
          </tr>
          <tr>
            <td className=" fh_td  fh_label">Age:</td>
            <td className=" fh_td  fh_input">
              <input  className='fh_input' type="text" id="spouseAge" name="spouseAge" defaultValue={12}/>
            </td>
          </tr>
          <tr>
            <td className=" fh_td  fh_label">Religion/Community:</td>
            <td className=" fh_td  fh_input">
              <input  className='fh_input' type="text" id="spouseReligion" name="spouseReligion" defaultValue={'Hindu'} />
            </td>
          </tr>
          <tr>
            <td className="fh_label fh_td">Education:</td>
            <td className="fh_input fh_td" >
              <input  className='fh_input'  type="text" id="spouseEducation" name="spouseEducation" defaultValue={'PUC'} />
            </td>
          </tr>
          <tr>
            <td className="fh_label fh_td">Occupation:</td>
            <td className="fh_input fh_td">
              <input className='fh_input'  
                type="text"
                id="spouseOccupation"
                name="spouseOccupation"
                defaultValue={'Computer operator'}
              />
            </td>
          </tr>
          <tr>
            <td className="fh_label fh_td">Income per Month:</td>
            <td className="fh_input fh_td">
              <input  className='fh_input'   type="text" id="spouseIncome" name="spouseIncome"  defaultValue={'15000'}/>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fh_endbtn">
        <button className="fh_prev-btn" onClick={goToPrevPage}>
          &laquo;  Prev
        </button>
        <div class="page-number">10</div>
        <button className="fh_next-btn" onClick={goToNextPage}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Page3;
