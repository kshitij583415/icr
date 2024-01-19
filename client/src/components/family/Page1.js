import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Page.css';

const Page1 = () => {
  const navigate = useNavigate();

  // Initialize formData state
  const [formData, setFormData] = useState({
    familyHistoryRows: [
      {
        name: '',
        relation: '',
        age: '',
        income: '',
        education: '',
        occupation: '',
        intoxicants: '',
      },
    ],
    fatherDeathReason: '',
    motherDeathReason: '',
    fatherDeathAge: '',
    motherDeathAge: '',
    motherTongue: '',
    languagesKnown: '',
    denialStatus: '',
  });

  // Extract data from formData
  const {
    familyHistoryRows,
    fatherDeathReason,
    motherDeathReason,
    fatherDeathAge,
    motherDeathAge,
    motherTongue,
    languagesKnown,
    denialStatus,
  } = formData;

  const deleteRow = (index) => {
    setFormData((prevData) => {
      const updatedRows = [...prevData.familyHistoryRows];
      updatedRows.splice(index, 1);
      return { ...prevData, familyHistoryRows: updatedRows };
    });
  };

  const addRow = () => {
    setFormData((prevData) => {
      const newRow = {
        name: '',
        relation: '',
        age: '',
        income: '',
        education: '',
        occupation: '',
        intoxicants: '',
      };
      const updatedRows = [...prevData.familyHistoryRows, newRow];
      return { ...prevData, familyHistoryRows: updatedRows };
    });
  };

  const handleRowChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedRows = [...prevData.familyHistoryRows];
      updatedRows[index][field] = value;
      return { ...prevData, familyHistoryRows: updatedRows };
    });
  };

  const setFatherDeathReason = (value) => {
    setFormData((prevData) => ({ ...prevData, fatherDeathReason: value }));
  };

  const setMotherDeathReason = (value) => {
    setFormData((prevData) => ({ ...prevData, motherDeathReason: value }));
  };

  const setFatherDeathAge = (value) => {
    setFormData((prevData) => ({ ...prevData, fatherDeathAge: value }));
  };

  const setMotherDeathAge = (value) => {
    setFormData((prevData) => ({ ...prevData, motherDeathAge: value }));
  };

  const setMotherTongue = (value) => {
    setFormData((prevData) => ({ ...prevData, motherTongue: value }));
  };

  const setLanguagesKnown = (value) => {
    setFormData((prevData) => ({ ...prevData, languagesKnown: value }));
  };

  const setDenialStatus = (value) => {
    setFormData((prevData) => ({ ...prevData, denialStatus: value }));
  };

  const saveFormData = async () => {
    try {
      // Perform any necessary validation or data processing before saving
      const dataToSend = {
        familyHistoryRows,
        fatherDeathReason,
        motherDeathReason,
        fatherDeathAge,
        motherDeathAge,
        motherTongue,
        languagesKnown,
        denialStatus,
      };

      console.log('Data to send:', dataToSend);

      // Save to MongoDB using an HTTP POST request
      const response = await fetch('http://localhost:5000/family/page1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Save to localStorage
      localStorage.setItem('page1Data', JSON.stringify(dataToSend));

      // Navigate to the next page
      navigate('/family/page2');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Load data from localStorage if it exists
    const savedData = localStorage.getItem('page1Data');
    if (savedData) {
      const loadedFormData = JSON.parse(savedData);
      setFormData(loadedFormData);
    }
  }, []);

  const goToNextPage = () => {
    saveFormData();
    navigate('/family/page2');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // const handleRowChange = (index, field, value) => {
  //   setFormData((prevData) => {
  //     const updatedRows = [...prevData.familyHistoryRows];
  //     updatedRows[index][field] = value;
  //     return { ...prevData, familyHistoryRows: updatedRows };
  //   });
  // };


  return (
   <div className="page page1 active">
  <div className="fh_mainhead"></div>
  <div className="fh_family_history">
    <div className="fh_block-head">
      <p>I. Family history</p>
    </div>
    <h2 className='fh_h2'>2. Details regarding parents and siblings (provide relevant information):</h2>
    <table id="fh_myTable">
      <thead>
        <tr>
          <th className='fh_th'></th>
          <th className='fh_th'>Name</th>
          <th className='fh_th'>Relation</th>
          <th className='fh_th'>Age</th>
          <th className='fh_th'>Income</th>
          <th className='fh_th'>Education</th>
          <th className='fh_th'>Occupation</th>
          <th className='fh_th'>Use of Intoxicants</th>
          <th className='fh_th'></th>
        </tr>
      </thead>
      <tbody>
        {familyHistoryRows.map((row, index) => (
          <tr key={index}>
            <td className='fh_td'>{index + 1}</td>
            <td className='fh_td'><input className='fh_input'  type="text" name="name" value={row.name} onChange={(e)=>handleRowChange(index,'name',e.target.value)}/></td>

            <td className='fh_td'><input className='fh_input'  type="text" name="relation" value={row.relation} onChange={(e)=>handleRowChange(index,'relation',e.target.value)}/></td>
            <td className='fh_td'><input className='fh_input'  type="text" name="age" value={row.age} onChange={(e)=>handleRowChange(index,'age',e.target.value)}/></td>
            <td className='fh_td'><input className='fh_input'  type="text" name="income" value={row.income} onChange={(e)=>handleRowChange(index,'income',e.target.value)}/></td>
            <td className='fh_td'><input className='fh_input'  type="text" name="education" value={row.education} onChange={(e)=>handleRowChange(index,'education',e.target.value)}/></td>
            <td className='fh_td'><input className='fh_input'  type="text" name="occupation" value={row.occupation} onChange={(e)=>handleRowChange(index,'occupation',e.target.value)}/></td>
            <td className='fh_td'><input className='fh_input'  type="text" name="intoxicants" value={row.intoxicants} onChange={(e)=>handleRowChange(index,'intoxicants',e.target.value)}/></td>
            <td className='fh_td'>
              <button
                className="fh_delete-row-btn"
                onClick={() => deleteRow(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <button className="fh_add-row-btn" onClick={addRow}>Add Row</button>

    <div className="fh_container">
      <div className="fh_form-container">
        <table className='fh_table'>
          <tbody>
            <tr>
              <th  className='fh_th' colSpan="2">In case of death of parents</th>
            </tr>
            <tr>
              <td className='fh_td' >Father:</td>
              <td className='fh_td' >Mother:</td>
            </tr>
            <tr>
              <td className='fh_td'>
                <input
                  className='fh_input'
                  type="text"
                  id="father"
                  placeholder="Reason for father's death"
                  value={fatherDeathReason}
                  onChange={(e) => setFatherDeathReason(e.target.value)}
                />
              </td>
              <td className='fh_td'>
                <input
                  className='fh_input'
                  type="text"
                  id="mother"
                  placeholder="Reason for mother's death"
                  value={motherDeathReason}
                  onChange={(e) => setMotherDeathReason(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th  className='fh_th'  colSpan="2">How old were you at that time?</th>
            </tr>
            <tr>
              <td className='fh_td' >Father's death:</td>
              <td className='fh_td' >Mother's death:</td>
            </tr>
            <tr>
              <td className='fh_td'>
                <input
                  className='fh_input'
                  type="number"
                  id="f_death"
                  min="1"
                  placeholder="Enter age at father's death"
                  value={fatherDeathAge}
                  onChange={(e) => setFatherDeathAge(e.target.value)}
                />
              </td>
              <td className='fh_td'>
                <input
                  className='fh_input'
                  type="number"
                  id="m_death"
                  min="1"
                  placeholder="Enter age at mother's death"
                  value={motherDeathAge}
                  onChange={(e) => setMotherDeathAge(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="fh_form-container1">
      <div className="fh_form-section1">
        <label htmlFor="motherTongue" style={{ fontWeight: 'bold' }}>Mother Tongue:</label>
        <input
          className='fh_input'
          type="text"
          id="motherTongue"
          name="motherTongue"
          required
          value={motherTongue}
          onChange={(e) => setMotherTongue(e.target.value)}
        />
      </div>

      <div className="fh_form-section1">
        <label htmlFor="languagesKnown" style={{ fontWeight: 'bold' }}>Languages Known:</label>
        <input
          className='fh_input'
          type="text"
          id="languagesKnown"
          name="languagesKnown"
          required
          value={languagesKnown}
          onChange={(e) => setLanguagesKnown(e.target.value)}
        />
      </div>
    </div>
    <h2 className='fh_h2'>2.Motivation level during admission:</h2>

    <form className='fh_form'>
      <label style={{ display: 'inline' }}>
        <input
          className='fh_input'
          type="radio"
          name="denialStatus"
          value="Present"
          checked={denialStatus === 'Present'}
          onChange={() => setDenialStatus('Present')}
        />
        Present
      </label>

      <label style={{ display: 'inline' }}>
        <input
          className='fh_input'
          type="radio"
          name="denialStatus"
          value="Absent"
          checked={denialStatus === 'Absent'}
          onChange={() => setDenialStatus('Absent')}
        />
        Absent
      </label>
    </form>
    <div className="fh_endbtn">
      <div className="page-number">8</div>
      <button className="fh_next-btn" onClick={goToNextPage}>
        Next &raquo;
      </button>
    </div>
  </div>
</div>

  );
};

export default Page1;

